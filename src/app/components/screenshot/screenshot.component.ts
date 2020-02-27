import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'fyl-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})

export class ScreenshotComponent implements OnInit, AfterViewInit {
  @ViewChild('parentContainer') parentContainerElement: ElementRef;

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

  ngAfterViewInit(): void {
    this.createGalleryMagnificPopup();
  }

  createGalleryMagnificPopup(): void {
    $(this.parentContainerElement.nativeElement).each( function() {
      var $container = $(this);
      var $imageLinks = $container.find('.mfp-image');

      var items = [];

      $imageLinks.each(function() {
        var $item = $(this);
        var type = 'image';
        var magItem = {
          src: $item.attr('href'),
          type: type
        };
        items.push(magItem);
      });

      $imageLinks.magnificPopup({
        mainClass: 'mfp-fade',
        items: items,
        type: 'image',
        gallery: {
          enabled: true,
          tPrev: $(this).data('prev-text'),
          tNext: $(this).data('next-text')
        },
        callbacks: {
          beforeOpen: function() {
            var index = $imageLinks.index(this.st.el);
            if (-1 !== index) {
              this.goTo(index)
            }
          }
        }
      })
    });
  }
}
