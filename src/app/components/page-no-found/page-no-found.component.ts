import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-no-found',
  templateUrl: './page-no-found.component.html',
  styleUrls: ['./page-no-found.component.css']
})
export class PageNoFoundComponent implements OnInit {

  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
