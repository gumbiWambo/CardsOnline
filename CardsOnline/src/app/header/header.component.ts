import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean = false;
  routes: string[] = [];
  constructor() { 
    routes.forEach(route => {
      if(route.path !== ''){
        this.routes.push(route.path);
      }
    });
  }

  ngOnInit() {
  }

}
