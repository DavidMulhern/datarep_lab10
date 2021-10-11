import { Component } from "react";
import Movies from "./movies";

// Make sure its an "export class"
export class Read extends Component{

    // State at work - Reead component
    state = {

        // movies object
        movies: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]            
    };

    render(){
        return(
            <div>
                {/* This will be returned when components is called */}
                <h1>This is the read component</h1>
                {/* embedding movies component into read component */}
                {/* pass data from read into movies, with <> making an object 'moviesObject'*/}
                <Movies moviesObject={this.state.movies}></Movies>
            </div>
        );
    }
}
// Class Read now ready for export
export default Read;