import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild, AfterContentInit, DoCheck } from '@angular/core';
import { toDoInterface } from '../../toDoInterface';
import { CustomIconService } from '../../custom-icon.service';
import { MatTable } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource} from '@angular/material'
import { trigger, style, transition, animate, group } from '@angular/animations';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
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
export class TaskListComponent implements OnInit,OnChanges {
  
  columnsToDisplay = ['tittle', 'description','deadline','priority','date','state','done'];

   @Input()toDoList: toDoInterface[] = [];
   doneList:any[] = []
   dataSource = new MatTableDataSource<any>(this.toDoList);
   data: toDoInterface[] = this.toDoList;
   today: number = Date.now();
  

    constructor(private customIcon:CustomIconService) { 

  }

  ngOnChanges() {
    this.dataSource.data = this.toDoList;
  }

  ngOnInit() {
    this.customIcon.init(); 
  }

  moveToDone(i) {
    this.toDoList.splice(i,1);
    this.doneList =[...this.doneList,i];
    this.dataSource.data = this.toDoList;
    console.log(this.doneList)
    console.log(this.toDoList)
  }

   deleteToDo(i) {
     this.toDoList.splice(i,1);
     this.dataSource.data = this.toDoList;
     console.log(this.toDoList)
   
   } 

}


