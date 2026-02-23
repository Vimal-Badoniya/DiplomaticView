import styles from "./page.module.scss";

export default function AboutUs() {
  return (
    <article>
      <h2 className={styles.pageTitle}>About Us</h2>
      <h4 className={styles.pageSubTitle}>
        Facts over fiction. Context over noise. Depth over drama.
      </h4>
      <p className={styles.para}>
        Diplomatic View was founded in 2026 in India. In an era where headlines
        chase clicks, narratives serve political interests, and media often
        leans left or right, we believe something essential is missing —
        balanced, evidence-backed and Insightful understanding with In-depth
        analysis.
      </p>
      <h3 className={styles.paraTitle}>How we are different:</h3>
      <ul className={styles.ul}>
        <li>
          Fact over Fiction: We don’t speculate. If we can’t back it up with a
          primary source—be it official statements, government records,
          independent reports, and indexes from various institutions—we don’t
          publish it.
        </li>
        <li>
          The Chain of Impact: We don't just tell you what happened. Our content
          goes beyond headlines — offering insights into why events happen, what
          follows next, and how they impact nations, businesses, and everyday
          people.
        </li>
        <li>
          Radical Neutrality: We refuse to pick a side. Whether it’s global
          conflicts or domestic policy, our job is to show you the full
          picture—with all its uncomfortable truths—and let you decide what is
          right.
        </li>
      </ul>
      <h3 className={styles.pageFooter}>
        Diplomatic View is independent & Unbiased, built on integrity,
        transparency, and intellectual honesty.
      </h3>
    </article>
  );
}
