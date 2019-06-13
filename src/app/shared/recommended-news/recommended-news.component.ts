import { Component, OnInit } from '@angular/core';
import {NewsItem} from '../../news-details/news-item.model'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recommended-news',
  templateUrl: './recommended-news.component.html',
  styleUrls: ['./recommended-news.component.css']
})
export class RecommendedNewsComponent implements OnInit {

  featuredNews : NewsItem[] = [];
  constructor(private _httpClient:HttpClient) { 

  }

  ngOnInit() {
    this._httpClient.get('http://api.mohamed-sadek.com/News/FeaturedNews/Get')
    .subscribe(response=>{
      this.featuredNews = (response as NewsItem[])
      console.log(this.featuredNews);

    }, error=>{
      alert("Error in getting depts")
    });
  }

}
