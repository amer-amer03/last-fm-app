import { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import { useHistory } from "react-router-dom";
import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  const history = useHistory();

  const [searchTerms, setSearchTerms] = useState("");

  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleClearInput = () => {
    setSearchTerms("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/results",
      search: searchTerms,
    });
    handleClearInput();
  };
  return (
    <div>
      <form className={classes.searchBarContainer} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="Search"
          type="text"
          value={searchTerms}
          className={classes.searchBar}
        />
        <button className={classes.searchBarButton}>
          <img
            src={SearchIcon}
            className={classes.searchBarIcon}
            alt="Search Icon"
          />
        </button>
      </form>
      {searchTerms !== "" && <div onClick={handleClearInput}></div>}
    </div>
  );
};

export default SearchBar;
