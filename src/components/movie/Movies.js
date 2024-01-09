import React, { useState } from "react";
import classes from "./Movies.module.css";

const Movies = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    async function fetchMoviesHandler() {
      setIsLoading(true);
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }
  
    return (
      <>
        <section>
          <button onClick={() => { fetchMoviesHandler(); }}>Fetch Movies</button>
        </section>
        <section>
          {isLoading && <p>Loading...</p>}
          {!isLoading && movies.length > 0 && (
            <ul className={classes["movies-list"]}>
              {movies.map((movie) => (
                <li className={classes.movie} key={movie.id}>
                  <h2>{movie.title}</h2>
                  <h3>{movie.releaseDate}</h3>
                  <p>{movie.openingText}</p>
                </li>
              ))}
            </ul>
          )}
          {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        </section>
        <button onClick={props.onHideMovies}>Exit</button>
      </>
    );
  };
  
  export default Movies;
