import { Component, Injectable, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})

export class TopheadingComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}
  topheadingDisplay: any = [];
  sportsDisplay: any = [];
  businessDisplay: any = [];
  entertainmentDisplay: any = [];
  techDisplay: any = [];
  healthDisplay: any = [];
  url: any;
  title: any;
  urlToImage: any;
   

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topheadingDisplay = result.articles;
    });
     
     this._services.businessNews().subscribe((result) => {
       console.log(result);
       this.businessDisplay = result.articles;
     });
     this._services.entertainmentNews().subscribe((result) => {
       console.log(result);
       this.entertainmentDisplay = result.articles;
     });
     this._services.healthNews().subscribe((result) => {
       console.log(result);
       this.healthDisplay = result.articles;
     });
     this._services.techNews().subscribe((result) => {
       console.log(result);
       this.techDisplay = result.articles;
     });
  }
}
