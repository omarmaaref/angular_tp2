import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})
export class CarteVisiteComponent implements OnInit {

  face: "back" | "front" = "front"

  //information fils
  name: string= "Sahnoun"
  firstName : string= "Dali"
  job: string= "Trainer"
  path: string = "dali.png"
  description: string = "tant qu'il y'a de la vite, il y'a de l'histoire"
  workDescription: string = "J'enseigne aux étudiants les technos du Web"
  keyWords: string= "HTML, CSS, ANGULAR, ETC..."
  
  constructor() { }

  ngOnInit(): void {
  }

  switchFace():void {
    this.face= (this.face === "back")? "front": "back"
  }

}
