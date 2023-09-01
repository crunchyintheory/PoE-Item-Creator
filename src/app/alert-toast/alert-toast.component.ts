import { Component, ComponentRef, HostBinding, Input, OnInit } from '@angular/core';
import { Alert, wait } from '../alert.service';

@Component({
  selector: 'poe-alert-toast',
  templateUrl: './alert-toast.component.html',
  styleUrls: ['./alert-toast.component.scss']
})
export class AlertToastComponent implements OnInit {

  @Input("alert") public alert!: Alert;
  
  public self?: ComponentRef<AlertToastComponent>;

  @HostBinding('class.fading') fading = false;
  
  private fadeTime = 1000;

  constructor() { }

  async ngOnInit(): Promise<void> {
    if(this.alert.lifetime > 0) {
      await wait(this.alert.lifetime);
      this.fading = true;
      await wait(this.fadeTime);
      this.self?.destroy();
    }
  }

}
