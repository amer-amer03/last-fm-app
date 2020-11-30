import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../store/data/actions";
import { useLocation } from "react-router-dom";
import { selectTracksSearchResults } from "../../store/data/selectors";
import classes from "./SearchResults.module.scss";
const SearchResults = () => {
  const dispatch = useDispatch();
  const tracksSearchResults = useSelector(selectTracksSearchResults);

  const trackName = useLocation().search.replace(/[?|%20]/g, " ");
  console.log(trackName);
  const method = `track.search&track=${trackName}`;

  useEffect(() => {
    dispatch(fetchData(method));
  }, [dispatch, method]);
  console.log(tracksSearchResults);

  return (
    <div className={classes.searchResults}>
      <h2 className={classes.searchResults__title}>Track results: </h2>
      {tracksSearchResults.results &&
        tracksSearchResults.results.trackmatches.track.map((item) => {
          return (
            <div className={classes.searchResults__container}>
              <div className={classes.searchResults__item}>
                <img
                  className={classes.searchResults__image}
                  src={item.image[0]["#text"]}
                  alt={item.name}
                />
                <p className={classes.searchResults__song}>{item.name}</p>
                <p className={classes.searchResults__artist}>{item.artist}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResults;
