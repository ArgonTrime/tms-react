import { Link } from "react-router-dom";
import { omit } from "lodash";

import { ROUTE_NAMES } from "../../Routes/routeNames";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(omit(ROUTE_NAMES, ["POKEMON_DETAILS"])).map(
        ([routeName, path]) => {
          return (
            <Link key={path} to={path} className={styles.link}>
              {routeName}
            </Link>
          );
        }
      )}
    </div>
  );
};
export default Header;
