const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-5 tracking-tight">404</h1>
      <p className="text-2xl text-gray-700 mb-2">Page Not Found</p>
      <p className="text-md text-gray-500">The page you’re looking for doesn’t exist.</p>
    </div>
  );
};

export default PageNotFound;
