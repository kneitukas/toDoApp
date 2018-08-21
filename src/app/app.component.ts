import { Component } from '@angular/core';
import { CustomIconService } from './custom-icon.service';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {

 constructor(private iconService:CustomIconService) {
    this.iconService.init();
 }
 
}
