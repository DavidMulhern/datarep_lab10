import { Component } from "react";

// Make sure its an "export class"
export class Create extends Component{
    render(){
        return(
            <div>
                {/* This will be returned when components is called */}
                <h1>This is the creat component</h1>
            </div>
        );
    }
}
// Class Create now ready for export
export default Create;