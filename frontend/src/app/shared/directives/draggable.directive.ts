import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2 } from '@angular/core';



@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  isDragging = false;

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();


  @HostListener('pointerdown', ['$event']) onPointerDown(event: PointerEvent) {
    this.isDragging = true;

    this.dragStart.emit(event)
  }

  @HostListener('document:pointermove', ['$event']) onPointerMove(event: PointerEvent) {
    if (!this.isDragging) {
      return;
    }

    this.dragMove.emit(event)
  }

  @HostListener('document:pointerup', ['$event']) onPointerUp(event: PointerEvent) {
    if (!this.isDragging) {
      return;
    }

    this.isDragging = false;
    this.dragEnd.emit(event)
  }


}

