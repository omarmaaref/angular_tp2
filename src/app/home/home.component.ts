import { Component, OnInit } from '@angular/core';
import { Cv } from 'models/Cv';
import { CvService } from '../services/cv.service';
import { HiredService } from '../services/hired.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cvList:Cv[] = []; 
  hiredList: Cv[]= [];

  constructor(
    private cvService: CvService,
    private hiredService: HiredService
  ) { }

  ngOnInit(): void {
    this.cvService.getListSubject().subscribe((l) => (this.cvList = l));
    this.hiredService.getHiredListSubject().subscribe(l => this.hiredList = l )
  }

}
