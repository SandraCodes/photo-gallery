import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import '../css/GalleryImages.css';

class GalleryImages extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }
    componentWillMount() {
        var myImages = require('../data/images.json');
        this.setState({images: myImages.images})
    }
   
    renderImages(){
        
        let filteredImages = this.state.images;
        
        let filterCategory = this.props.selectedCategory;
        if (filterCategory !== 'All' && filterCategory !== '') {
            filteredImages = this.state.images.filter(image => image.category === filterCategory );
        }
        
        return filteredImages.map(image => (
            <GalleryImage key={image.source} name={image}  />
        ));
    }
    
    render() {
        return(
            <div className="GalleryImages">
                {this.renderImages()}
            </div>
        );
    }
}

export default GalleryImages;