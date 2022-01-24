import React from "react";
import propTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyles } from "./ImageGallery.styled";

const ImageGallery = ({ data, onImageClick }) => {
  return (
    <ImageGalleryStyles>
      <ImageGalleryItem data={data} onImageClick={onImageClick} />
    </ImageGalleryStyles>
  );
};

ImageGallery.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      tags: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
      previewURL: propTypes.string.isRequired,
    })
  ),
  onImageClick: propTypes.func,
};

export default ImageGallery;
