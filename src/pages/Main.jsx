import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Main() {
  const [moviesData, setMoviesData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isDataLoading, setIsDataLoading] = useState(true);

  async function loadMovies() {
    const response = await fetch(
      `https://moviesapi.ir/api/v1/movies?page=${pageNumber}`
    );
    const movies = await response.json();
    let tmpMoviesData = moviesData;
    movies.data.forEach((movie) => {
      tmpMoviesData.push(movie);
    });
    setMoviesData(tmpMoviesData);
    setIsDataLoading(false);
  }

  useEffect(() => {
    loadMovies();
  }, [pageNumber]);

  return (
    <>
      <section
        className="px-[50px] md:px-[123px] text-white w-screen"
        style={{ fontFamily: "Montserrat" }}
      >
        <h2 className="mt-32">RECOMMENDED FOR YOU</h2>
        <i className="fa fa-bars text-white flex lg:hidden ml-36 mt-5"></i>
        <ul className="hidden lg:flex mt-5 text-center">
          <li className="px-[16px] py-[8px] border-solid bg-[#E43109] mr-6 rounded-3xl ">
            Hindi
          </li>
          <li className="px-[16px] py-[8px] border-solid bg-[#5C5C5C] mr-6 rounded-3xl ">
            Bengali
          </li>
          <li className="px-[16px] py-[8px] border-solid bg-[#5C5C5C] mr-6 rounded-3xl ">
            Marathi
          </li>
          <li className="px-[16px] py-[8px] border-solid bg-[#5C5C5C] mr-6 rounded-3xl ">
            Assamese
          </li>
          <li className="px-[16px] py-[8px] border-solid bg-[#5C5C5C] mr-6 rounded-3xl ">
            Telugu
          </li>
          <li className="px-[16px] py-[8px] border-solid bg-[#E43109] mr-6 rounded-3xl ">
            Tamil
          </li>
          <li className="px-[16px] py-[8px] border-solid bg-[#5C5C5C] rounded-3xl ">
            Malayalam
          </li>
        </ul>
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-x-10 items-stretch mr-10 mt-5">
          {moviesData.map((movie, index) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="flex border-solid rounded-3xl bg-[#5E47A1] w-44 ml-auto mr-auto justify-center items-center px-[12px] py-[8px] mt-14 mb-14"
        >
          Show More
          <img className="ml-[16px]" src="./img/Vector.svg" alt="" />
        </button>
      </section>
    </>
  );
}

export default Main;
