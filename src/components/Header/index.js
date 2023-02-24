import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../Routes/routeNames";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(ROUTE_NAMES).map(([routeName, path]) => {
        return (
          <Link key={path} to={path} className={styles.link}>
            {routeName}
          </Link>
        );
      })}
    </div>
  );
};
export default Header;
