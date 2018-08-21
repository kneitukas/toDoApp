import { Component, OnInit,ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, } from '@angular/forms';
import { filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.scss']
})
export class NotesDialogComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: any;
  @ViewChild('videoElement') videoElement: any;  
  @ViewChild('canvas') canvas: any; 
  audio: any;
  image : any;
  video: any;
  form : FormGroup;
  captureState:boolean;
  audioChunks = []
  mediaRecorder : MediaRecorder;
  audioURL: any;

  constructor(private notesDialogRef: MatDialogRef<NotesDialogComponent>,
    private formBuilder:FormBuilder,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      description:'',
    }) 
    this.canvas = this.canvas.nativeElement;
    this.video = this.videoElement.nativeElement;
    this.audio = this.audioPlayer.nativeElement;
  }

  submit(form) {
    this.notesDialogRef.close({
      note:form.value,
    })
  }

  submitImage(form) {
     this.notesDialogRef.close({
      desc:form.value,
      image:this.image
    })
  }

  initCamera(config:any) {
    config = {
      video:true,
      audio:false
    }

    this.captureState = true;
    let browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream=> {
      this.video.srcObject = stream;
      this.video.play();
    });
  }
  capture() {
    this.canvas.getContext("2d").drawImage(this.video,0,0,640,480);
    let context = this.canvas.toDataURL("image/png");
    this.image = context;
    this.video.srcObject.getVideoTracks().forEach(track => track.stop());
    this.captureState = false;
  }

  initAudio() {
   
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();

      const audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
      this.audioURL = URL.createObjectURL(audioBlob);
      const audio = new Audio(this.audioURL);
      audio.play();
     
    });

      setTimeout(() => {
      mediaRecorder.stop();
    }, 3000);

    });

  }

  submitAudio() {
    this.notesDialogRef.close(this.audioURL);
  }
}
