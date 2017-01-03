import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts'

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart.component';
import { TableComponent } from './table.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

const appRoutes: Routes = [
  {
    path: 'queues',
    component: TableComponent
  },
  {
    path: 'statistic',
    component: LineChartComponent
  },
  {
    path: '',
    redirectTo: '/queues',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ChartsModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
