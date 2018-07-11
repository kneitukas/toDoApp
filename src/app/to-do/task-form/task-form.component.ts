import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { toDoInterface } from '../../toDoInterface';


@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

 @Output() toDo = new EventEmitter<toDoInterface>();

  tittleValue = '';
  descValue = '';
<<<<<<< HEAD
=======

>>>>>>> 6066f9c2f7459b293619bc4401d0da2f59d12a0b

 
  constructor() { }

  ngOnInit() {
  }

  addToList () {
<<<<<<< HEAD
    this.toDo.emit({tittle:this.tittleValue,description:this.descValue,state:'added'})
    this.tittleValue = '';
    this.descValue = '';
  }
=======

    this.toDo.emit({tittle: this.tittleValue, description: this.descValue, state: 'added'});

    this.tittleValue = '';
    this.descValue = '';


    console.log(this.descValue);
  }


>>>>>>> 6066f9c2f7459b293619bc4401d0da2f59d12a0b
}
