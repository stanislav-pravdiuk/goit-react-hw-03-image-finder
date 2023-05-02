import React, { Component } from "react";
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from "./searchbar/Searchbar";
import css from './app.module.css';
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    searchQuery: '',
  };
  
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery })
  };

  render() {
    return (
    <div className={css.app}
      >
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          onHandleResponse={this.handleResponse}
        />
        {/* <Button> */}
        {this.state.showModal && <Modal />}
        {/* <Modal /> */}
    </div>
  );
  }
}
  

export default App;