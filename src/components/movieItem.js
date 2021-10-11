import { Component } from "react";
import Card from 'react-bootstrap/Card';

// Make sure its an "export class"
export class MovieItem extends Component {
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
                </Card>
            </div>
        );
    }
}
// Class Create now ready for export
// export default MovieItem;