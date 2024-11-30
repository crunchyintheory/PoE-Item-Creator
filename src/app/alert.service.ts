import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum AlertType {
  Modal,
  ModalConfirm,
  Toast
}

export enum AlertStatus {
  Success = "success",
  Warning = "warning",
  Error = "error"
}

export async function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  })
}

type AlertButton = {
    text: string;
    callback?: VoidFunction;
}

type AlertArgType = {
  type: AlertType;
  status: AlertStatus;
  title: string;
  text: string;
  lifetime?: number;
  buttons?: AlertButton[];
}

export class Alert {
  type: AlertType;
  status: AlertStatus;
  title: string;
  text: string;
  lifetime: number;
  buttons: AlertButton[];

  constructor({ type = AlertType.Toast, status = AlertStatus.Success, title = "", text = "", lifetime = -1, buttons = [{text: "Confirm", callback: () => {}}, {text: "Cancel", callback: () => {}}] }: AlertArgType) {
    this.type = type;
    this.status = status;
    this.title = title;
    this.text = text;
    this.lifetime = lifetime;
    this.buttons = buttons;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _dispatcher: Subject<Alert> = new Subject();

  public get AlertDispatcher(): Observable<Alert> {
    return this._dispatcher.asObservable();
  }

  constructor() { }

  public Dispatch(alert: Alert): void {
    this._dispatcher.next(alert);
  }

}
