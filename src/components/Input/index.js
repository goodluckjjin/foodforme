import React, { Component } from 'react';
import './style.scss';

class Container extends Component {

    render() {
        return (
            <div className="input_area">
                <input
                    type={this.props.type}
                    name={this.props.name}
                    onChange={this.props.onChangeInput}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                />

            </div>

        );
    }
}

export default Container;
