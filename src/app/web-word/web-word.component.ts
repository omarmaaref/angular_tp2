import { Component, OnInit } from '@angular/core';
import Police from 'models/Police';
import WordProperties from 'models/WordProperties';

@Component({
  selector: 'app-web-word',
  templateUrl: './web-word.component.html',
  styleUrls: ['./web-word.component.scss']
})
export class WebWordComponent implements OnInit {

  polices = [
    new Police("Montserrat","Montserrat"),
    new Police("Roboto","Roboto")
  ]

  selectedProperties= new WordProperties(this.polices[0])

  constructor() { }

  ngOnInit(): void {
    
  }

  onInputsChange($event: WordProperties){
    this.selectedProperties= $event;
    console.log($event)
  }

}
