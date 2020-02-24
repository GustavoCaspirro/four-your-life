import {Directive} from "@angular/core";

@Directive({
  selector: '[fylScroll]',
  host: {'(window:scroll)': 'trackScroll($event)'}
})

export class ScrollDirective {
  trackScroll ($event: Event) {
    console.debug("Scroll Event", $event);

    let scrollWindow = window.scrollY;

    scrollWindow >= 50 ?
      (document.querySelector('.sticky') as HTMLElement).classList.add('nav-sticky') :
      (document.querySelector('.sticky') as HTMLElement).classList.remove('nav-sticky');
  }
}
