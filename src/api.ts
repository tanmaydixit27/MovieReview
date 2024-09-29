import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Define types for the movie and review
export interface Movie {
  id?: number;
  name: string;
  releaseDate: string;
}

export interface Review {
  id?: number;
  movieId: number;
  reviewer: string;
  rating: number;
  comment: string;
}

// Fetch all movies
// Fetch all movies
export const fetchMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get<Movie[]>(`${API_URL}/movies`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies', error);
      throw error;
    }
  };
  
  // Create a new movie
  export const createMovie = async (movieData: Movie): Promise<Movie> => {
    try {
      const response = await axios.post<Movie>(`${API_URL}/movies`, movieData);
      return response.data;
    } catch (error) {
      console.error('Error creating movie', error);
      throw error;
    }
  };
  
  // Fetch reviews for a specific movie
  export const fetchReviewsByMovieId = async (movieId: number): Promise<Review[]> => {
    try {
      const response = await axios.get<Review[]>(`${API_URL}/movies/${movieId}/reviews`);
      return response.data;
    } catch (error) {
      console.error('Error fetching reviews', error);
      throw error;
    }
  };
  
  // Create a new review
  export const createReview = async (reviewData: Review): Promise<Review> => {
    try {
      const response = await axios.post<Review>(`${API_URL}/reviews`, reviewData);
      return response.data;
    } catch (error) {
      console.error('Error creating review', error);
      throw error;
    }
  };
  