import React, { Component } from 'react';
import '../css/GalleryButton.css';

class GalleryButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onCategoryChange(event.target.dataset.filter);
    }

    render() {
    return (
        <button className="GalleryButton" data-filter={this.props.name} onClick={this.handleClick}>
            {this.props.name}
        </button>
        );
    }
}

export default GalleryButton;