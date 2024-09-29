import React, { useState } from 'react';

interface AddReviewFormProps {
  movies: { id: number; name: string }[];
  onCreateReview: (movieId: number, reviewer: string, rating: number, comment: string) => void;
}

const AddReviewForm: React.FC<AddReviewFormProps> = ({ movies, onCreateReview }) => {
  const [selectedMovie, setSelectedMovie] = useState<number | undefined>(undefined);
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMovie && rating !== undefined) {
      onCreateReview(selectedMovie, reviewer, rating, comment);
      setReviewer('');
      setRating(undefined);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white w-full">
      <h3 className="text-xl font-bold mb-4">Add new review</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Movie</label>
        <select
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(Number(e.target.value))}
        >
          <option value="">Select a movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rating (out of 10)</label>
        <input
          type="number"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
      >
        Submit Review
      </button>
    </form>
  );
};

export default AddReviewForm;
