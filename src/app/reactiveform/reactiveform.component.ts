import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Countries } from '../templateform/countriesModel';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  contactForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    gender:['',[Validators.required]],
    isMarried:[''],
    country:['',[Validators.required]]
  })

  get myValues(){
    return this.contactForm.controls
  }


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
