import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteMapComponent } from './route-map/route-map.component';
import { RouteCreateComponent } from './route-create/route-create.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import {MultiSelectModule} from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    RouteListComponent,
    RouteMapComponent,
    RouteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    TableModule,
    FormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpH5IIGxIz4OxTZyBDv16kKB7xVGcWnHM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
