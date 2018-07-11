import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toDoInterface } from '../../toDoInterface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {


   @Input()toDoList: toDoInterface[] = [];
   @Input()state: string;

  constructor() { }

  ngOnInit() {
    /*this.toDoList.push({tittle:'1', description:'sdsdsd',state:'added'})
    this.toDoList.push({tittle:'2', description:'sdsdsd',state:'done'})
    this.toDoList.push({tittle:'2', description:'sdsdsd',state:'done'})*/

  }

  moveToDone(listItem) {
    this.toDoList[this.toDoList.indexOf(listItem)].state = 'done';
  }


   deleteToDo(listItem) {
     this.toDoList[this.toDoList.indexOf(listItem)].state = 'deleted';

     console.log(listItem);
   }

}
