import React, { Component } from 'react';
import SearchBar from "./presenter.js";


class Container extends Component{
    
    state = {
        searchbar_value: '',
    }

    handleSearchBar = (e) => {
        // console.log(typeof(e.target.name)); //string
        // console.log(typeof(e.target.value)); //string
        
        if(e.target.name==="searchBar"){
            this.setState({
                searchbar_value : e.target.value
            })
        }   
        console.log(e.target.value); // 한글자씩 찍힘
    };

    // console.log()
    handleButton = (e) => {
        if(e.target.name==="searchBar_btn"){
            return(
                alert(`searchbar: ${this.searchbar_value}`)
                
            )
        }
    }

    
    render(){
        return(    
            <SearchBar
                type={this.type}
                name={this.name}
                value={this.state.value}
                onChangeSearchBar = {this.handleSearchBar}
                onChangeButton = {this.handleButton}
            />
        );
    }
}

export default Container;