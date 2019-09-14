import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import GalleryButtonList from './components/GalleryButtonList';
import GalleryImages from './components/GalleryImages';

class App extends Component {

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {category: ''};

  }

  handleChange(category){
    this.setState({category});
  }

  render() {

    const category = this.state.category;

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="Header__title">Sandra Fiske Photography</h1>
          <p><a href="//www.instagram.com/sans383" className="Header__link">@sans383</a> | <a href="tel:4169126159" className="Header__link">416.912.6159</a> | <a href="mailto:info@sandrafiskephotography.com" className="Header__link">info@sandrafiskephotography.com</a></p>
        </div>
        <GalleryButtonList selectedCategory={category} onCategoryChange={this.handleChange}/>
        <GalleryImages selectedCategory={category} />
      </div>
    );
  }
}

export default App;
