import { Component } from "react";

// Make sure its an "export class"
export class Footer extends Component{
    render(){
        return(
            <div>
                {/* This will be returned when components is called */}
                <h1>This is the footer component</h1>
            </div>
        );
    }
}
// Class Footer now ready for export
export default Footer;