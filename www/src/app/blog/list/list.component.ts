import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/blog/article'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  articles: Article[];
  selectedArticle: number;
  constructor() {
    this.articles = [
      new Article,
      new Article,
      new Article,
      new Article,
      new Article,
    ];
    this.articles[0].text = 'drfjhubvgkjsdfbfg ksdfbkgjh sdfkjv bdkujb lih vkldrtiubv lkidfuhvosfidjbnglksi jdhlkfvijwdhbkivnb sdfkibv hkjudvhboluik';
    this.articles[1].text = 'drfjhubvgkjsdfbfg ksdfbkgjh sdfkjv bdkujb';
    this.articles[2].text = 'bdkujb';
    this.articles[3].text = 'drfjhubvgkjsdfbfg ksdfbkgjh sdfkjv';
    this.articles[4].text = 'drfjhubvgkjsdfbfg ksdfbkgjh sdfkjv bdkujb';

    this.articles[0].title = 'beau titre';
    this.articles[1].title = 'beau titre';
    this.articles[2].title = 'beau titre';
    this.articles[3].title = 'beau titre';
    this.articles[4].title = 'beau titre';

    this.articles[0].author = 'Joseph';
    this.articles[1].author = 'Joseph';
    this.articles[2].author = 'Joseph';
    this.articles[3].author = 'Joseph';
    this.articles[4].author = 'Joseph';
  }

  ngOnInit(): void {

  }

  changeSelected(articleSelected: number): void {
    this.selectedArticle = articleSelected;
  }

}
