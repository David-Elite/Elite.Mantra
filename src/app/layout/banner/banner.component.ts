import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  sliders: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.sliders =[
    {
      itemPath : "assets/images/slider/slider-5.jpg",
      caption : "Designers and Developers of all Kinds of Mobile, Web and Desktop Applications"
    },
    {
      itemPath : "assets/images/slider/slider-6.jpg",
      caption : "Some representative placeholder content for the second slide."
    }
    ]
  }

}
