import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyRoute, Stop } from '../interfaces/route.interface';
import { ROUTES } from '../../assets/mock-routes';
import { STOPS } from '../../assets/stops';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  getRoutes(): Observable<MyRoute[]> {
    const heroes = of(ROUTES);
    return heroes;
  }

  createRoute(name: string, direction: string, status: string, type: string, stops: any[]) {
    let maxId = Math.max.apply(Math, ROUTES.map(function(o) { return o.routeId; }))
    ROUTES.push(
      {
        routeId: (maxId + 1).toString(),
        routeName: name,
        direction: direction,
        status: status,
        type: type,
        stops: stops
      }
    )
    console.log(ROUTES);
  }

  deleteRow(id: string) {
    let index = ROUTES.map(function(e) { return e.routeId; }).indexOf(id);
    if (index > -1) {
      ROUTES.splice(index, 1);
    }
  }

  updateRoute(id: string, name: string, direction: string, status: string, type: string, stops: any[]) {
    var foundIndex = ROUTES.findIndex(x => x.routeId == id);
    let row = {
        routeId: id,
        routeName: name,
        direction: direction,
        status: status,
        type: type,
        stops: stops  
    }
    ROUTES[foundIndex] = row;
    console.log(ROUTES);
  }

  uploadCsv(routeList: any[]) {
    routeList.forEach(route => {
      let stops = [];
      let routeJson;
      let maxId = Math.max.apply(Math, ROUTES.map(function(o) { return o.routeId; }))
      route['stops'].substring(0, route['stops'].length-1).split(' ').forEach(stop => {
        stops.push((STOPS.filter(a => a.stopId == stop))[0]);
      });
      ROUTES.push({
        routeId: (maxId + 1).toString(),
        routeName: route.routeName,
        direction: route.direction,
        status: route.status,
        type: route.type,
        stops: stops
      });
    })
  }

  getStops() {
    return STOPS;
  }
}
