import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alert } from '../alert.service';

@Component({
  selector: 'poe-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() alert!: Alert;

  @Output() pressed = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  press(i: number): void {
    this.pressed.emit(i);
  }

}
