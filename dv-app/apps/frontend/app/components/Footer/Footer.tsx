import YoutubeIcon from "../Icons/Youtube";
import InstagramIcon from "../Icons/Instagram";
import TwitterIcon from "../Icons/Twitter";
import Link from "next/link";
import style from "./Footer.module.scss";

export const SocialMediaLinks = [
  {
    name: "Twitter",
    icon: <TwitterIcon fill="#c042f6" />,
    id: "twitter",
    url: "https://x.com/_diplomaticView",
  },
  {
    name: "YouTube",
    icon: <YoutubeIcon fill="red" />,
    id: "youtube",
    url: "https://www.youtube.com/@DiplomaticViewUpdates",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon fill="springgreen" />,
    id: "instagram",
    url: "https://www.instagram.com/diplomatic_view_/",
  },
];

export const ActionItems = [
  {
    name: "About Us",
    url: "/about-us",
    id: "about-us",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
    id: "contact-us",
  },
  {
    name: "Privacy Policy",
    url: "/privacy-policy",
    id: "privacy-policy",
  },
  {
    name: "Code of Ethics",
    url: "/code-of-ethics",
    id: "code-of-ethics",
  },
  {
    name: "Sitemap",
    url: "/sitemap",
    id: "sitemap",
  },
];

const Footer = () => {
  return (
    <>
      <div className={style.footerContainer}>
        <div className={style.footerIconWrapper}>
          <ul className={style.listContainer}>
            <li className={style.footerDVText}>DIPLOMATIC VIEW</li>
          </ul>

          <ul className={style.iconContainer}>
            {SocialMediaLinks.map((network) => {
              return (
                <li key={network?.id} className={style.icon}>
                  <Link href={network?.url} target="_blank">
                    {network?.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className={style.actionItemWrapper}>
          {ActionItems?.map((item) => {
            return (
              <li key={item?.id}>
                <Link href={item?.url} className={style.actionItem}>
                  {item?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>Copyright © 2026 DIPLOMATIC VIEW. All Rights Reserved.</div>
    </>
  );
};

export default Footer;
