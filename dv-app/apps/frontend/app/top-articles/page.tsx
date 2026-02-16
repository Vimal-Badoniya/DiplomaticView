import getArticles from "../api/getArticles";
import ArticleInfoCard from "../components/ArticleCard/ArticleInfoCard";
import { IArticleInfo } from "../types-and-interfaces/DvTypes";
import styles from "./page.module.css";

export default async function TopArticles() {
  const articles: IArticleInfo[] = await getArticles();

  return (
    <div className={styles.topArticlesWrapper}>
      {articles?.map((article) => {
        return <ArticleInfoCard key={article?.id} articleInfo={article} />;
      })}
    </div>
  );
}
