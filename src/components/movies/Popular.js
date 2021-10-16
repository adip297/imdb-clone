import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import classes from "./List.module.css";
const apiKey = `3a94078fb34b772a31d9a1348035bed7`;
const Popular = (props) => {
  const [data, setData] = useState([]);
  const fetchData = async (media) => {
    if (media === "movies") {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
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
    } else {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      const tv = await response.json();
      // console.log(movies);
      const filteredTvData = tv.results.map((tv) => {
        return {
          poster_path: tv.poster_path,
          title: tv.original_name,
          releaseYear: tv.first_air_date,
          rating: tv.vote_average,
        };
      });
      // console.log(filteredMovieData);
      setData(filteredTvData);
    }
  };
  useEffect(() => {
    fetchData(props.media);
  }, [props.media]);
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
export default Popular;
