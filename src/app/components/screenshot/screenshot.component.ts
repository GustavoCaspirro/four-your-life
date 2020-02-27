import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fyl-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
  images = [
    'img-1.png',
    'img-2.png',
    'img-3.png',
    'img-4.png',
    'img-5.png'
  ];

  SlideOptions = {
    items: 3,
    dots: true,
    nav: false,
    autoplay: false,
    autoplayTimeout: 0,
    loop: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      951: {
        items: 3
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
