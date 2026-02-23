import styles from "./page.module.scss";

export default function ContactUs() {
  return (
    <article>
      <h2 className={styles.pageTitle}>Contact Us</h2>
      <h4 className={styles.pageSubTitle}>Let’s Talk Diplomacy. </h4>
      <p className={styles.para}>
        Have a lead? Noticed a factual error? Or want to discuss an analysis? We
        are Open, Unbiased & Independent
      </p>
      <ul className={styles.ul}>
        <li>Editorial Inquiries: editorial@diplomaticview.com</li>
        <li>
          Submit a Tip: If you have access to government records or independent
          reports that the world needs to see, reach out to us.
        </li>
      </ul>
      <h3 className={styles.pageFooter}>
        Transparency is part of our commitment.
      </h3>
    </article>
  );
}
