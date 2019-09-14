import React, { Component } from 'react';
import GalleryButton from './GalleryButton';
import '../css/GalleryButtonList.css'

class GalleryButtonList extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { categories: ['Landscape', 'Pets', 'Portraits', 'Wedding', 'All']};

    }

    handleChange(category) {
        this.props.onCategoryChange(category);
    }

    renderButtons() {
        const category = this.props.category;
        return this.state.categories.map(name => (
            <GalleryButton key={name} name={name} selectedCategory={category} onCategoryChange={this.handleChange} />
        ));
    }

    render(){
        return (
            <nav className="GalleryButtonList">
                {this.renderButtons()}
            </nav>
        );
    }
}

export default GalleryButtonList;