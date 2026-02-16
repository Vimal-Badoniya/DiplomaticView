export type NavItemType = {
  label: string;
  href: string;
  active: boolean;
};

export interface IArticleInfo {
  cover_img_url: string;
  id: string;
  published_at: string;
  reading_time_minutes?: number;
  slug: string;
  subtitle: string;
  title: string;
  cover_img_alt: string;
}
