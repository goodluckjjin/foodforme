import React, {Component} from 'react';
import Sort from "./presenter.js";


class Container extends Component {
    
    handleSortClick = (e) => {
        if(e.target.name === "sort1") {
            return(
                alert(`Sort1`)
            )
        } else if(e.target.name === "sort2") {
            return(
                alert(`Sort2`)
            )
        } else if(e.target.name === "sort3") {
            return(
                alert(`Sort3`)
            )
        } else if(e.target.name === "sort4") {
            return(
                alert(`Sort4`)
            )
        }  else if(e.target.name === "sort5") {
            return(
                alert(`Sort5`)
            )
        }
    }

    render(){
        return(    
            <Sort
                name={this.props.name}
                onClickSort = {this.handleSortClick}
            />
        );
    }
}

export default Container;