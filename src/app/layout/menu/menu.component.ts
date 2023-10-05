import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/layout.service';
import { navigation} from '../../app-navigation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  listNavigation?: any[];
  constructor(public layoutService:LayoutService){}
  ngOnInit(): void {
    this.listNavigation = navigation;
  }

}
