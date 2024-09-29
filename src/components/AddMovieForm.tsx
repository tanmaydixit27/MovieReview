import React, { useState } from 'react';

interface AddMovieFormProps {
  onCreateMovie: (name: string, releaseDate: string) => void;
}

const AddMovieForm: React.FC<AddMovieFormProps> = ({ onCreateMovie }) => {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateMovie(name, releaseDate);
    setName('');
    setReleaseDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white w-full">
      <h3 className="text-xl font-bold mb-4">Add new movie</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Movie Name</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Release Date</label>
        <input
          type="date"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        Create Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
