import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '../../../node_modules/@angular/material';
import { CameraDialogComponent } from './camera-dialog/camera-dialog.component';
import { filter } from 'rxjs/operators';
import { DataService } from './data.service';
import { NotesDialogComponent } from './notes-dialog/notes-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers : [DataService],
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
export class NotesComponent implements OnInit {
  state = false;
  notes = [];
  images = [];
  audioArray = [];
  currentDay : string = new Date().toDateString();

  cameraDialogRef : MatDialogRef<CameraDialogComponent>
  notesDialogRef : MatDialogRef<NotesDialogComponent>
  constructor(private dialog:MatDialog,
              private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

    openNotesDialog() {
      this.notesDialogRef = this.dialog.open(NotesDialogComponent, {
        hasBackdrop:true,
      })

      this.notesDialogRef
      .afterClosed()
      .pipe(filter(result => result !== undefined))
      .subscribe(result => {
          if(result.note) {
            this.notes.push(result)
           
          } else if (result.image) {
            this.images.push(result)
          } else {
            this.audioArray.push(result)
          }
          console.log(result)
          console.log(this.audioArray)
        }); 
    }

    deleteNote(i) {
      this.notes.splice(i,1)
    }

    deleteImage(i) {
      this.images.splice(i,1);
    }

    deleteAudio(i) {
      this.audioArray.splice(i,1)
    }

}
