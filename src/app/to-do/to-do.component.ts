import { Component, OnInit} from '@angular/core';
import { toDoInterface } from '../toDoInterface';
import { trigger, style, transition, animate, group } from '@angular/animations';

  

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class ToDoComponent implements OnInit {

  toDoList: toDoInterface[] = []
  added = 'added';
  done = 'done'

  constructor() { }

  ngOnInit() {
    console.log(this.toDoList)
  }

  newToDo (formData: toDoInterface) {
    // this.toDoList.push(formData);
    this.toDoList = [...this.toDoList, formData];
    console.log(this.toDoList);
  }

}
