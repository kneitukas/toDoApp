import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { toDoInterface } from '../../../toDoInterface';
import {MatTableDataSource} from '@angular/material'
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
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
export class DoneListComponent implements OnInit,OnChanges {

  columnsToDisplay = ['tittle', 'description','date','priority','state'];

  @Input() doneList:toDoInterface[]= [];
  dataSource = new MatTableDataSource<any>(this.doneList);
  data: toDoInterface[] = this.doneList;
  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.dataSource.data = this.doneList;
  }

  deleteToDo(i) {
    this.doneList.splice(i,1);
    this.dataSource.data = this.doneList;
  } 

}
