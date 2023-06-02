import {Component} from "react";
import './index.css';

class MovieCard extends Component{

    render(){
        console.log(this.props);
        const {title,plot,price,rating,stars,fav,cart} = this.props.movies;
        return( 
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/avengers-marvel-hero-party-birthday-invite-design-template-c2383ac0a892e5fe0fc0ee2a258807fa.jpg?ts=1636998386" alt="poster" />

                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png" alt="decrease" onClick={() => {this.props.removeStars(this.props.movies)}}/>
                                <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="star" className="stars" />
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/399/399271.png" alt="increase" onClick={() => {this.props.addStars(this.props.movies)}}/>
                            <span className="starCount">{stars}</span>
                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Unfavourite</button>:
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={() => {this.props.favorite(this.props.movies)}}>{fav?"Unfavourite":"Favourite"}</button>
                            
                           


                            <button className={cart?"uncart-btn":"cart-btn"} onClick={() => {this.props.addToCart(this.props.movies)}}>{cart?"Add to Cart":"Remove from cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;