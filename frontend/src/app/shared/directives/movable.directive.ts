import { Directive, HostBinding, HostListener } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { IPosition } from 'src/app/core/models/position.model';

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableDirective{
 position={x:0,y:0} 
 private startPosition !:IPosition;

 @HostBinding('style.transform')get transform(){
  return `translateX(${this.position.x}px) translateY(${this,this.position.y}px)`
 }

 @HostListener('dragStart',['$event'])onDragStart(event:PointerEvent){
  this.startPosition = {
    x: event.clientX,
    y:event.clientY
  }
 }

 @HostListener('dragMove',['$event'])onDragMove(event:PointerEvent){
  this.position.x =event.clientX-this.startPosition.x;
  this.position.y =event.clientY-this.startPosition.y;
  
 }

 @HostListener('dragEnd',['$event'])onDragEnd(event:PointerEvent){
  console.log('end')
  
 }

  constructor() {
    super()
   }

}
