import { useState, useEffect } from "react";


// In simple terms, useEffect in React is a hook that lets you run side effects in function components. Side effects can be things like fetching data, updating the DOM, or setting up timers. useEffect takes two arguments: a function to run, and an optional array of dependencies. The effect runs when the component renders, and it re-runs if any of the dependencies change. If you want the effect to run only once (like componentDidMount), you pass an empty array as the second argument.


import "./App.css";

// Import our components
import MovieDisplay from "./Components/MovieDisplay";
import Form from "./Components/Form";


  export default function App() {
    // Constant with your API Key
    const apiKey = "14762060";
  
    // State to hold movie data
    const [movie, setMovie] = useState(null);
  
    // Function to get movies
    const getMovie = async(searchTerm) => {
      // Make fetch request and store the response and after ? it is all query
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
        );
        const data = await response.json();
        setMovie(data);
      } catch(e) {
        console.error(e)
      }

      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    };

      // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  
    // We pass the getMovie function as a prop called moviesearch
    return (
      <div className="App">
        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie} />
      </div>
    );
  }