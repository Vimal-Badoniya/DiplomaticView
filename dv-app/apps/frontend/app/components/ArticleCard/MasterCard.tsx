import Image from "next/image";
import styles from "./MasterCard.module.css";
import { IArticleInfo } from "../../types-and-interfaces/DvTypes";
import Link from "next/link";

interface MasterCardProps {
  masterArticle: IArticleInfo | null;
}

const MasterCard = ({ masterArticle }: MasterCardProps) => {
  return (
    <Link href={`/article/${masterArticle?.slug}`}>
      <div className={styles.masterCardWrapper}>
        <div className={styles.coverImgWrapper}>
          <Image
            src={masterArticle?.cover_img_url ?? ""}
            alt={
              masterArticle?.cover_img_alt ??
              masterArticle?.slug ??
              masterArticle?.title ??
              "Article Image"
            }
            fill
            className={styles.coverImg}
            sizes="(min-width: 768px) 768px, calc(100vw - 48px)" //48px is padding
          />
        </div>
        <h2 className={styles.articleTitle}>
          {masterArticle?.title ?? "Loading..."}
        </h2>
      </div>
    </Link>
  );
};

export default MasterCard;
