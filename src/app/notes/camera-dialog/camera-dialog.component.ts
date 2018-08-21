import { Component, OnInit,ViewChild ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-camera-dialog',
  templateUrl: './camera-dialog.component.html',
  styleUrls: ['./camera-dialog.component.scss']
})
export class CameraDialogComponent implements OnInit {

  @ViewChild('videoElement') videoElement: any;  
  @ViewChild('canvas') canvas: any; 

  form : FormGroup;
  image : any;
  video: any;
  captureState:boolean;

  constructor(private cameraDialogRef: MatDialogRef<CameraDialogComponent>,
              private formBuilder:FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data) { }         

  ngOnInit() {
    this.captureState = true;
    this.canvas = this.canvas.nativeElement;
    this.video = this.videoElement.nativeElement;
    this.initCamera({ video: true, audio: false });

    this.form = this.formBuilder.group({
      image: this.data? this.data.image:'',
      title: this.data? this.data.title:'',
      description:this.data? this.data.description:''
    }) 
  }

  onNoClick(): void {
    this.cameraDialogRef.close();
  }
 
    initCamera(config:any) {
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

  submit(form) {
    this.cameraDialogRef.close({
      form:form.value,
      image:this.image
    })
  }
  
}
