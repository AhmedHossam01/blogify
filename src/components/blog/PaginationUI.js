import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import paginate from "../../utils/paginate";

export default class PaginationUI extends Component {
  getPages = () => {
    return paginate.getPages(this.props.posts, this.props.numberPerPage);
  };

  prevPage = () => {
    if (this.props.currentPage > 0) {
      return this.props.changePage(this.props.currentPage - 1);
    }
  };

  nextPage = () => {
    if (this.props.currentPage < this.getPages().length - 1) {
      return this.props.changePage(this.props.currentPage + 1);
    }
  };

  render() {
    const { changePage, currentPage } = this.props;
    const pages = this.getPages();
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
          <Pagination.Next onClick={this.nextPage}></Pagination.Next>
          <Pagination.Last
            onClick={() => changePage(pages.length - 1)}
          ></Pagination.Last>
        </Pagination>
      </div>
    );
  }
}
