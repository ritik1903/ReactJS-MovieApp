import {Component} from "react";
import './index.css';
import MovieCard from "./MovieCard";

class MovieList extends Component{
    render(){
       
        return(  
            <>
            <MovieCard />
            </>
        )
    }
}

export default MovieList;