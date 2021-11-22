import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'; // using a link for edit button
import Button from 'react-bootstrap/Button'; // Using a bootstrap button
import axios from 'axios'; // http client used for promises

// Make sure its an "export class"
export class MovieItem extends React.Component {

    // Need to make a constructor in order to bind to this instance
    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // Delete movie method
    DeleteMovie(e){
        //Make the event cancellable
        e.preventDefault();
        console.log("Deeeleetee :" + this.props.movie._id)

        // axios promise
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData()
        })
        .catch('err', err => console.log(err));
    }

    render() {
        return (
            <div>
                {/* ORIGINAL STUFF */}
                {/* This will be returned when components is called */}
                {/* <h1>This is the MovieItem component</h1> */}
                {/* Specifying what data is being sent */}
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img> */}

                {/* Card using bootstrap  */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit link</Link>
                    {/* added a bootstrap button, fancy */}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }

}
// Class Create now ready for export
// export default MovieItem;