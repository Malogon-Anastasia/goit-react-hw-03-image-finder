import React, { Component } from "react";
import propTypes from "prop-types";
import { LoadMoreBtn, Wrapper } from "./Button.styled";
import { BtnLoader } from "../Loader/Loader";

class Button extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { data, onClick, endOfList, status } = this.props;

    return (
      <>
        {data.length > 11 ? (
          <Wrapper>
            {endOfList ? (
              <LoadMoreBtn type="button" disabled="disabled">
                No more pictures available
              </LoadMoreBtn>
            ) : (
              <>
                {status === "load" ? (
                  <BtnLoader />
                ) : (
                  <LoadMoreBtn type="button" onClick={onClick}>
                    Load more
                  </LoadMoreBtn>
                )}
              </>
            )}
          </Wrapper>
        ) : (
          <Wrapper>
            <LoadMoreBtn type="button" disabled="disabled">
              No more pictures available
            </LoadMoreBtn>
          </Wrapper>
        )}
      </>
    );
  }
}

Button.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      tags: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
      previewURL: propTypes.string.isRequired,
    })
  ),
  onClick: propTypes.func,
};

export default Button;
