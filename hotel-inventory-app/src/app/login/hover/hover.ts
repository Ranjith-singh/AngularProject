import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class Hover implements OnInit{
  // @Input() color: string= 'red'
  @Input() appHover: string= 'red'

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ){
    // console.log(this.element.nativeElement);
  }

  changeColor(){
      
    }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor= this.color
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      // this.color
      this.appHover
    )
  }

  @HostListener('mouseenter') onMouseEnter(){
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        'green'
      )
    }

  @HostListener('mouseleave') onMouseLeave(){
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        'white'
      )
    }

}
