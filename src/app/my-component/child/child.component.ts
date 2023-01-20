import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() color:string ="black";
  myFavoriteColor: string ="blue"; 

  @Output() favoriteColorEvent= new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  
  setToFavoriteColor() {
    this.favoriteColorEvent.emit(this.myFavoriteColor)
  }

}
