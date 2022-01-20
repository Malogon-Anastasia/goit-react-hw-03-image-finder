import PropTypes from "prop-types";

function ImageGalleryItem({ image, alt, onModalClick }) {
  return (
    <li className="ImageGalleryItem" onClick={onModalClick}>
      <img src={image} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  onModalClick: PropTypes.func,
};

export default ImageGalleryItem;
