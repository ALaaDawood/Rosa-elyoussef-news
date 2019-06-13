import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NewsItem} from '../../news-details/news-item.model'

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  topNews : NewsItem[] = [];
  constructor(private _httpClient:HttpClient) { 
  }

  ngOnInit() {
    this._httpClient.get('http://api.mohamed-sadek.com/News/TopNews/Get')
    .subscribe(response=>{
      this.topNews = (response as NewsItem[])
      console.log(this.topNews);

    }, error=>{
      alert("Error in getting depts")
    });
  }

}
