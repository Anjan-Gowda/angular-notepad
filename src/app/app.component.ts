import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{

  name = 'Note pad ' + VERSION.major;
  notes:any;
  constructor(){
  }
  ngOnInit(): void {
    this.notes= localStorage.getItem("note");
  }
    save(){
 localStorage.setItem("note",this.notes)
    }
    clear(){
      localStorage.clear();
      this.notes=''
    }
}
