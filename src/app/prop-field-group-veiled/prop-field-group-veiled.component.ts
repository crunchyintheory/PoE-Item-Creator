import { Component, OnDestroy, OnInit } from "@angular/core";
import { PropFieldGroupComponent } from "../prop-field-group/prop-field-group.component";
import { ItemService } from "../item-service.service";
import { ISerializable } from "../serializable";

type VeiledVariant = ISerializable & { size: string };

@Component({
  selector: 'poe-prop-field-group-veiled',
  templateUrl: './prop-field-group-veiled.component.html',
  styleUrls: ['../prop-field-group/prop-field-group.component.scss', './prop-field-group-veiled.component.scss']
})
export class PropFieldGroupVeiledComponent extends PropFieldGroupComponent implements OnInit, OnDestroy {
    public variants: VeiledVariant[];
    public current: VeiledVariant;

    constructor(public override is: ItemService) {
        super(is);
        this.variants = ["Prefix", "Suffix"].map(size => [...Array(5).keys()].map(i => ({ displayName: `${size} ${i+1}`, name: `${size.toLowerCase()}-${i+1}`, size: size.toLowerCase() }))).flat();
        this.current = this.variants[0];
    }

    override ngOnInit() {
        super.ngOnInit();

        let i = this.variants.findIndex(x => x.name == this.property.value);
        if(i !== -1) {
            this.current = this.variants[i];
        } else {
            this.current = this.variants[0];
            this.property.value = this.variants[0].name;
        }

        this.update();
    }

    ngOnDestroy() {
        this.property.extraClassName = "";
    }

    update() {
        this.property.value = this.current.name;
        this.property.extraClassName = `${this.current.size} ${this.current.name}`;
    }
}
