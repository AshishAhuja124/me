import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input()
appHighlight:number;
salary:String
  constructor(private el:ElementRef) { }
@HostListener('click') onClick(){
  if(this.appHighlight>=20000)
  this.el.nativeElement.style.background='blue';
 else 
  this.el.nativeElement.style.background='green';
}
}
