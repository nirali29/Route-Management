import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyRoute, Stop } from 'src/app/interfaces/route.interface';
import { RoutesService } from '../services/routes.service';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-route-create',
  templateUrl: './route-create.component.html',
  styleUrls: ['./route-create.component.scss'],
  
})
export class RouteCreateComponent implements OnInit {

  @Input() updateForm? : boolean;
  route: MyRoute;
  @Input() routeId?: string;
  @Input() inputRoute?: MyRoute;
  inputRouteName: string;
  stops: Stop[] = [];
  inputDirection: string;
  inputStatus: string;
  inputType: string;
  selectedStops: Stop[] = [];
  @Output() createEvent = new EventEmitter();
  constructor(private routesService: RoutesService) {}

  ngOnInit(): void {
    this.inputRouteName = this.inputRoute? this.inputRoute.routeName: '';
    this.inputDirection = this.inputRoute? this.inputRoute.direction: 'Up';
    this.inputStatus = this.inputRoute? this.inputRoute.status: 'Active';
    this.inputType = this.inputRoute? this.inputRoute.type: 'AC';
    this.stops = this.routesService.getStops();
    this.selectedStops.push(this.stops[0]);
  }

  createRoute(data) {
    this.routesService.createRoute(this.inputRouteName, this.inputDirection, this.inputStatus, this.inputType, this.selectedStops);
    this.createEvent.emit('');
  }

  
  updateRoute() {
    this.routesService.updateRoute(this.inputRoute.routeId, this.inputRouteName, this.inputDirection, this.inputStatus, this.inputType, this.selectedStops);
    this.createEvent.emit('');
  }

  handleFileInput(event) {
    //event.files == files to upload
    console.log(event);
    const reader = new FileReader();
    let text;
    reader.onload = () => {
      text = reader.result;
      var json = this.csvJSON(text);
      this.routesService.uploadCsv(json);
      this.createEvent.emit('');
    };
    reader.readAsText(event[0]);
}

public csvJSON(csv) {
  // csv = csv.substring(1, csv.length-1);
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].substring(0, lines[0].length-1).split(",");
  for (var i = 1; i < lines.length-1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
      }
      result.push(obj);
  }
  return result; //JSON
}

}

