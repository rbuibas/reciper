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
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }
  
  onCreateServer() {
    this.serverCreationStatus = 'Server created. Name: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
    //console.log("testing", this.serverCreationStatus);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
