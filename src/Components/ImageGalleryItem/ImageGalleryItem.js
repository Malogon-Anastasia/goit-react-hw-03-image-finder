import React from "react";
import { GelleryItem, GelleryImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ data, onImageClick }) => {
  return data.map((item) => (
    <GelleryItem key={item.webformatURL} onClick={onImageClick}>
      <GelleryImage
        src={item.webformatURL}
        width={400}
        alt={item.tags}
        path={item.largeImageURL}
      />
    </GelleryItem>
  ));
};

export default ImageGalleryItem;
