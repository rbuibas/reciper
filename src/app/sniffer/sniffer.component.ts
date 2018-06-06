import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-sniffer',
  templateUrl: './sniffer.component.html',
  styleUrls: ['./sniffer.component.css']
})
export class SnifferComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }
  
  onCreateServer() {
    this.serverCreationStatus = 'Server created. Name: ' + this.serverName;
    //console.log("testing", this.serverCreationStatus);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
