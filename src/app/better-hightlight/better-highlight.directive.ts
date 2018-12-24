import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() public defaultColor:string='transparent';
  @Input('appBetterHighlight') public highlightColor:string='blue';

  @HostBinding('style.backgroundColor') bgColor:string=this.defaultColor;

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    this.bgColor=this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','green');
    this.bgColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventDataEvent){
    //this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
    this.bgColor=this.defaultColor;
  }
}
