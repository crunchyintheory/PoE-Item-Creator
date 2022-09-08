import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ItemService } from '../item-service.service';
import { ISerializable } from '../serializable';

type Serializable = ISerializable | string | number;

@Component({
  selector: 'poe-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.scss']
})
export class FieldGroupComponent implements OnChanges {

  @Input() @HostBinding('attr.fields') fields = 1;
  @Input("label") labelInput!: any;
  @Input("value") valueInput!: any;
  @Input("value2") value2Input?: any;
  @Input() labelEditable = false;

  @Input() labelChoices?: any[];
  @Input() valueChoices?: any[];
  @Input() value2Choices?: any[];

  @Output() valueChange = new EventEmitter<any>();
  @Output() value2Change = new EventEmitter<any>();
  @Output() labelChange = new EventEmitter<any>();

  protected label: Serializable = "";
  protected value: Serializable = "";
  protected value2: Serializable = "";

  protected choicesShown = false;

  constructor() { }

  ngOnChanges(): void {
    this.label = this.render(this.labelInput);
    this.value = this.render(this.valueInput);
    this.value2 = this.render(this.value2Input);
  }

  protected render(value: Serializable): string {
    if(value == undefined) {
      return "";
    }
    if(typeof(value) == "string") {
      return value;
    }
    else if(typeof(value) == "number") {
      return value.toString();
    }
    return value.displayName;
  }

  protected getName(value: Serializable): string {
    if(value == undefined) {
      return "";
    }
    if(typeof(value) == "string") {
      return value;
    }
    else if(typeof(value) == "number") {
      return value.toString();
    }
    return value.name;
  }

  protected labelChanged(event: any) {
    if(this.labelEditable)
      this.labelChange.emit(event);
    else
      this.label = this.render(this.labelInput);
  }

  protected valueChanged(event: any) {
    this.valueChange.emit(event);
  }

  protected value2Changed(event: any) {
    this.value2Change.emit(event);
  }

  protected focusLabel(focused = true) {
    
  }

}
