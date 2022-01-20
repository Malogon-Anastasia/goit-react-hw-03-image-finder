import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

import {
  SearchbarStyles,
  ButtonFormStyles,
  SearchFormInputStyles,
  SearchFormStyles,
} from "./Searchbar.styled";

export default class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleNameChange = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === "") {
      toast.error("Введите название картинки");
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <SearchbarStyles>
        <SearchFormStyles onSubmit={this.handleSubmit}>
          <ButtonFormStyles type="submit">
            <ImSearch />
          </ButtonFormStyles>

          <SearchFormInputStyles
            type="text"
            name="pokemonName"
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </SearchFormStyles>
      </SearchbarStyles>
    );
  }
}
