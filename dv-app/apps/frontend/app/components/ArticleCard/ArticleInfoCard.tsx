import Image from "next/image";
import styles from "./ArticleInfoCard.module.css";
import { IArticleInfo } from "../../types-and-interfaces/DvTypes";

interface ArticleInfoCardProps {
  articleInfo: IArticleInfo;
}

const ArticleInfoCard = ({ articleInfo }: ArticleInfoCardProps) => {
  return (
    <div className={styles.infoCardWrapper}>
      <div className={styles.articleTitle}>
        {articleInfo?.title ?? "Loading..."}
      </div>
      <div className={styles.articleImgWrapper}>
        <Image
          src={articleInfo?.cover_img_url ?? ""}
          alt={articleInfo?.cover_img_alt ?? "Article Cover Image"}
          fill
          className={styles.articleInfoImg}
          sizes="(min-width: 768px) 768px, calc(100vw - 48px)" //48px is padding
        />
      </div>
    </div>
  );
};

export default ArticleInfoCard;
