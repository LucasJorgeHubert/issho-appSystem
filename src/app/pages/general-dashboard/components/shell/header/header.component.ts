import { Component, OnInit, Input } from '@angular/core';
import { shellService } from '../shell.service';

export interface hearderInfos {
  userName?: string;
  userImage?: string;
  actualPage?: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() infos: hearderInfos

  constructor(private _shellService: shellService) { }

  ngOnInit() {
    this.infos = this._shellService.getInfos();
  }


}
