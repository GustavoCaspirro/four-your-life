import { Component, OnInit } from '@angular/core';
import { integrantes } from './integrantes.json';

@Component({
  selector: 'fyl-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  people = integrantes;

  SlideOptions = {
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
