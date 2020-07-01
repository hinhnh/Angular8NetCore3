import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  latestPosts: Feed[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    if (baseUrl.includes("4200")) baseUrl = "http://localhost:53899/";
    http.get<Feed[]>(baseUrl + 'api/rssfeeds').subscribe(result => {
      this.latestPosts = result;
    }, error => console.error(error));

  }  



}

interface Feed {
  link: string;
  title: string;
  feedType: string;
  author: string;
  content: string;
  publishDate: string;
}    
