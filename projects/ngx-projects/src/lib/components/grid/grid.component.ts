import { Component, OnInit } from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {DASH_BOARD, DASH_BOARD_FORM} from './../../shared/app.keys';

@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public options: GridsterConfig;
  public dashboard: GridsterItem[];
  public dashboardform: GridsterItem[];
  constructor() {
    this.dashboard = DASH_BOARD;
    this.dashboardform = DASH_BOARD_FORM;

    this.options = {
      pushItems: true,
      minCols: 10,
      maxCols: 10,
      minRows: 5,
      fixedRowHeight: 120,
      setGridSize: true,
      mobileBreakpoint: 0,
      gridType: 'fit',
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: false
      }
    };
   }

  ngOnInit(): void {
  }

}
