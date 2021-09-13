import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TagQuery, Tag } from "../../models/tag.model";
import taxonomyTermTagQuery from "../../graphql/tags.graphql"

@Component({
  selector: "taxonomy-list",
  templateUrl: './taxonomy-list.component.html',
  styleUrls: ['./taxonomy-list.component.css']
})
export class TaxonomyListComponent implements OnInit {
  tags$!: Observable<Tag[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.tags$ = this.apollo
      .watchQuery<TagQuery>({
        query: taxonomyTermTagQuery,
        errorPolicy: 'all'
      })
      .valueChanges.pipe(map(result => result.data.taxonomyTermQuery.tags));
  }
}
