// SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-8 pr-20 bg-silver rounded-md mr-2"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {/* Search icon */}
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-5.2-5.2"
            />
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
      </div>
      {/* <button
        className="bg-gray text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        onClick={() => alert('Search button clicked')}
      >
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;
