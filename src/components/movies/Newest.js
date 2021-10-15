import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import classes from "./List.module.css";
const apiKey = `3a94078fb34b772a31d9a1348035bed7`;
const Newest = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`
    );
    const movies = await response.json();
    // console.log(movies);
    const filteredMovieData = movies.results.map((movie) => {
      return {
        poster_path: movie.poster_path,
        title: movie.original_title,
        releaseYear: movie.release_date,
        rating: movie.vote_average,
      };
    });
    // console.log(filteredMovieData);
    setData(filteredMovieData);
  }, []);
  return (
    <>
      <ol className={classes["movieGrid"]}>
        {data.map((movie, index) => {
          return (
            <MovieList
              key={index}
              posterLink={movie.poster_path}
              movieName={movie.title}
              releaseYear={movie.releaseYear.slice(0, 4)}
              rating={movie.rating}
            />
          );
        })}
      </ol>
    </>
  );
};
export default Newest;