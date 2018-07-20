import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnifferComponent } from './sniffer.component';
import { SmallSnifferComponent } from './small-sniffer/small-sniffer.component';
import { BigSnifferComponent } from './big-sniffer/big-sniffer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SnifferComponent,
    SmallSnifferComponent,
    BigSnifferComponent
  ]
})
export class SnifferModule { }
