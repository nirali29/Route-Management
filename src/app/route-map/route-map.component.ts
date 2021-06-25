import { Component, Input, OnInit } from '@angular/core';
import { PolylineManager, GoogleMapsAPIWrapper } from '@agm/core';
import { Stop } from '../interfaces/route.interface';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.scss'],
  providers: [PolylineManager, GoogleMapsAPIWrapper]
})
export class RouteMapComponent implements OnInit {

  constructor(_polylineManager: PolylineManager) { }

  @Input() stops: any[];
  lat = 26.9124;
  lng = 75.7873;
  latlng: any[] = [];
 
  ngOnInit(): void {
    
  }

}
