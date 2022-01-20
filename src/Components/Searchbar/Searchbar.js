import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

import {
  SearchbarStyles,
  ButtonFormStyles,
  SearchFormInputStyles,
  SearchFormStyles,
} from "./Searchbar.styled";

// import { toast } from 'react-toastify';

// const styles = { form: { marginBottom: 20 } };

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleNameChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.query.trim() === "") {
      toast.error("Введите название картинки");
      return;
    }

    this.props.qwe(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchbarStyles>
        <SearchFormStyles onSubmit={this.handleSubmit}>
          <ButtonFormStyles type="submit" class="button">
            <ImSearch />
          </ButtonFormStyles>

          <SearchFormInputStyles
            type="text"
            name="pokemonName"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleNameChange}
          />
        </SearchFormStyles>
      </SearchbarStyles>
    );
  }
}
