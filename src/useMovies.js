import { useState,useEffect } from "react";

export function useMovies(query){

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
const KEY = "75b58d54";
 
   
 useEffect(function () {

  //  callBack?.();
  const controller = new AbortController()

  async function fetchMovies() {

    try {
      setIsLoading(true);
      setError('');

      const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`, { signal: controller.signal });
      if (!res.ok) throw new Error("Something went wrong with fetching movies")


      const data = await res.json();

      if (data.Response === 'False') throw new Error('movie not found');

      setMovies(data.Search)
      setError("")

    } catch (err) {
      console.error(err.message);
      if (err.name !== "AbortError") {

        setError(err.message)
      }
    } finally {
      setIsLoading(false);

    }
  }

  if (query.length < 3) {
    setMovies([]);
    setError('');
    return;
  }

  // handleCloseMovie();
  fetchMovies();
  return function () {
    controller.abort();
  }
}, [query]);

return {movies,isLoading,error}
}