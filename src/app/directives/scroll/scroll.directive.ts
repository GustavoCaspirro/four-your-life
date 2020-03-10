import {Directive} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[fylScroll]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {'(window:scroll)': 'trackScroll($event)'}
})

export class ScrollDirective {
  trackScroll($event: Event) {

    const scrollWindow = window.scrollY;

    scrollWindow >= 100 ?
      (document.querySelector('.sticky') as HTMLElement).classList.add('nav-sticky') :
      (document.querySelector('.sticky') as HTMLElement).classList.remove('nav-sticky');
  }
}
