import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fyl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today: number;

  constructor() { }

  ngOnInit(): void {
    this.getFullYearDate();
  }

  getFullYearDate(): number {
    return this.today = new Date().getFullYear();
  }

}
