import { XCircle } from "lucide-react";

function Fail() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-zinc-900 p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
        <XCircle className="mx-auto text-red-500 w-20 h-20 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Failed to Load</h1>
        <p className="text-gray-400 mb-6">
          Something went wrong while loading the page. Please try again.
        </p>
        <a
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition transform hover:scale-105">
          Retry
        </a>
      </div>
    </div>
  );
}

export default Fail;
