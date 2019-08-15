import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'issho-card',
  templateUrl: './issho-card.component.html',
  styleUrls: ['./issho-card.component.scss']
})
export class IsshoCardComponent implements OnInit {

  constructor() { }

  @Input() cardClass : string;

  ngOnInit() {
  }

}
