import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'fyl-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewChecked {
  @ViewChild('video') videoElement: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked (): void {
    $(this.videoElement.nativeElement).magnificPopup({ type : 'iframe' });
  }

}
