import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Department} from '../../department/department.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _httpClient:HttpClient) { }
  departments : Department[] = [];
  
  ngOnInit() {
    this._httpClient.get('http://api.mohamed-sadek.com/News/Departments/Get')
    .subscribe(response=>{
      this.departments = (response as Department[]).filter(department=>{
        return department.ShowInMainMenu;
      });
      //console.log(this.departments);

    }, error=>{
      alert("Error in getting depts")
    });
  }

}
