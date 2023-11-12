import React from "react";

const Loading = () => {
  return (
    <div className="font-plusjkt flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
      <p className="ml-2 text-black">Loading...</p>
    </div>
  );
};

export default Loading;