import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { toDoInterface } from '../toDoInterface';


@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  
 @Output() toDo = new EventEmitter<toDoInterface>();


  tittleValue = '';
  descValue = '';
 

  constructor() { }

  ngOnInit() {
  }


  addToList () {
   
    this.toDo.emit({tittle:this.tittleValue,description:this.descValue,state:'added'})

    this.tittleValue = '';
    this.descValue = '';
  
    
    console.log(this.descValue)
  }

  
}
