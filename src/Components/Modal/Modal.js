import React, { Component } from "react";
import propTypes from "prop-types";
import { ModalWindow, Overlay } from "./Modal.styled";

class Modal extends Component {
  state = {
    item: {},
    showModal: false,
  };

  onCloseModal = (event) => {
    if (event.code === "Escape") {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.onCloseModal);
    }
  };

  onBackdropClickCloseModal = (event) => {
    if (event.target.childNodes.length === 1) {
      this.setState({ showModal: false });
      window.removeEventListener("click", this.onBackdropClickCloseModal);
    }
  };

  componentDidUpdate(prevProps) {
    const { data, id } = this.props;
    if (prevProps.id !== this.props.id) {
      this.setState({
        item: data.find((item) => item.webformatURL === id),
        showModal: true,
      });
      window.addEventListener("keydown", this.onCloseModal);
      window.addEventListener("click", this.onBackdropClickCloseModal);
    }
  }

  render() {
    const { item, showModal } = this.state;
    return (
      <>
        {showModal && (
          <Overlay className="overlay">
            <ModalWindow className="modal">
              <img src={item.largeImageURL} alt={item.tags} />
            </ModalWindow>
          </Overlay>
        )}
      </>
    );
  }
}

Modal.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      tags: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
      previewURL: propTypes.string.isRequired,
    })
  ),
  id: propTypes.string,
  closeModal: propTypes.func,
  onModalShow: propTypes.func,
};

export default Modal;
