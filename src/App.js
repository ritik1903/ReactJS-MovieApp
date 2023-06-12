import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import "./index.css";
import { movies } from "./moviesData";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        movies : movies,
        cartCount : 0
    }
}

handleIncStar = (movie) => {

  const {movies} = this.state;

  const mid = this.state.movies.indexOf(movie);
  if(movies[mid].stars >= 5){
      return;
  }

  movies[mid].stars += 0.5;

  this.setState({
      movies : movies

  })
}

handleDecStar = (movie) => {
  const {movies} = this.state;

  const mid = this.state.movies.indexOf(movie);
  if(movies[mid].stars <= 0){
      return;
  }

  movies[mid].stars -= 0.5;

  this.setState({
      movies : movies

  })
}

handleToggleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
}

handleAddToCart = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].cart = !movies[movieId].cart;

  this.setState({
      movies
  })
}

  render(){
    const {movies} = this.state;
    return (
      <>
      <Navbar />
      <MovieList movies = {movies}
      addStars = {this.handleIncStar}
      removeStars = {this.handleDecStar}
      favorite = {this.handleToggleFav}
      addToCart = {this.handleAddToCart}/>
      </>
     );
  }
}

export default App;
