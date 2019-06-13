import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from './news-item.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  newsItem : NewsItem = new NewsItem();
  constructor(private _activatedRoute: ActivatedRoute, 
    private _httpClient : HttpClient) { }

  ngOnInit() {
    let id : number = 0;
    this._activatedRoute.paramMap
    .subscribe(params=>{
       id =+ params.get("id");
       this.getNewsDetails(id);
      //alert(id);
    });
    
  }

  getNewsDetails(id:number){
    this._httpClient.get(`http://api.mohamed-sadek.com/News/item/${id}`)
    .subscribe(response=>{
        this.newsItem = response as NewsItem;
        //console.log(this.newsItem);
  
      }, error=>{
        alert("Error in getting newsItems")
      });
    }
}
