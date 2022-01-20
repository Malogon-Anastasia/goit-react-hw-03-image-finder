import { Component } from "react";
import { ImageGalleryStyles } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log("Изменение!");
      console.log("prevProps.searchQuery: ", prevProps.searchQuery);
      console.log("this.props.searchQuery: ", this.props.searchQuery);
    }
  }
  render() {
    return (
      <div>
        {/* <h1>Pictures</h1> */}
        <ImageGalleryStyles>{this.props.searchQuery}</ImageGalleryStyles>
      </div>
    );
  }
}
