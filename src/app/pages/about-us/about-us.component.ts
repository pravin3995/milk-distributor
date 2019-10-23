import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  background = [
    {img: '../assets/images/about.jpg'}
  ];
  title= 'About Us';
  subtitle= 'Lorem Ipsum';
  constructor() { }

  ngOnInit() {
  }

}
