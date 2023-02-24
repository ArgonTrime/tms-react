import Header from "../Header";

import styles from "./style.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};
export default MainLayout;
