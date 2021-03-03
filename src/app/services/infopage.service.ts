import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfopageInterface } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfopageService {
  infoJSON: InfopageInterface = {};
  loadedData = false;
  us: any[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
    this.loadUS();
  }

  // Read JSON File to get all the parametric Components
  private loadData() {
    this.http
      .get('assets/data/information-template.json')
      .subscribe((resp: InfopageInterface) => {
        this.loadedData = true;
        this.infoJSON = resp;
      });
  }
  private loadUS() {
    this.http
      .get('https://xurreria-35a45-default-rtdb.firebaseio.com/us.json')
      .subscribe((resp: any) => {
        this.us = resp;
      });
  }
}
