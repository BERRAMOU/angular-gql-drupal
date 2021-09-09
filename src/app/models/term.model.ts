export class TermQuery {
  taxonomyTermQuery!: TaxonomyTermQuery;
}

export class TaxonomyTermQuery {
  entities!: Term[];
}

export class Term {
  tid!: number;
  name!: string;
  url!: TermUrl;
}

export class TermUrl {
  path!: string;
}
