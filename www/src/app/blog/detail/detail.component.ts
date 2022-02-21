import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/blog/article';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()
  article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
