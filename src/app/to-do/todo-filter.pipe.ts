import { Pipe, PipeTransform } from '@angular/core';
import { toDoInterface } from '../toDoInterface';

@Pipe({
  name: 'toDoFilter', pure: false
})
export class ToDoFilterPipe implements PipeTransform {
    transform(items: toDoInterface[], state: string) {
       return items.filter(item => item.state === state);

    }
}
