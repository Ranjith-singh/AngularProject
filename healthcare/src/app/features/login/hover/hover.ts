import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hcareHover]',
})
export class Hover implements OnInit{

  @Input() hcareHover: string= '#ADD8E6';
  defaultColor: string= '#ADD8E6';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(this.elementRef.nativeElement);
  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor= this.color;
    console.log(this.hcareHover);
    if(this.hcareHover.trim() === '') {
      this.hcareHover = this.defaultColor;
    }
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.hcareHover
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      '#b4eda3'
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'white'
    )
  }

}
