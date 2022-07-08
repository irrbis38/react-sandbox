import React from "react";

import Movies from "../../components/Movies/Movies";
import Preloader from "./../../components/Preloader/Preloader";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";

import styles from "./Main.module.css";

class Main extends React.Component {
  state = {
    films: [],
    search: "comedy",
    filter: "",
  };

  getPosts = () => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=56f4f48e&s=${this.state.search}&type=${this.state.filter}`
    )
      .then((res) => res.json())
      .then((moviesData) => {
        if (moviesData.Response === "True") {
          this.setState({ films: moviesData.Search });
        } else {
          this.setState({ films: null });
        }
      });
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleChangeFilter = (e) =>
    this.setState({ filter: e.target.value }, () => {
      this.getPosts();
    });

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { films, search, filter } = this.state;
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>You can find any movies description</h1>
        <Search
          getPosts={this.getPosts}
          handleSearch={this.handleSearch}
          search={search}
        />
        <Filter handleChangeFilter={this.handleChangeFilter} filter={filter} />
        {!films ? (
          <h3>Nothig fount</h3>
        ) : films.length ? (
          <Movies films={films} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export default Main;
