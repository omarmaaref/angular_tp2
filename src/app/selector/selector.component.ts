import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Police from 'models/Police';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  @Input() items:Police[] =[];
  @Input() currentValue= "";
  @Output() onItemChange = new EventEmitter<Police>()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    const item = this.items.find(item => item.value=== this.currentValue)
    if(!item) return;
    this.onItemChange.emit(item)
  }

}
