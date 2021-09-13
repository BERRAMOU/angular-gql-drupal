import { Tag } from "./tag.model";

export class ArticleQuery {
  nodeById!: Node;
}

export class Node {
  title!: string;
  body!: Body;
  image!: Image;
  tags!: TagItem[]
}

export class Body {
  value!: string;
  format!: string
  processed!: string
}

export class Image {
  url!: string;
  alt!: string;
}

export class TagItem {
  entity!: Tag
}
