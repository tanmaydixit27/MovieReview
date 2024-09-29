import React from 'react';

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

interface ReviewListProps {
  reviews: Review[];
  onEditReview: (index: number) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onEditReview }) => {
  // Calculate the average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return (
    <div className="mt-4 space-y-4">
      {/* Display the average rating */}
      {reviews.length > 0 && (
        <div className="mb-4 text-lg font-semibold text-gray-800">
          Average Rating: {averageRating.toFixed(1)}/10
        </div>
      )}

      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex justify-between items-start bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <div>
            <p className="text-lg font-bold text-gray-800">{review.reviewer}</p>
            <p className="text-sm text-gray-600">Rating: {review.rating}/10</p>
            <p className="mt-1">{review.comment}</p>
          </div>
          <button
            className="ml-4 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
            onClick={() => onEditReview(index)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
