import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { PlotManagmentComponent } from './components/plot-managment/plot-managment.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    PlotManagmentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        HttpClientModule,
        FormsModule

    ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
