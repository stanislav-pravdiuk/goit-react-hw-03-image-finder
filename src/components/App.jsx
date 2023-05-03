import React, { Component } from "react";
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from "./searchbar/Searchbar";
import css from './app.module.css';
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };
  
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery })
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
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
          toggleModal={this.toggleModal}
        />
        {/* <Button> */}

        {this.state.showModal &&
          <Modal onClose={this.toggleModal}>
            <img src="https://pixabay.com/get/gc78d0b2edcf13b76e26356b67876555747d7e9c5c8066f328c5e295b9dc14a7e691e608c485b316aafa3cdc2df9653e7a1eec8d527e73fa739294765f10084f4_1280.jpg" alt="" />
          </Modal>}
    </div>
  );
  }
}
  

export default App;