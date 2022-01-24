import React from "react";
import { ImSearch } from "react-icons/im";
import propTypes from "prop-types";
import {
  SearchbarStyles,
  SearchFormStyles,
  ButtonFormStyles,
  SearchFormInputStyles,
} from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyles>
      <SearchFormStyles onSubmit={onSubmit}>
        <ButtonFormStyles type="submit" name="button">
          <ImSearch />
        </ButtonFormStyles>

        <SearchFormInputStyles
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchFormStyles>
    </SearchbarStyles>
  );
};
Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
export default Searchbar;
