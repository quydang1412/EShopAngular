import { Component, ElementRef, AfterViewChecked, OnInit } from '@angular/core';
import logger from 'src/assets/js/demoExport.js';

// import readyFunction from 'src/assets/js/custom.js';
// const jQuery = require('../assets/js/custom.js');
// function ready() {

//   readyFunction;

// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() { }
  readyFunction: any;


  // export class AppComponent implements AfterViewChecked{
  //   constructor(private elementRef: ElementRef){

  //   }

  //   ngAfterViewChecked(){
  //     var s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.src = "../assets/js/custom.js";
  //     this.elementRef.nativeElement.appendChild(s);
  //   }
  title = 'EShopAngular';
  ngOnInit(): void {
    // ready();
    // readyFunction;

    logger();
  }
}
