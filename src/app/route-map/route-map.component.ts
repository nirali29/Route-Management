// declare var google;
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
  latA = 51.67841;
  latB = 11.234567;
  lngA = 7.809007;
  lngB = 86.999999;
  latlng: any[] = [];
  public icon = {
    url: 'http://earth.google.com/images/kml-icons/track-directional/track-4.png',
    scaledSize: {
      width: 30,
      height: 30
    }
}
  ngOnInit(): void {
    // this.stops = [{
    //   latitude: 26.9124,
    //   longitude: 75.7873
    // }, {
    //   latitude: 60.4720,
    //   longitude: 8.4689
    // }, {
    //   latitude: 8.7832,
    //   longitude: 34.5085
    // }]
  }

}
