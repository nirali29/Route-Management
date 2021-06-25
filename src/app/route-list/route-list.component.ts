import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild,Output, EventEmitter} from '@angular/core';
import { ROUTES } from '../../assets/mock-routes';
import { MyRoute } from '../interfaces/route.interface';
import * as FileSaver from 'file-saver';
import { RoutesService } from '../services/routes.service';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {
  @ViewChild('op', {static: false}) op: OverlayPanel;
  @Input() myRoutes: MyRoute[];
  @Output() mapCoords = new EventEmitter();
  cols: any[];
  rows: any[] = [];
  panelVisible: boolean;
  selectedRouteId: string;
  selectedRoute: MyRoute;
  constructor(private routesService: RoutesService) { }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getRows();
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'routeId', header: 'Route Id' },
      { field: 'routeName', header: 'Name' },
      { field: 'direction', header: 'Direction' },
      { field: 'status', header: 'Status' },
      { field: 'type', header: 'Type' },
      { field: 'stops', header: 'Stops' }
  ];
  this.getRows();
  }

  getRows() {
    // this.routesService.getRoutes()
    //       .subscribe(routes => this.myRoutes = routes);  
    this.rows = []; 
    this.myRoutes.forEach(route => {
      let row = {
        routeId: route.routeId,
        routeName: route.routeName,
        direction: route.direction,
        status: route.status,
        type: route.type,
        stops: route.stops.map((a) => a.stopId).join(', ')
  
      }
      this.rows.push(row);
    })
  }

  deleteRow(id: string) {
    this.myRoutes = this.myRoutes.filter(row => {
      return row.routeId !== id;
    });
    this.getRows();
  }

  updateRow(id: string) {
    // this.panelVisible = true;
    this.selectedRouteId = id;
    this.selectedRoute = this.myRoutes.filter(route => {return route.routeId == id})[0];
  }

  routeCreated($event) {
    // this.panelVisible = false;
    this.op.hide();
    this.routesService.getRoutes()
          .subscribe(routes => this.myRoutes = routes);
    this.getRows();
  }

  onRowSelect(event) {
    console.log(event);
  }

  generatePolyline(route) {
    this.mapCoords.emit(this.myRoutes.filter(row => {
      return row.routeId === route.routeId;
    })[0].stops);
  }
}
