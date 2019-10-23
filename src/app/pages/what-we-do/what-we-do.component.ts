import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  background = [
    {img: "http://placehold.it/350x90/000000"}
  ];
 title ="What We Do"
  constructor() { }

  ngOnInit() {
  }

}
