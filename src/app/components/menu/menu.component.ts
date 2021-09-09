import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Menu, MenuQuery } from "../../models/menu.model";
import menuQuery from "../../graphql/menu.graphql"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu$!: Observable<Menu>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.menu$ = this.apollo
      .watchQuery<MenuQuery>({
        query: menuQuery
      })
      .valueChanges.pipe(map(result => result.data.menu));
  }

}
