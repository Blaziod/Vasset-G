import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <Link
        to="/auth"
        className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Go to Auth Page
      </Link>
      <div className="text-[#0b5530]">Hello, Tailwind!</div>
    </div>
  );
};

export default HomePage;
