import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Home = "Home";
  AboutUs = "About Us";
  WhatWeDo = "What We Do";
  Product = "Product";
  Testimonials = "Testimonials";
  ConatctUs = "Conatct Us";
  ImageUrl: "../assets/images/logo.png";
  constructor() { }

  ngOnInit() {
  }
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }

}
