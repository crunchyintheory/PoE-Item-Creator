import { Component, ComponentRef, Directive, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Alert, AlertService, AlertType } from '../alert.service';
import { filter } from 'rxjs';
import { AlertToastComponent } from '../alert-toast/alert-toast.component';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Directive({
  selector: '[toastContainer]'
})
export class ToastContainerDirective implements OnInit {

  constructor(public ViewContainerRef: ViewContainerRef) { }
  
  ngOnInit(): void {
    
  }
}

@Component({
  selector: 'poe-alert-handler',
  templateUrl: './alert-handler.component.html',
  styleUrls: ['./alert-handler.component.scss']
})
export class AlertHandlerComponent implements OnInit {

  private modals: Alert[] = [];
  public modal?: Alert;
  public toasts: Alert[] = [];

  @ViewChild(ToastContainerDirective, {static: true}) toastHost!: ToastContainerDirective;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.AlertDispatcher.pipe(filter(alert => alert.type == AlertType.Toast)).subscribe(alert => {
      const component = this.toastHost.ViewContainerRef.createComponent<AlertToastComponent>(AlertToastComponent);
      component.instance.alert = alert;
      component.instance.self = component;
    });

    this.alertService.AlertDispatcher.pipe(filter(alert => alert.type != AlertType.Toast)).subscribe(alert => {
      this.modals.push(alert);
      if(!this.modal) {
        this.modal = this.modals.pop();
      }
    });
  }

  modalConfirmed(): void {
    this.modal?.confirmCallback();
    this.modal = this.modals.pop();
  }

  modalCanceled(): void {
    this.modal?.cancelCallback();
    this.modal = this.modals.pop();
  }

}
