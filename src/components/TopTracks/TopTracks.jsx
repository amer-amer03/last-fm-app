import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../store/data/actions";
import { selectTracks } from "../../store/data/selectors";
import { Link } from "react-router-dom";
import classes from "./TopTracks.module.scss";
import lastFmIcon from "../../assets/icons/lastfm.png";

const TopTracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(selectTracks);
  const songsCount = 20;

  useEffect(() => {
    dispatch(fetchData("chart.gettoptracks"));
  }, [dispatch]);

  console.log(tracks);

  return (
    <div>
      <h1 className={classes.topTracks__title}>Top {songsCount}</h1>

      <div className={classes.topTracksContainer}>
        {tracks &&
          tracks.track.slice(0, songsCount).map((item, i) => {
            return (
              <div key={i} className={classes.topTracks}>
                <h2 className={classes.topTracks__number}>{i + 1}</h2>
                <div className={classes.topTracks__info}>
                  <div className={classes.topTracks__infoSongName}>
                    {item.name}
                  </div>
                  <Link
                    to={`/${item.artist.name}`}
                    className={classes.topTracks__infoArtistName}
                  >
                    {item.artist.name}
                  </Link>
                  <div>
                    <a
                      className={classes.topTracks__infoLink}
                      href={item.artist.url}
                    >
                      <img
                        src={lastFmIcon}
                        className={classes.topTracks__infoLinkPicture}
                        alt="lastfm"
                      />
                    </a>
                  </div>
                </div>
                <img
                  src={item.image[2]["#text"]}
                  className={classes.topTracks__Image}
                  alt={`${item.artist.name}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopTracks;
