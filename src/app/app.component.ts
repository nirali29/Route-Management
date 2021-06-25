import { Component, ViewChild } from '@angular/core';
import { ROUTES } from '../assets/mock-routes';
import { MyRoute } from './interfaces/route.interface';
import { RoutesService } from './services/routes.service';
import { RouteListComponent } from './route-list/route-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Router Baba';
  myRoutes: MyRoute[];
  mapCoords: any[];
  @ViewChild('table', {static: false}) table: RouteListComponent;
  constructor(private routesService: RoutesService) {}
  
  ngOnInit() {
      this.routesService.getRoutes()
          .subscribe(routes => this.myRoutes = routes);
  }

  routeCreated($event) {
    this.routesService.getRoutes()
          .subscribe(routes => this.myRoutes = routes);
    console.log(this.myRoutes);
    this.table.getRows();
  }

  generatePolyline($event) {
    this.mapCoords = $event;
  }
}
