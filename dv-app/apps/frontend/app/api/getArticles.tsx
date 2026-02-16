const getArticles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
  if (!res?.ok) {
    console.error("Failed to fetch articles", res);
  }
  return res.json();
};

export default getArticles;
