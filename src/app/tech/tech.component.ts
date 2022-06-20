import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from "../service/newsapiservices.service";



@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
/*  */
  constructor(private _services:NewsapiservicesService) { }
techDisplay:any = []
  ngOnInit(): void {

    this._services.techNews().subscribe((result)=> {
      console.log(result);
      this.techDisplay = result.articles;
    })
  }

}
