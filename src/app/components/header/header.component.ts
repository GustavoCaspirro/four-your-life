import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fyl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(element: any): void {
    const visibleMenu = document.querySelector('.navbar-collapse.show');
    const currentActiveMenu = document.querySelector('.active');

    if (visibleMenu) {
      visibleMenu.classList.remove('show');
    }

    currentActiveMenu.classList.remove('active');
    element.currentTarget.classList.add('active');

  }

}
