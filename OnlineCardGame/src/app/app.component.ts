import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routes } from './app-routing.module' 

@Component({
  selector: 'OCG-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Online Card Game';
  Routen: String[] =[];
  ngOnInit() {
    routes.forEach( value => {
      if ( value.path !== '' && value.path !== '**' && value.path !== 'login' && value.path !== 'matchfield' ) {
        this.Routen.push( value.path );
      }
    });
  }
  ngAfterViewInit() {

  }


}
