const getArticleBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`,
    { next: { revalidate: 3600 } },
  );
  if (!res?.ok) {
    console.error("Failed to fetch articles", res);
    return null;
  }
  return res.json();
};

export default getArticleBySlug;
