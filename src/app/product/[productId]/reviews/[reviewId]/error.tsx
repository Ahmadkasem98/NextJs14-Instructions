// Error handling
// Recovering from Error

"use client";
import React from "react";

type Props = {};

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      {error.message}{" "}
      <button onClick={reset} className="bg-gray-900 text-white">
        try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
