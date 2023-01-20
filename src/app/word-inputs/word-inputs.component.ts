import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Police from 'models/Police';
import WordProperties from 'models/WordProperties';

@Component({
  selector: 'app-word-inputs',
  templateUrl: './word-inputs.component.html',
  styleUrls: ['./word-inputs.component.scss']
})
export class WordInputsComponent implements OnInit {

  @Input() polices: Police[]=[];
  @Input() selectedProperties: WordProperties= new WordProperties();
  @Output() onInputsChange = new EventEmitter<WordProperties>()

  constructor() { }

  ngOnInit(): void {
  }

  onPoliceChange($event: Police):void{
    this.selectedProperties.police= $event;
    this.onInputsChange.emit(this.selectedProperties)
  }

  onChange(){
    this.onInputsChange.emit(this.selectedProperties)
  }

}
