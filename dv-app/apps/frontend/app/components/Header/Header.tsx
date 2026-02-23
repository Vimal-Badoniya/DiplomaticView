import Image from "next/image";
import styles from "./Header.module.css";
import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.leftSection}>
        <Image
          src="/DiplomaticViewLogo.png"
          alt="Diplomatic View Logo"
          width={40}
          height={40}
        />
        <div>DIPLOMATIC VIEW</div>
      </div>
      <div className={styles.rightSection}>
        {/* <Search /> */}
        <Menu />
      </div>
    </div>
  );
};

export default Header;
