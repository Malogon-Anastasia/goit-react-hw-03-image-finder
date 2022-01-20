import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Components/Searchbar/";
import ImageGallery from "./Components/ImageGallery";

// import Button from "./Components/Button/Button";
// import Modal from "./Components/Modal";

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    largeImgSrc: "",
    largeImgAlt: "",
    error: null,
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer />
      </div>
    );
  }
}
