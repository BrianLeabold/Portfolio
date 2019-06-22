import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {



  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content); }

}
