import React from "react";

import styles from "./Search.module.css";

export class Search extends React.Component {
  render() {
    return (
      <div className={`row ${styles.search}`}>
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={this.props.search}
          onChange={(e) => this.props.handleSearch(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.props.getPosts();
            }
          }}
        />
        <button
          className={`btn waves-effect waves-light ${styles.btn}`}
          type="submit"
          name="action"
          onClick={() => this.props.getPosts()}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
