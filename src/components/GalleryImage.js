import React, { Component } from 'react';
import '../css/GalleryImage.css';

class GalleyImage extends Component{

    constructor(props) {
        super(props);
        this.state = {image: {source: '200/300', altText: 'Bill Murrey', category: 'Landscape'}};

    }
    render(){
        return (
            <div className="GalleryImage" data-category={this.props.name.category}>
                <img className="GalleryImage__content" src={"http://fillmurray.com/g/" + this.props.name.source} alt={this.props.name.altText} />
            </div>
        );
    }
}

export default GalleyImage;