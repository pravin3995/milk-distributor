import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holding-page',
  templateUrl: './holding-page.component.html',
  styleUrls: ['./holding-page.component.scss']
})
export class HoldingPageComponent implements OnInit {
  slides = [
    {img: '../assets/images/banner.jpg'},
    {img: '../assets/images/banner2.jpg'},
    {img: '../assets/images/banner2.jpg'},
    {img: '../assets/images/banner2.jpg'}
  ];
  title = 'Milk and More!';
  subtitle='Fresh. Local. Delivered ';

  buttonData = [{
      title: 'View Our Product',
      description: 'text',
  },
 ];
  constructor() { }

  ngOnInit() {
  }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots":true, "infinite":false, "speed":900, "autoplay": true,  "arrows":false};
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e) {
  //   console.log('beforeChange');
  // }
}
