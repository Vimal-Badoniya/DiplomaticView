import styles from "./page.module.scss";

export default function PrivacyPolicy() {
  return (
    <article>
      <h2 className={styles.pageTitle}>Privacy Policy</h2>

      <h4 className={styles.pageSubTitle}>Your Data is Yours. Period.</h4>

      <p className={styles.para}>
        In a world where media houses treat users like products to be sold to
        advertisers, Diplomatic View takes a different path.
      </p>

      <ul className={styles.ul}>
        <li>
          Zero Capture: We do not capture your personal data, your browsing
          history, or your identity.
        </li>
        <li>
          No Third-Party Sales: Since we don't collect your data, we have
          nothing to sell to third parties or data brokers.
        </li>
        <li>
          Safe Haven: You can read, learn, and analyze our content without the
          fear of being tracked or targeted by "related" advertisements.
        </li>
      </ul>

      <p className={styles.para}>
        We may use basic, non-identifiable analytics to understand overall
        traffic trends (such as page views), but this data does not personally
        identify users.
      </p>

      <h3 className={styles.pageFooter}>
        We want your attention, not your data.
      </h3>
    </article>
  );
}
