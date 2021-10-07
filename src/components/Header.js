import { Component } from "react";

// Make sure its an "export class"
export class Header extends Component{
    render(){
        return(
            <div>
                {/* This will be returned when components is called */}
                <h1>This is the header component</h1>
            </div>
        );
    }
}
// Class Header now ready for export
export default Header;