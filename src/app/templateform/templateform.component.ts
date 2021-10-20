import { Component, OnInit } from '@angular/core';
import { Countries } from './countriesModel';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  countries:Countries[] = [
 {name:"Egypt"},
 {name:"Italy"},
 {name:"Franc"},
 {name:"England"},
 {name:"Germany"}
]
log(x:any){
  console.log(x)
}
onSubmit(y:any){
  console.log(y)
}
  ngOnInit(): void {
  }

}
