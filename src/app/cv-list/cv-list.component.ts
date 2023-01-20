import { Component, Input, OnInit } from '@angular/core';
import { Cv } from 'models/Cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss'],
})
export class CvListComponent implements OnInit {
  @Input() list: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor() {}

  ngOnInit(): void {
    
  }

  changeSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
