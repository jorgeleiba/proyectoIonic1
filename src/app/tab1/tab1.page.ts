import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {
      console.log('Buen dia');
      let numero = 0;
      numero = 89;
      numero = 87;
      numero =6;
  }
}
