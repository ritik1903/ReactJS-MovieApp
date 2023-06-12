import {Component} from "react";
import './index.css';
import MovieCard from "./MovieCard";


class MovieList extends Component{

    // addStars= () => {

    //     //F0rm1
    //     // this.setState({
    //     //     stars : this.state.stars += 0.5
    //     // });

    //     //Form2
    //     if (this.state.stars>=5){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             stars:prevState.stars+0.5
    //         }
    //     });


    //     // this.state.stars +=0.5;
    //     // console.log("Star is added!",this.state.stars);

    // }

    // removeStars= () => {
    //     if (this.state.stars<=0){
    //         return;
    //     }
    //     // this.setState({
    //     //     stars : this.state.stars -=0.5
    //     // });
    //     this.setState((nxtState) => {
    //         return{
    //             stars:nxtState.stars-0.5
    //         }
    //     });
    // }


    // handleFav = (movie) => {
    //     this.setState({
    //         fav : !this.state.fav
    //     })
    // }

    // handleCart = () => {
    //     this.setState({
    //         cart : !this.state.cart
    //     })
    // }

    
    

    render(){
        const {movies, addStars, removeStars, favorite, addToCart}= this.props;
        console.log(this.props);
        // const {title, plot, price, rating, poster, stars, fav, cart} = this.state.movies;
        return(  
            <>
            {movies.map((movie) => <MovieCard movies = {movie} 
                                    addStars = {addStars}
                                    removeStars = {removeStars}
                                    favorite ={favorite}
                                    addToCart = {addToCart}
                                    key={movie.id} />)}
            
            </>
        )
    }
}

export default MovieList;