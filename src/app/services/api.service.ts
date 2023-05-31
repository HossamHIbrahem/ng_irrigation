import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {api_root} from "../../environments/environment";
import {Plot} from "../model/entities.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlots(){
    return this.http.get<Plot[]>(`${api_root}/getAllPlots`)
  }

  savePlot(body: Plot){
    return this.http.post(`${api_root}/addPlot`,body);
  }

  updatePlot(plot: Plot){
    return this.http.put(`${api_root}/updatePlot/${plot.plotId}`, plot);
  }


}
