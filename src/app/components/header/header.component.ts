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

  closeMenu(): void {
    const visibleMenu = document.querySelector('.navbar-collapse.show');

    if (visibleMenu) {
      visibleMenu.classList.remove('show');
    }
  }

}
