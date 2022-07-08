import styles from "./Search.module.css";

function Search({ search, getPosts, handleSearch }) {
  return (
    <div className={`row ${styles.search}`}>
      <input
        className="validate"
        placeholder="search"
        type="search"
        value={search}
        onChange={(e) => handleSearch(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getPosts();
          }
        }}
      />
      <button
        className={`btn waves-effect waves-light ${styles.btn}`}
        type="submit"
        name="action"
        onClick={() => getPosts()}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
