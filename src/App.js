import { Component } from "react";
import "./styles.css";

import Searchbar from "./Components/Searchbar/";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal";

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

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <Searchbar />
      </div>
    );
  }
}
