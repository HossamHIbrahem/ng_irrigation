import {Component, ViewChild} from '@angular/core';
import {PlotManagmentComponent} from "../plot-managment/plot-managment.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../services/api.service";
import {Plot} from "../../model/entities.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-irrigation';

  displayedColumns: string[] = ['Plot Id', 'Plot Size', 'Crop'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  plots: Plot[] = [];
  dataSource = new MatTableDataSource<Plot>();

  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getPlots().subscribe(res => {
      this.plots = res;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editPlot(plot: Plot): void {
    // const dialogRef = this.dialog.open(EditPlotComponent, {
    //   data: plot
    // });
    // dialogRef.afterClosed().subscribe(() => {
    //   this.ngOnInit();
    // });
  }

  addPlot() {
    const dialogRef = this.dialog.open(PlotManagmentComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}
