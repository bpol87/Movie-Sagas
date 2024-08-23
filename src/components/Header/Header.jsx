import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black ">
      <h1 className="text-center text-white text-4xl font-extrabold p-8">
        The Movies Saga!
      </h1>
      <div className="flex flex-row justify-center items-center p-6 text-white">
        <button className="px-4 py-1 text-2xl hover:bg-slate-400 hover:text-black hover:rounded-lg">
          <Link to="/">Home</Link>
        </button>
        <button className="px-4 py-1 text-2xl hover:bg-slate-400 hover:text-black hover:rounded-lg">
          <Link to="/movie-form">Add a Movie</Link>
        </button>
      </div>
    </div>
  );
}
export default Header;
