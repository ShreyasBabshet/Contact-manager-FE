import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";

const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.Container}>
      <div>
        <h2 className={styles.Title}>Contact Manager</h2>
      </div>
      <div className="">
        <p>Add Contact</p>
        <p>Contacts</p>
      </div>
    </div>
  );
};

export default Header;
