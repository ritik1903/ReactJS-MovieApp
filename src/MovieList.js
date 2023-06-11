import {Component} from "react";
import './index.css';
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies : [
                {
                  id:1,
                    title: 'The Avengers',                  
                    plot:
                      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',            
                    price: 99,            
                    stars: 0,
                    fav: false,
                    cart: false                  
                  },
                  {
                    id:2,
                    title: 'The Dark Knight',                  
                    plot:
                      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                    rating: '9.0',            
                    price: 199,            
                    stars: 0,            
                    fav: false,
                    cart: false                  
                  },
                  {
                    id:3,
                    title: 'Iron Man',                 
                    plot:
                      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                    poster:
                      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                    rating: '7.9',            
                    price: 139,            
                    stars: 0,            
                    fav: false,
                    cart: false                  
                  }
            ]
        }
    }

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
        const {movies}= this.state;
        // const {title, plot, price, rating, poster, stars, fav, cart} = this.state.movies;
        return(  
            <>
            {movies.map((movie) => <MovieCard movies = {movie} 
            addStars= {this.handleIncStar} 
            removeStars= {this.handleDecStar} 
            favorite={this.handleToggleFav} 
            addToCart={this.handleAddToCart} 
            key={movie.id} />)}
            
            </>
        )
    }
}

export default MovieList;