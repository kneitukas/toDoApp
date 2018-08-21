import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { toDoInterface } from '../../toDoInterface';
import { CustomIconService } from '../../custom-icon.service';


@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

 @Output() toDo = new EventEmitter<toDoInterface>();

  tittleValue = '';
  descValue = '';
  priority:string;
  deadline:number = 1;

  constructor(private customIcon:CustomIconService) {
   }

  ngOnInit() {
    this.customIcon.init()
  }

  addToList () {
    this.toDo.emit({tittle: this.tittleValue, description: this.descValue, priority:this.priority,deadline:this.deadline, state: 'added'});
    this.tittleValue = '';
    this.descValue = '';
  }


}
