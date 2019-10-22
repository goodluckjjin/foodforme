import React, { Component } from 'react';
import './style.scss';

class Sort extends Component {

    handleSortClick = (e) => {
        if (e.target.name === "sort1") {
            return (
                alert(`Sort1`)
            )
        } else if (e.target.name === "sort2") {
            return (
                alert(`Sort2`)
            )
        } else if (e.target.name === "sort3") {
            return (
                alert(`Sort3`)
            )
        } else if (e.target.name === "sort4") {
            return (
                alert(`Sort4`)
            )
        } else if (e.target.name === "sort5") {
            return (
                alert(`Sort5`)
            )
        }
    }

    render() {
        return (
            <li className="sort">
                <button name={this.props.name} value={this.props.value} onClick={this.props.onClickSort} className="sort_btn">
                    <span className="circle"></span>
                    <span className="tit">No Gluten</span>
                </button>
            </li>

        );
    }
}

export default Sort;