import React, { useState } from 'react';

interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  rating: number;
}

interface Review {
  id: number;
  movieId: number;
  content: string;
}

interface MovieListProps {
  movies: Movie[];
  onEditMovie: (id: number) => void;
  onMovieClick: (id: number) => void;  // New prop for movie click
}

const MovieList: React.FC<MovieListProps> = ({ movies, onEditMovie, onMovieClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [moviesState, setMovies] = useState<Movie[]>(movies);  // Type movies state properly
  const [reviews, setReviews] = useState<Review[]>([]);        // Type reviews state with Review[]

  // Function to handle deleting a movie and its related reviews
  const handleDeleteMovie = (id: number) => {
    setMovies(moviesState.filter(movie => movie.id !== id));
    setReviews(reviews.filter(review => review.movieId !== id)); // Remove related reviews
  };

  const filteredMovies = moviesState.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a movie"
        className="mb-4 p-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => onMovieClick(movie.id)}  // On card click
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">{movie.name}</h2>
            <p className="text-sm text-gray-600 mb-1">Released: {movie.releaseDate}</p>
            <p className="text-sm text-gray-600 mb-3">Rating: {movie.rating}/10</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-2"
              onClick={() => onEditMovie(movie.id)}
            >
              Edit Movie
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
              onClick={() => handleDeleteMovie(movie.id)}
            >
              Delete Movie
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
