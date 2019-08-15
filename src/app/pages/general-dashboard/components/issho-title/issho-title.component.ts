import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issho-title',
  templateUrl: './issho-title.component.html',
  styleUrls: ['./issho-title.component.scss']
})
export class IsshoTitleComponent implements OnInit {

  constructor() { }

  @Input() text : string;

  ngOnInit() {
  }

}
