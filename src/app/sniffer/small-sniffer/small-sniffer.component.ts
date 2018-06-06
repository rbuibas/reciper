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
  }

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit() {
  }

}
