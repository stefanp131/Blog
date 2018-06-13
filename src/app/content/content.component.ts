import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  aboutme: string;
  poems: string;
  page: string;
  contentId: number;
  articles: Article[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.contentId = this.route.snapshot.params['id'];
      this.page = this.route.snapshot.data['state'];
    }
}
