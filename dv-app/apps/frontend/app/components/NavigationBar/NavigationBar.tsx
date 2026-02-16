"use client";
import Link from "next/link";
import { NavigationTabs } from "../../constants/DvConstants";
import styles from "./NavigationBar.module.css";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const params = usePathname();
  return (
    <ul className={styles.navWrapper}>
      {NavigationTabs?.map((tab) => {
        return (
          <li key={tab?.label}>
            <Link
              href={tab?.href}
              className={params === tab?.href ? styles.activeTab : ""}
            >
              {tab?.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationBar;
