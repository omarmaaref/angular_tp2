import { Component, Input, OnInit } from '@angular/core';
import WordProperties from 'models/WordProperties';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {

  @Input() selectedProperties : WordProperties= new WordProperties();

  constructor() { }

  ngOnInit(): void {
  }

}
