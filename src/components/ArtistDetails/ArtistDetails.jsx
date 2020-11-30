import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../store/data/actions";
import { selectArtistDetails } from "../../store/data/selectors";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import classes from "./ArtistDetails.module.scss";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const artistDetails = useSelector(selectArtistDetails);

  const { artistId } = useParams();
  const method = `artist.getinfo&artist=${artistId}`;

  useEffect(() => {
    dispatch(fetchData(method));
  }, [dispatch, method]);
  console.log(artistDetails);

  return (
    <div className={classes.artistDetails}>
      <div className={classes.artistDetails__hat}>
        <div className={classes.artistDetails__nameContainer}>
          <h1 className={classes.artistDetails__name}>
            {artistDetails && artistDetails.name}
          </h1>
          <div className={classes.artistDetails__tagContainer}>
            {artistDetails &&
              artistDetails.tags.tag.map((item) => {
                return (
                  <a className={classes.artistDetails__tag} href={item.url}>
                    {item.name}
                  </a>
                );
              })}
          </div>
          <h3 className={classes.artistDetails__similarTitle}>
            Similar artists
          </h3>
          <div className={classes.artistDetails__similarContainer}>
            {artistDetails &&
              artistDetails.similar.artist.map((item) => {
                return (
                  <div className={classes.artistDetails__similar}>
                    <img
                      className={classes.artistDetails__similarImage}
                      src={item.image[1]["#text"]}
                      alt={item.name}
                    />
                    <a
                      className={classes.artistDetails__similarImage}
                      href={item.url}
                    >
                      {item.name}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={classes.artistDeltails__imageContainer}>
          <img
            src={artistDetails && artistDetails.image[2]["#text"]}
            className={classes.artistDeltails__image}
            alt={artistDetails && artistDetails.name}
          />
        </div>
      </div>
      <h2 className={classes.artistDetails__bioTitle}>Biography</h2>
      <div className={classes.artistDetails__bio}>
        {artistDetails && parse(artistDetails.bio.content)}
      </div>
    </div>
  );
};
export default ArtistDetails;
