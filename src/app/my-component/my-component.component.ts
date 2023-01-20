import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})


export class MyComponentComponent implements OnInit {

  color:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange():void {
    console.log("changing color",this.color)
  }
  onButtonClick(): void {
    this.color = ""
  }
  setColor(value: string) {
    this.color= value
  }

}
