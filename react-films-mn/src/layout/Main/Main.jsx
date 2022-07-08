import React from "react";

import Movies from "../../components/Movies/Movies";
import Preloader from "./../../components/Preloader/Preloader";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";

import styles from "./Main.module.css";

function Main() {
  const [films, setFilms] = React.useState([]);
  const [search, setSearch] = React.useState("comedy");
  const [filter, setFilter] = React.useState("");

  const getPosts = () => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=56f4f48e&s=${search}&type=${filter}`
    )
      .then((res) => res.json())
      .then((moviesData) => {
        if (moviesData.Response === "True") {
          setFilms(moviesData.Search);
        } else {
          setFilms(null);
        }
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  React.useEffect(() => {
    getPosts();
  }, [filter]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>You can find any movies description</h1>
      <Search getPosts={getPosts} handleSearch={handleSearch} search={search} />
      <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
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

export default Main;
