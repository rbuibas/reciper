import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-sniffer',
  templateUrl: './small-sniffer.component.html',
  styleUrls: ['./small-sniffer.component.css']
})
export class SmallSnifferComponent implements OnInit {

  serverID: number = 10; // hardcodede sample value
  serverStatus: string = 'ofline';

  constructor() { 
    this.serverID = 11;
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit() {
  }

}
