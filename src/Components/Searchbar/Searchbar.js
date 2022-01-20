import { Component } from "react";

import {
  SearchbarStyles,
  ButtonFormStyles,
  SearchFormInputStyles,
  SearchFormStyles,
  ButtonLabelStyles,
} from "./Searchbar.styled";
// import { ImSearch } from 'react-icons/im';
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
      alert("Введите название картинки");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchbarStyles>
        <SearchFormStyles onSubmit={this.handleSubmit}>
          <ButtonFormStyles type="submit" class="button">
            <ButtonLabelStyles>Search</ButtonLabelStyles>
          </ButtonFormStyles>

          <SearchFormInputStyles
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchFormStyles>
      </SearchbarStyles>
    );
  }
}
