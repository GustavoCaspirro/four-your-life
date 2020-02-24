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
      name: 'Raymond Sloan',
      jobRole: 'Web Developer',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
    },
    {
      img: 'img-2.jpg',
      name: 'Mary Shriner',
      jobRole: 'Front End Developer',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
    },
    {
      img: 'img-3.jpg',
      name: 'Robert Garrett',
      jobRole: 'Back End Developer',
      comment: '"Aenean vehicula neque turpis at dictum purus malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."'
    },
  ];  
  
  SlideOptions = { items: 1, dots: true, nav: false };

  constructor() { }

  ngOnInit(): void {
  }

}
