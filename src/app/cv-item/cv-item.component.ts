import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from 'models/Cv';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.scss'],
})
export class CvItemComponent implements OnInit {
  @Input() cv: Cv = new Cv();
  @Input() selected: boolean = false;
  @Output() select = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeSelected() {
    this.select.emit()
  }
}
