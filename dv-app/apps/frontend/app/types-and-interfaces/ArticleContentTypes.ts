export type ParagraphBlock = {
  id: string;
  type: "paragraph";
  data: {
    text: string;
  };
};

export type ImageBlock = {
  id: string;
  type: "image";
  data: {
    url: string;
    caption?: string;
    alt: string;
  };
};

export type ListBlock = {
  id: string;
  type: "list";
  data: {
    style: "unordered" | "ordered";
    items: string[];
  };
};

export type ContentBlock = ParagraphBlock | ImageBlock | ListBlock;
