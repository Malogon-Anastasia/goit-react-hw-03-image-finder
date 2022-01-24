import React, { Component } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Loader from "./Components/Loader";
import Modal from "./Components/Modal";
import "./styles.css";
import { fetchImages } from "./Services/images-api";

let counter = 1;
class App extends Component {
  state = {
    filter: "",
    data: [],
    status: "idle",
    id: "",
    endOfList: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { filter } = this.state;
    if (prevState.filter !== this.state.filter) {
      this.setState({ status: "pending" });

      fetchImages(filter, 1).then((response) => {
        this.setState({ data: [...response], status: "resolved" });
      });
    }
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    const form = event.target;
    const notify = () => toast.error("Please enter a search query");

    if (inputValue) {
      this.setState({ filter: inputValue, endOfList: false });
      form.reset();
      counter = 1;
    } else {
      notify();
    }
  };

  onButtonClick = () => {
    const { filter } = this.state;
    counter += 1;

    this.setState({ status: "load" });

    fetchImages(filter, counter).then((response) => {
      this.setState((prevState) => {
        const newState = {
          data: [...prevState.data, ...response],
          status: "resolved",
        };

        if (response.length === 0) {
          const updateState = {
            endOfList: true,
          };
          return updateState;
        }
        return newState;
      });
    });
  };

  onImageClick = (event) => {
    if (event.target.nodeName === "IMG") {
      this.setState({ id: event.target.src });
    }
  };

  render() {
    const { data, status, id, endOfList } = this.state;

    if (status === "idle") {
      return (
        <>
          <Searchbar onSubmit={this.onHandleSubmit} />
          <ToastContainer />
        </>
      );
    }

    if (status === "pending") {
      return (
        <>
          <Searchbar onSubmit={this.onHandleSubmit} />
          <Loader />
        </>
      );
    }

    if (status === "resolved" || status === "load") {
      return (
        <>
          <Searchbar onSubmit={this.onHandleSubmit} />
          <ImageGallery data={data} onImageClick={this.onImageClick} />
          <Button
            data={data}
            onClick={this.onButtonClick}
            endOfList={endOfList}
            status={status}
          />
          <ToastContainer position="top-right" />
          {data && (
            <Modal
              data={data}
              id={id}
              closeModal={this.onModalClose}
              onModalShow={this.onModalShow}
            />
          )}
        </>
      );
    }
  }
}

export default App;
