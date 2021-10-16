import classes from "./MovieList.module.css";
const MovieList = (props) => {
  return (
    <>
      <div>
        <div className={classes["movieInfo"]}>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.posterLink}`}
            className={classes["poster"]}
            alt="poster"
          />
          <h2 className={classes["title"]}>{props.movieName}</h2>
          <p className={classes["rating"]}>
            {props.rating} | {props.releaseYear}
          </p>
        </div>
      </div>
    </>
  );
};
export default MovieList;
