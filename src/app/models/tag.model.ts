export class TagQuery {
  taxonomyTermQuery!: TaxonomyTermQuery;
}

export class TaxonomyTermQuery {
  tags!: Tag[];
}

export class Tag {
  tid!: number;
  name!: string;
  url!: TagUrl;
}

export class TagUrl {
  path!: string;
}
