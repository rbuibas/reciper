import { Directive, Renderer2, ElementRef, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(private rend: Renderer2, private elem: ElementRef) { }

  ngOnInit() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
