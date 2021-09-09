export class ArticleQuery {
  route!: Route;
}

export class Route {
  breadcrumb!: BreadcrumbItem[];
  entity!: EntityData
}

export class EntityData {
  title!: string;
}

export class BreadcrumbItem {
  text!: string;
  url!: urlItem
}

export class urlItem {
  path!: string
  routed!: boolean
}

