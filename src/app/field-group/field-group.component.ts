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

  @Input() @HostBinding('attr.hide') hide: "value" | "value2" = "value2";

  @Output() valueChange = new EventEmitter<any>();
  @Output() value2Change = new EventEmitter<any>();
  @Output() labelChange = new EventEmitter<any>();

  protected label: Serializable = "";
  protected value: Serializable = "";
  protected value2: Serializable = "";

  protected choicesShown = false;
  protected choicesShownName = "";
  protected currentChoices: Serializable[] = [];
  protected current?: Serializable;
  protected currentCallback: (event: any) => void = () => {};

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
    return value.displayName || value.name;
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

  protected getDisplayColor(value: Serializable) {
    if(typeof(value) == "object") {
      return value.displayColor;
    }
    return "";
  }

  protected getDisplayImage(value: Serializable) {
    if(typeof(value) == "object") {
      return value.displayImage == "none" ? "" : value.displayImage;
    }
    return "";
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

  protected focusLabel(focus = true) {
    if(this.labelChoices) {
      this.choicesShown = focus && !this.choicesShown;
      this.currentChoices = this.labelChoices;
      this.current = this.label;
      this.currentCallback = this.labelChanged;
      this.choicesShownName = this.choicesShown ? "label" : "";
    }
  }

  protected focusValue(focus = true) {
    if(this.valueChoices) {
      this.choicesShown = focus && !this.choicesShown;
      this.currentChoices = this.valueChoices;
      this.current = this.value;
      this.currentCallback = this.valueChanged;
      this.choicesShownName = this.choicesShown ? "value" : "";
    }
  }

  protected focusValue2(focus = true) {
    if(this.value2Choices) {
      this.choicesShown = focus && !this.choicesShown;
      this.currentChoices = this.value2Choices;
      this.current = this.value2;
      this.currentCallback = this.value2Changed;
      this.choicesShownName = this.choicesShown ? "value2" : "";
    }
  }
}
