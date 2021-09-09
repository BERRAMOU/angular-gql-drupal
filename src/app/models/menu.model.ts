export class MenuQuery {
  menu!: Menu;
}

export class Menu {
  sections!: Section[];
}

export class Section {
  links!: Link[];
}

export class Link {
  expanded!: boolean
  title!: string
  url!: Url
}

export class Url {
  path!: string
}
