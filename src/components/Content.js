import { Component } from "react";

// Make sure its an "export class"
export class Content extends Component{
    render(){
        return(
            <div>
                {/* This will be returned when components is called */}
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// Class content now ready for export
export default Content;