import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function addMovieHandler(movie) {
    const res = await fetch(
      "https://react-http-27133-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  }
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://react-http-27133-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data = await res.json();
      const LoadedMovies = [];
      for (const key in data) {
        LoadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      // const transformedMovies = data.results.map((mov) => {
      //   return {
      //     id: mov.episode_id,
      //     title: mov.title,
      //     openingText: mov.opening_crawl,
      //     releaseDate: mov.release_date,
      //   };
      // });
      setMovies(LoadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    // .then((res) => res.json())
    // .then((data) => {
    //   const transformedMovies =
    // });
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
