import { Component } from "react";
import {MovieItem} from './movieItem'
 
// Make sure its an "export class"
export class Movies extends Component{
    render(){
        // return(
        //     <div>
        //         {/* This will be returned when components is called */}
        //         {/* <h1>This is the movies component</h1> */}
        //         {/* passing data from the read component to the Movies component 
        //         and log to console to see it working using props.moviesObject  */}
        //         {/* {console.log(this.props.moviesObject)}
        //         <MovieItem></MovieItem> */}
        //     </div>
        // );

        // .map splits the collection into 4 individual movies
        return this.props.moviesObject.map((film)=>{
            // A movie item getting movie data passed to it
            // passing ReloadData from read -> movies (chiled), now grandchildren can access 
            return <MovieItem movie={film} key={film.imbdID} ReloadData = {this.props.ReloadData}></MovieItem>
        })
    }
}
// Class Create now ready for export
export default Movies;