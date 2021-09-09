import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TermQuery, Term } from "../../models/term.model";
import taxonomyQuery from "../../graphql/taxonomy.graphql"

@Component({
  selector: "taxonomy-list",
  templateUrl: './taxonomy-list.component.html',
  styleUrls: ['./taxonomy-list.component.css']
})
export class TaxonomyListComponent implements OnInit {
  terms$!: Observable<Term[]>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.terms$ = this.apollo
      .watchQuery<TermQuery>({
        query: taxonomyQuery
      })
      .valueChanges.pipe(map(result => result.data.taxonomyTermQuery.entities));
  }
}
