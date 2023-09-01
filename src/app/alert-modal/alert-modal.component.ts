import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alert } from '../alert.service';

@Component({
  selector: 'poe-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() alert!: Alert;

  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.canceled.emit();
  }

  confirm(): void {
    this.confirmed.emit();
  }

}
