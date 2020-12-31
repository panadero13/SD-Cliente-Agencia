import { Vuelo } from './../../templates/vuelo.template';
import { ServerCallerService } from './../server-caller.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent {
  /** Based on the screen size, switch from standard to one column per row */
  vuelos =  [];

  constructor(private breakpointObserver: BreakpointObserver,
    public serverCaller:ServerCallerService) {}

  ngOnInit(){
    this.serverCaller.getVuelos().subscribe(
      response => {
        this.vuelos = response;
      },
      err => {
        console.log(err);
      }
    )
  }

}
