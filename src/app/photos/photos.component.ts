import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  /* images = [1, '../../assets/images/garage_1.jpg',
            2, '../../assets/images/garage_7.jpg',
            3, '../../assets/images/garage_3.jpg',
            ]; */


  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'Flagstone'}); }

}
