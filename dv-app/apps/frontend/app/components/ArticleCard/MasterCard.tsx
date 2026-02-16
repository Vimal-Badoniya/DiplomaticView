import Image from "next/image";
import styles from "./MasterCard.module.css";
import { IArticleInfo } from "../../types-and-interfaces/DvTypes";

interface MasterCardProps {
  masterArticle: IArticleInfo | null;
}

const MasterCard = ({ masterArticle }: MasterCardProps) => {
  return (
    <div className={styles.masterCardWrapper}>
      <div className={styles.coverImgWrapper}>
        <Image
          src={masterArticle?.cover_img_url ?? ""}
          alt={masterArticle?.cover_img_alt ?? "Article Cover Image"}
          fill
          className={styles.coverImg}
          sizes="(min-width: 768px) 768px, calc(100vw - 48px)" //48px is padding
        />
      </div>
      {/* <h5 className={styles.articleInfo}>News | Iran-USA Relations</h5>
      <h5 className={styles.articleInfo}>13 Feb 2026 | Middle East</h5> */}
      <h2 className={styles.articleTitle}>
        {masterArticle?.title ?? "Loading..."}
      </h2>
      {/* <h4 className={styles.articleSubTitle}>
        A War between Iran - USA could bring Inflation, Stock Market Crash,
        Regional Uncertinity & Global Recession. India has to choose between the
        Current Regime & Protestors in Iran, which will decide the Future of the
        Middle East & Global Trade. The Current Regime is a Dictatorship, which
        has been in power for over 40 years. The Protestors are fighting for
        Democracy, Human Rights & Freedom. India has to decide whether to
        support the Current Regime or the Protestors, which will have a
        significant impact on the future of the Middle East & Global Trade.
      </h4> */}
    </div>
  );
};

export default MasterCard;
