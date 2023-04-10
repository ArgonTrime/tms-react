import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { NAVIGATION_ITEMS, privateNavsKeys, publicNavsKeys } from "./config";
import LogOutButton from "components/LogOutButton";
import { logOut } from "utils";

import styles from "./style.module.scss";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const navsItemsAccessKe = isAuthenticated ? privateNavsKeys : publicNavsKeys;
  return (
    <div className={styles.wrapper}>
      <div>
        {NAVIGATION_ITEMS[navsItemsAccessKe].map(({ title, path }) => (
          <Link key={path} to={path} className={styles.link}>
            {title}
          </Link>
        ))}
      </div>
      <div>{isAuthenticated && <LogOutButton handleClick={logOut} />}</div>
    </div>
  );
};
export default Header;
