import { Component } from "react";
// axios, ability to talk http
import axios from "axios";

// Make sure its an "export class"
export class Edit extends Component {

    constructor() {
        super();
        // Define local methods, always in constructor
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        //Define state local veriables, populated using API call
        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }

    componentDidMount(){
        // fires when edit is called. 
        // this.props.match.params.id = will catch the id out of the url
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster,
                _id:response.data._id
            })
        })
        .catch()
    }

    handleSubmit(event) {

        const NewMovie = {
            Title:this.state.Title,
            Year:this.state.Year,
            Poster:this.state.Poster
        };
        // Making a post request and past the NewMovie object - Async
        // axios.post('http://localhost:4000/api/movies', NewMovie)
        // .then((data)=>{console.log(data) // Call back function
        // })
        // .catch((err)=>{console.log(err)
        // })
        // event.preventDefault();

        // Printing new entries to screen
        // console.log("button clicked, Title: " + this.state.Title + " Year: " + this.state.Year + " Poster: " + this.state.Poster);

        axios.put('http://localhost:4000/api/movies/' + this.state._id, NewMovie)
        .then(res=>{
            console.log(res.data)
        })
        .catch();
    }



    // Three below are "on change" events, setting values to the state
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value 
        })

    }

    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value 
        })

    }

    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value 
        })

    }

    render() {
        return (
            <div>
                {/* This will be returned when components is called */}
                <h1>This is the edit component</h1>

                <form onSubmit={this.handleSubmit}>

                    {/* Three seperate divs, each div handles input field, data retention and event calling */}

                    <div className="form-group">
                        <label>Edit Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            // Call the onChangeMovieName method
                            onChange={this.onChangeMovieName} /> 
                    </div>

                    <div className="form-group">
                        <label>Edit Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            // Call the onChangeMovieYea method
                            onChange={this.onChangeMovieYear} /> 
                    </div>

                    <div className="form-group">
                        <label>Edit Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            // Call the onChangeMoviePoster method
                            onChange={this.onChangeMoviePoster} /> 
                    </div>

                    {/* A button that executes the onSubmit */}

                    <div className='form-group'>
                        <input type='submit' value="Edit Movie" className="btn btn-primary"></input>
                    </div>

                </form>

            </div >
        );
    }
}
// Class Edit now ready for export
export default Edit;