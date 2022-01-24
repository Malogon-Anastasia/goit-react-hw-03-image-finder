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

class App extends Component {
  state = {
    filter: "",
    data: [],
    counter: 1,
    status: "idle",
    id: "",
    endOfList: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { filter, counter } = this.state;
    if (prevState.filter !== this.state.filter) {
      this.setState({ status: "pending" });

      fetchImages(filter, counter).then((response) => {
        this.setState({
          data: [...response],
          status: "resolved",
          counter: counter + 1,
        });
      });
    }
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    const form = event.target;
    const notify = () => toast.error("Введите название картинки");

    if (inputValue) {
      this.setState({ filter: inputValue, endOfList: false, counter: 1 });
      form.reset();
    } else {
      notify();
    }
  };

  onButtonClick = () => {
    const { filter, counter } = this.state;
    this.setState({ status: "load", counter: counter + 1 });

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
          <ToastContainer />
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
