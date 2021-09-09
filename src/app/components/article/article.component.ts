import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ArticleQuery } from 'src/app/models/article.model';
import pageQuery from "../../graphql/article.graphql"
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article$!: Observable<ArticleQuery>;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const url = this.route.snapshot.paramMap.get('url');
    this.article$ = this.apollo
      .watchQuery<ArticleQuery>({
        query: pageQuery,
        variables: {
          path: url,
        },
      })
      .valueChanges.pipe(map(result => result.data));
  }

}
