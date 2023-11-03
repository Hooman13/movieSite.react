export default function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="mb-4" style={{ fontFamily: "Montserrat" }}>
      <img src={movie.poster} className="rounded-md	 h-150" alt={movie.title} />
      <p className="text-sm font-bold line-clamp-1 mt-1">{movie.title}</p>
      <p className="text-xs text-[#AFAFAF] font-bold mt-1">{movie.year}</p>
      <div className="flex justify-between mt-1">
        <div className="flex">
          <img src="./img/image-3.svg" alt="" />
          <p className="text-base font-bold text-[#FFC907] pl-1">
            {movie.imdb_rating}
          </p>
        </div>
        <div className="flex">
          <img src="./img/eye1.svg" alt="" />
          <img className="pl-1" src="./img/image-4.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
