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
      name: 'Bruno',
      jobRole: 'Back End and Android Developer',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
    },
    {
      img: 'img-2.jpg',
      name: 'Gustavo',
      jobRole: 'Front End Developer and UI/UX',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
    },
    {
      img: 'img-3.jpg',
      name: 'Lucas',
      jobRole: 'iOS Developer',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
    },
    {
      img: 'img-3.jpg',
      name: 'Ricardo',
      jobRole: 'Developer',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
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
