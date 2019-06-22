import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MyservicesComponent implements OnInit {

  currentJustify = 'justified';


  constructor() { }

  ngOnInit() {
  }

}
