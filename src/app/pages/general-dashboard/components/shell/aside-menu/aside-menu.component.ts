import { Component, OnInit } from '@angular/core';
import { menuItem } from '../../menu-item/menu-item.component';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuItems(): menuItem[] {
    return [
      { item: 'Inicio', imgUrl: '../../../../../assets/icons../../../../../assets/icons/menu/home.svg', active: false },
      { item: 'Lista de presença', imgUrl: '../../../../../assets/icons/menu/list-ul.svg', active: false },
      { item: 'Saúde', imgUrl: '../../../../../assets/icons/menu/heart.svg', active: false },
      { item: 'Conversas', imgUrl: '../../../../../assets/icons/menu/comment.svg', active: false },
      { item: 'Comunicados', imgUrl: '../../../../../assets/icons/menu/comment.svg', active: false },
      { item: 'Galeria', imgUrl: '../../../../../assets/icons/menu/images.svg', active: false },
      { item: 'Eventos', imgUrl: '../../../../../assets/icons/menu/calendar.svg', active: false },
      { item: 'Turmas', imgUrl: '../../../../../assets/icons/menu/school.svg', active: false },
      { item: 'Alunos', imgUrl: '../../../../../assets/icons/menu/child.svg', active: false },
      { item: 'Pais', imgUrl: '../../../../../assets/icons/menu/user-friends.svg', active: false },
      { item: 'Profissionais', imgUrl: '../../../../../assets/icons/menu/user-friends.svg', active: false },
      { item: 'Níveis de acesso', imgUrl: '../../../../../assets/icons/menu/cog.svg', active: false },
    ]
  }

}
