import PropTypes from "prop-types";

import styles from "./style.module.scss";

const PokemonStat = ({ srcImg, textStat, countStat = 0 }) => {
  return (
    <div className={styles.stat}>
      <img src={srcImg} alt="statIcon" />
      <p>{`${textStat}: ${countStat}`}</p>
    </div>
  );
};
PokemonStat.propTypes = {
  srcImg: PropTypes.string,
  textStat: PropTypes.string.isRequired,
  countStat: PropTypes.number,
};
export default PokemonStat;
