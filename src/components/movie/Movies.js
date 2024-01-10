import React, { useState, useEffect, useCallback } from "react";
import classes from "./Movies.module.css";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //We used useCallback hook here because below in useEffect we are passing fetchMoviesHandler fn as dependency and functions are like object in js whihc is reference data type so it will change in every renders so we used useCallback so that fn points to same reference when it was created first.
  const fetchMoviesHandler = useCallback(async function () {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something Went wrong ...Retrying");
      }
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
      setError(error.message);
    }
    setIsLoading(false);
  }, []);//we didn't passed any dependency here because there is nothing, fetch is not dependency it is api and setStates don't change as we read in state hooks and we kept fecthMoviesHandler fn as variable that's why we used useEffect below it here so that it don't show error or undefined becuase of hoisting

  useEffect(() => { //we using fetch api to interact with backend so it is sideEffect work that's why we used 
    fetchMoviesHandler();//useEffect so when that we don't have to click fetch movies when compo renders autmaticaly
  }, [fetchMoviesHandler]);//this useEffect will run and we also used useState above so that if we click fetch movie
                             //then also fetch api works
                             
  let content = <p>Found No Movies.</p>;
  if (movies.length > 0) {
    content = (
      <ul className={classes["movies-list"]}>
        {movies.map((movie) => (
          <li className={classes.movie} key={movie.id}>
            <h2>{movie.title}</h2>
            <h3>{movie.releaseDate}</h3>
            <p>{movie.openingText}</p>
          </li>
        ))}
      </ul>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <section>
        <button
          onClick={() => {
            fetchMoviesHandler();
          }}
        >
          Fetch Movies
        </button>
      </section>
      <section>{content}</section>
      <button onClick={props.onHideMovies}>Exit</button>
    </>
  );
};

export default Movies;
