import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

export default class PaginationUI extends Component {
  render() {
    return (
      <div>
        <Pagination>
          {this.props.pages.map(number => {
            return (
              <Pagination.Item
                key={number}
                active={number === this.props.currentPage}
                onClick={() => this.props.changePage(number)}
              >
                {number}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </div>
    );
  }
}
