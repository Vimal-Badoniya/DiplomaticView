import Image from "next/image";
import styles from "./ArticleInfoCard.module.css";
import { IArticleInfo } from "../../types-and-interfaces/DvTypes";
import Link from "next/link";

interface ArticleInfoCardProps {
  articleInfo: IArticleInfo;
}

const ArticleInfoCard = ({ articleInfo }: ArticleInfoCardProps) => {
  return (
    <article className={styles.articleWrapper}>
      <Link href={`/article/${articleInfo?.slug}`}>
        <div className={styles.imgWrapper}>
          <Image
            src={articleInfo?.cover_img_url ?? ""}
            alt={articleInfo?.cover_img_alt ?? "Article Cover Image"}
            fill
            className={styles.articleImg}
            sizes="(min-width: 768px) 768px, calc(100vw - 48px)" //48px is padding
          />
        </div>

        <div>
          <div className={styles.title}>
            {articleInfo?.title ?? "Loading..."}
          </div>
          <div className={styles.subtitle}>
            {articleInfo?.subtitle ?? "Loading..."}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleInfoCard;
