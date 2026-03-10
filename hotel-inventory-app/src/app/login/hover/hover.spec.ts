import { ElementRef, Renderer2 } from '@angular/core';
import { Hover } from './hover';

describe('Hover', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('input') } as ElementRef;
    const mockRenderer = {
      setStyle: () => {},
      addClass: () => {},
      removeClass: () => {}
    } as any as Renderer2;
    const directive = new Hover(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
