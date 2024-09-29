import React from 'react';

interface MovieDetailsProps {
  movie: {
    name: string;
    releaseDate: string;
    rating: number;
  };
  reviews: { reviewer: string; rating: number; comment: string }[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, reviews }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>
      <p className="text-sm text-gray-600 mb-2">Released: {movie.releaseDate}</p>
      <p className="text-lg font-semibold mb-4">Rating: {movie.rating}/10</p>

      <div>
        {reviews.map((review, index) => (
          <div key={index} className="border-b py-2">
            <p className="font-semibold">{review.reviewer}</p>
            <p className="text-sm">Rating: {review.rating}/10</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
