import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Plot} from "../../model/entities.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-plot-managment',
  templateUrl: './plot-managment.component.html',
  styleUrls: ['./plot-managment.component.css']
})
export class PlotManagmentComponent implements OnInit {
  public isEdit: boolean;

  public plot: Plot = new class implements Plot {
    crop: string;
    plotId?: number;
    plotSize: string;
  }


  constructor(private apiService: ApiService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<PlotManagmentComponent>) {
  }

  ngOnInit(): void {
  }

  snackbarConfig(text: string, snackbar: MatSnackBar, duration: number = 5000) {
    snackbar.open(text, "Plot Saved Successfully", {
      duration});
  }

  save() {
      this.apiService.savePlot(this.plot).subscribe(() => {
        console.log(this.plot)

        this.snackbarConfig("Plot Saved Successfully", this.snackBar, 1000);
        this.dialogRef.close();
      })
    }
  // }

}
