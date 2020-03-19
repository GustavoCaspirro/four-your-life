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

  images = [];

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
        items: 2
      },
      480: {
        items: 3
      },
      951: {
        items: 5
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.arrayImages();
  }

  ngAfterViewInit(): void {
    this.createGalleryMagnificPopup();
  }

  arrayImages(): void {
    const numberMaxImages = 22;
    for (let i = 1; i <= numberMaxImages; i++) {
      this.images.push(`${i}-min.png`);
    }
  }

  createGalleryMagnificPopup(): void {
    $(this.parentContainerElement.nativeElement).each( function() {
      const $container = $(this);
      const $imageLinks = $container.find('.mfp-image');

      const items = [];

      $imageLinks.each(function() {
        const $item = $(this);
        const type = 'image';
        const magItem = {
          src: $item.attr('href'),
          type
        };
        items.push(magItem);
      });

      $imageLinks.magnificPopup({
        mainClass: 'mfp-fade',
        items,
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
