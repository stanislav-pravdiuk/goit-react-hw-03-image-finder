import React, { Component } from "react";
// import { API_KEY, BASE_URL } from "./api";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
  handleFormSubmit = searchQuery => {
    console.log(searchQuery)
  }
  render() {
    return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery> */}
        {/* <ImageGalleryItem> */}
        {/* <Loader> */}
        {/* <Button> */}
        {/* <Modal> */}
    </div>
  );
  }
}
  

export default App;