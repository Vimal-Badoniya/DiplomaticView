import getArticles from "./api/getArticles";
import ArticleInfoCard from "./components/ArticleCard/ArticleInfoCard";
import MasterCard from "./components/ArticleCard/MasterCard";
import { IArticleInfo } from "./types-and-interfaces/DvTypes";

export default async function Home() {
  const articles: IArticleInfo[] = await getArticles();
  const masterArticle = articles[0] || null;
  return (
    <div>
      <MasterCard masterArticle={masterArticle} />
      {articles.slice(1).map((article) => (
        <ArticleInfoCard key={article.id} articleInfo={article} />
      ))}
    </div>
  );
}
