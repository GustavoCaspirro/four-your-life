import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fyl-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  people = [
    {
      img: 'img-1.jpg',
      name: 'Bruno Santos',
      jobRole: 'Back End and Android Developer',
      comment: 'Graduado em Ciência da Computação e pós-graduado em Mobile Development.'
    },
    {
      img: 'img-2.jpg',
      name: 'Gustavo Caspirro',
      jobRole: 'Front End Developer and UI/UX',
      comment: 'Graduado em Ciência da Computação e pós-graduado em Mobile Development.'
    },
    {
      img: 'img-3.jpg',
      name: 'Lucas Barcelos',
      jobRole: 'iOS Developer',
      comment: 'Graduado em Engenharia de computação e pós graduado em Mobile Development.'
    },
    {
      img: 'img-3.jpg',
      name: 'Ricardo Santa',
      jobRole: 'Developer',
      comment: 'Graduado em Engenharia de computação e pós graduado em Mobile Development.'
    }
  ];

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
