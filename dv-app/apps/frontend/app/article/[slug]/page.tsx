import Image from "next/image";
import getArticleBySlug from "../../api/getArticleBySlug";
import styles from "./page.module.css";
import { IArticleInfo } from "../../types-and-interfaces/DvTypes";
import { formatDate } from "../../utils/utility";
// import ContentRenderer from "../../components/ContentRenderer/ContentRenderer";

interface IDetailedArticleProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailedArticle({
  params,
}: IDetailedArticleProps) {
  const receivedParams = await params;
  const articleDetails: IArticleInfo = await getArticleBySlug(
    receivedParams?.slug || "",
  );

  return (
    <>
      {/* Updates Tag */}
      <h5 className={styles.articleInfo}>
        News Update |
        {articleDetails?.tags?.length ? ` ${articleDetails?.tags[0]}` : ""}
      </h5>

      {/* cover image */}
      <div className={styles.coverImgWrapper}>
        <Image
          src={articleDetails?.cover_img_url ?? ""}
          alt={
            articleDetails?.cover_img_alt ??
            articleDetails?.slug ??
            articleDetails?.title ??
            "Article Image"
          }
          fill
          className={styles.coverImg}
          sizes="(min-width: 768px) 768px, calc(100vw - 48px)" //48px is padding
        />
      </div>

      {/* Title */}
      <h2 className={styles.articleTitle}>
        {articleDetails?.title ?? "Loading..."}
      </h2>

      {/* Location - Date Tag */}
      <h5 className={styles.articleInfo}>
        {formatDate(articleDetails?.published_at ?? "")} |{" "}
        {articleDetails?.locations?.length
          ? `${articleDetails?.locations[0]}`
          : ""}
      </h5>

      {/* Subtitle */}
      <h4 className={styles.articleSubTitle}>
        {articleDetails?.subtitle ?? ""}
      </h4>

      {/* Article Content */}
      {/* <ContentRenderer blocks={articleContentBlock} /> */}
    </>
  );
}

//In the latest versions of Next.js (specifically 15+), params and searchParams in Server Components are asynchronous.
//Next.js moved to this model to better handle Partial Prerendering (PPR) and to ensure that the server doesn't block
// rendering unnecessarily. By making it a Promise, Next.js can prepare parts of your page before the actual URL
// parameters are fully resolved.
