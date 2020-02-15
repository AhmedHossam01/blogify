import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

export default class PaginationUI extends Component {
  constructor(props) {
    super(props);
  }

  prevPage = () => {
    if (this.props.currentPage > 0) {
      return this.props.changePage(this.props.currentPage - 1);
    }
  };

  nextPage = () => {
    if (this.props.currentPage < this.props.pages.length - 1) {
      return this.props.changePage(this.props.currentPage + 1);
    }
  };

  render() {
    const { changePage, currentPage, pages } = this.props;
    return (
      <div>
        <Pagination>
          <Pagination.First onClick={() => changePage(0)}></Pagination.First>
          <Pagination.Prev onClick={this.prevPage}></Pagination.Prev>
          {pages.map(number => {
            return (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => changePage(number)}
              >
                {number}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            data-testid="next"
            onClick={this.nextPage}
          ></Pagination.Next>
          <Pagination.Last
            onClick={() => changePage(pages.length - 1)}
          ></Pagination.Last>
        </Pagination>
      </div>
    );
  }
}
