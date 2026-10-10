import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center bg-linear-to-r from-teal-700 to-cyan-600 px-3 py-3 sm:px-8 sm:py-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3 font-bold text-lg sm:text-xl">
  <span>MediaSearch</span>

  <Link to="/"
    className="bg-white text-black px-3 py-2 rounded-lg text-sm sm:text-base whitespace-nowrap">Go Home
  </Link>
</div>
        <div className="flex gap-2 sm:gap-4 text-sm sm:text-xl items-center font-bold">
          <Link
            className="text-black bg-white hover:bg-gray-200
                active:scale-95 cursor-pointer

                 px-2 py-2 sm:px-3 rounded-lg
                 text-sm sm:text-base transition-all duration-200
                 whitespace-nowrap"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-black bg-white hover:bg-gray-200
                   active:scale-95 cursor-pointer
                   px-2 py-2 sm:px-3 rounded-lg
                   text-sm sm:text-base transition-all duration-200
                   whitespace-nowrap"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};
