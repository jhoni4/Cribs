import { Component, Input, OnInit } from '@angular/core';
import { Crib } from './../crib';
import { by } from 'protractor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('crib') crib: Crib;

  constructor() { }
  ngOnInit(){
    let bedrooms = this.crib.bedrooms;
    let area = this.crib.area;

  }



}
