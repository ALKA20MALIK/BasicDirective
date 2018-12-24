import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector:'[appBasicHighlight]',
})

export class BasicHighlightDerective implements OnInit{

    constructor(private elementRef:ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='yellow';
    }
}