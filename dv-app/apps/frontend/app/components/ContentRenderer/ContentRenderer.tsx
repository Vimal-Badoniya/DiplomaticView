import Image from "next/image";
import { ContentBlock } from "../../types-and-interfaces/ArticleContentTypes";
import styles from "./ContentRenderer.module.css";

type ContentRendererProps = {
  blocks: ContentBlock[];
};

const ContentRenderer = ({ blocks }: ContentRendererProps) => {
  return (
    <div>
      {blocks?.map((block) => {
        switch (block?.type) {
          case "paragraph":
            return (
              <p key={block?.id} className={styles.para}>
                {block?.data?.text}
              </p>
            );

          case "image":
            return (
              <div key={block?.id} className={styles.imageWrapper}>
                <Image
                  src={block?.data?.url}
                  alt={block?.data?.alt || ""}
                  fill
                />
                {block?.data?.caption && <div>{block?.data?.caption}</div>}
              </div>
            );

          case "list":
            if (block?.data?.style === "unordered") {
              return (
                <ul key={block?.id} className={styles.listContainer}>
                  {block?.data?.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <ol key={block?.id} className={styles.listContainer}>
                {block?.data?.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
