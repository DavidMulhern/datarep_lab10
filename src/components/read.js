import { Component } from "react";
import Movies from "./movies";
// Import axios in order to be able to work with HTTP client
import axios from "axios";

// Make sure its an "export class"
export class Read extends Component{


    // This is the life cycle hook
    // REF: https://reactjs.org/docs/state-and-lifecycle.html
    componentDidMount(){

        // ****** axios, go get the http data from server *******
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{ // When it comes back aka call back function
            this.setState({movies: response.data.movies}) // updates the below movies array
        }) 
        .catch((error)=>{
            console.log(error);
        }); // If it doesn't work

    }

    // State at work - Read component
    state = {

        // movies object
        movies: []            
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