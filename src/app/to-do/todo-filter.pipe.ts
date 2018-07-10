import { Pipe, PipeTransform } from '@angular/core';
import { toDoInterface } from '../toDoInterface';

@Pipe({name: 'toDoFilter'})
export class ToDoFilterPipe implements PipeTransform {
    transform(items: toDoInterface[], state:string) {
        console.log(state);
       return items.filter(item => item.state === state);
        
    }
}