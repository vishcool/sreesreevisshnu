import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Language } from './models/Language';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-proflie-frontend';
rows=[];
temp=[];
panelOpenState = 1;
step = 0;
languages: Language[] = [
  {name: 'java'},
  {name: 'sql'},
  {name: 'bootstrap'},
  {name: 'spring'},
  {name: 'javascript'},
  {name: 'express'},
  {name: 'angular'},
 

];


constructor(private _snackBar: MatSnackBar){

}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}
  setStep(index: number) {
    this.step = index;
  }


  nextStep() {
    this.step++;
    if(this.step>=3){
      this.openSnackBar("You have Reached the End","Thanks");
    }
  }

  prevStep() {
    this.step--;
  }

ngClick:number;



  ngOnInit(){
   
  }

  drop(event: CdkDragDrop<Language[]>) {
    moveItemInArray(this.languages, event.previousIndex, event.currentIndex);
  }

 
}
