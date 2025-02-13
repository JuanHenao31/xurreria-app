import { Component, OnInit } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  actual_year: number = new Date().getFullYear();

  constructor( public infopageService : InfopageService) { }

  ngOnInit(): void {
  }

}
