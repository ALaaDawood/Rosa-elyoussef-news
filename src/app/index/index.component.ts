import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../news-details/news-item.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  newsItems : NewsItem[] = [];
  //newsItem : NewsItem = new NewsItem();
  constructor(private _activatedRoute: ActivatedRoute, 
    private _httpClient : HttpClient
    ) { }

  ngOnInit() {
    let id : number = 0;
    this._activatedRoute.paramMap
    .subscribe(params=>{
       id =+ params.get("id");
       this.getDepartmentTopNews(id);
      //alert(id);
    });
  }

  getDepartmentTopNews(id:number){
    this._httpClient.get(`http://api.mohamed-sadek.com/News/Department/61`)
    .subscribe(response=>{
        this.newsItems = response as NewsItem[]
        //console.log(this.newsItems);
  
      }, error=>{
        alert("Error in getting newsItems")
      });
  }

}
