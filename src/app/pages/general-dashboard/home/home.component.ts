import { Component, OnInit } from '@angular/core';
import { shellService } from '../components/shell/shell.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _shellService: shellService) { }

  public infos;

  ngOnInit() {
    this.getInfos();
  }

  getInfos() {
    this.infos = this._shellService.getInfos();
  }

}
