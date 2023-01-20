import { Component, OnInit,Input } from '@angular/core';
import { Cv } from 'models/Cv';
import { HiredService } from '../services/hired.service';
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {


  //information fils
  @Input() cv: Cv | null = null;

  constructor(
    private hiredService : HiredService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  hire(){
    if(!this.cv) return; 

    //check if cv is already hired
    if(this.hiredService.isAlreadyHired(this.cv)){
      this.toastr.error("CV déja embauché")
      return ;
    }

    //add cv
    this.hiredService.hire(this.cv)
    this.toastr.success("CV emabauché")
  }

  

}
