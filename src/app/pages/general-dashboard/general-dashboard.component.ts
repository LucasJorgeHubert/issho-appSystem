import { Component, OnInit } from '@angular/core';
import { hearderInfos } from './components/shell/header/header.component';
import { shellService } from './components/shell/shell.service';

@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss']
})
export class GeneralDashboardComponent implements OnInit {

  constructor(private _shellService: shellService) { }

  ngOnInit() {
    this.setInfos();
  }

  setInfos(){
    let infos = {
      actualPage : 'Início',
      userImage: 'http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
      userName: 'Lucas Hubert'
    }
    this._shellService.setInfos(infos)
  }

}
