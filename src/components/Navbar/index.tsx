import { MenuItem } from "components";
import { menuItems } from "contents";
import { CgClose, CgMenu } from "libs/react-icons";
import { useState } from "react";
import styles from "./styles.module.scss";

// TODO: This component must to be tested.

const Navbar = (): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuIsOpen((state: boolean) => !state);
  };

  return (
    <>
      <div className={styles.mobile_menu}>
        <button
          type="button"
          className={styles.menu_button}
          onClick={toggleMenu}
          title="Mobile menu"
        >
          {menuIsOpen ? <CgClose size={32} /> : <CgMenu size={32} />}
        </button>
      </div>
      <div
        className={`${styles.nav_container} ${menuIsOpen ? styles.active : ""}`}
      >
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {menuItems.map((item, i) => (
              <MenuItem title={item.title} path={item.path} key={i} />
            ))}
          </ul>
        </nav>
        <div className={styles.button_container}>
          <button type="button" className={styles.link_button}>
            Entrar
          </button>
          <button type="button" className={styles.button}>
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
