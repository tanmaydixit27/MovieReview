import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import ReviewList from './components/ReviewList';
import AddMovieForm from './components/AddMovieForm';
import AddReviewForm from './components/AddReviewForm';
import axios from 'axios'; // Import axios without AxiosResponse

interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  rating: number;
}

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
  movieId: number;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch movies when the app loads
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>('http://localhost:5000/movies');
        setMovies(response.data); // Use response.data directly
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  const handleEditMovie = (id: number) => {
    const movie = movies.find(movie => movie.id === id);
    if (movie) {
      setSelectedMovie(movie);
      // Fetch reviews for the selected movie
      axios.get<Review[]>(`http://localhost:5000/movies/${id}/reviews`)
        .then(response => {
          setReviews(response.data); // Use response.data directly
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
        });
    }
  };

  const handleCreateMovie = async (name: string, releaseDate: string) => {
    try {
      const response = await axios.post<Movie>('http://localhost:5000/movies', { name, releaseDate });
      setMovies(prevMovies => [...prevMovies, response.data]); // Use response.data directly
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  };

  const handleCreateReview = async (movieId: number, reviewer: string, rating: number, comment: string) => {
    try {
      const response = await axios.post<Review>(`http://localhost:5000/movies/${movieId}/reviews`, { reviewer, rating, comment });
      setReviews(prevReviews => [...prevReviews, response.data]); // Use response.data directly
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  const handleMovieClick = (id: number) => {
    const movie = movies.find(movie => movie.id === id);
    if (movie) {
      setSelectedMovie(movie);
      axios.get<Review[]>(`http://localhost:5000/movies/${id}/reviews`)
        .then(response => {
          setReviews(response.data); // Use response.data directly
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
        });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      <div className="col-span-1">
        <MovieList movies={movies} onEditMovie={handleEditMovie} onMovieClick={handleMovieClick} />
      </div>

      <div className="col-span-2">
        {selectedMovie && (
          <div>
            <MovieDetails movie={selectedMovie} reviews={reviews.filter(r => r.movieId === selectedMovie.id)} />
            <ReviewList reviews={reviews.filter(r => r.movieId === selectedMovie.id)} onEditReview={() => {}} />
          </div>
        )}
      </div>

      <div className="col-span-1">
        <AddMovieForm onCreateMovie={handleCreateMovie} />
        <AddReviewForm movies={movies} onCreateReview={handleCreateReview} />
      </div>
    </div>
  );
};

export default App;
