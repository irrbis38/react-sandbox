import React from "react";
import Card from "../../blocks/Card/Card";
import styles from "./Main.module.css";

class Main extends React.Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=56f4f48e&s=matrix")
      .then((res) => res.json())
      .then((moviesData) =>
        this.setState({ films: moviesData.Search }, () =>
          console.log(this.state.films)
        )
      );
  }

  render() {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>You can find any movies description</h1>
        <div className={styles.wrapper}>
          {this.state.films.map((item) => (
            <Card
              key={item.imdbID}
              title={item.Title}
              imgUrl={item.Poster}
              type={item.Type}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
