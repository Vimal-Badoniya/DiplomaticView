import styles from "./page.module.scss";

export default function CodeOfEthics() {
  return (
    <article>
      <h2 className={styles.pageTitle}>Code of Ethics</h2>
      <h4 className={styles.pageSubTitle}>
        At Diplomatic View, ethics and integrity are non‑negotiable.
      </h4>
      <p className={styles.para}>
        Integrity isn't a buzzword at Diplomatic View; it’s our operating
        system. Our editorial process is built on below unbreakable pillars:
      </p>
      <ul className={styles.ul}>
        <li>
          Transparency of Source: Every piece of data is verified against
          various credible sources before publication. Whether it's Official
          statements, Independent reporting or Data from credible institutions,
          you see what we see.
        </li>
        <li>
          No Strings Attached: We are 100% independent. We do not accept funding
          or "partnerships" from political wings or corporate PR machines that
          seek to influence our narrative. Our loyalty is to factual accuracy —
          not narratives.
        </li>
        <li>
          Balanced Critique: We hold power accountable, regardless of the party
          or country. We appreciate factual progress and criticize factual
          failures with the same intensity. Readers deserve the full picture.
        </li>
        <li>
          Correction over Concealment: If we get a fact wrong, we don’t quietly
          delete it. We issue a transparent correction at the top of the
          article. Honesty is more important than the "perfect" record.
        </li>
        <li>
          No Sensationalism: We do not publish content designed to provoke
          outrage for traffic. Engagement is not more important than integrity.
        </li>
      </ul>
      <h3 className={styles.pageFooter}>
        Our commitment is to truth, accountability, and the right of readers to
        receive factually correct information.
      </h3>
    </article>
  );
}
