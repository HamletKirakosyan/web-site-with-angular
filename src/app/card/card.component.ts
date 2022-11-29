import { Component, Input, OnInit } from '@angular/core';
import { IModel } from '../models/model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  model!: IModel;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
