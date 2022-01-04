import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";

@Component({
    selector: 'app-cropper',
    templateUrl: './cropper.component.html',
    styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {
    imageChangedEvent: any = '';
    public croppedImage: any = '';

    constructor() {}

    ngOnInit(): void {

    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        console.log(event)
        this.croppedImage = event.base64;
    }

}
