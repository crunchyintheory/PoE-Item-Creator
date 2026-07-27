import { Component, OnDestroy, OnInit } from "@angular/core";
import { PropFieldGroupComponent } from "../prop-field-group/prop-field-group.component";
import { ItemService } from "../item-service.service";
import { ISerializable } from "../serializable";

type VeiledVariant = ISerializable & { size: string };
export const VeiledVariants: VeiledVariant[] = ["Prefix", "Suffix"].map(size => [...Array(5).keys()].map(i => ({ displayName: `${size} ${i+1}`, name: `${size.toLowerCase()}-${i+1}`, size: size.toLowerCase() }))).flat();
export const VariantMap = VeiledVariants.reduce((acc, x) => acc.set(x.name, x), new Map<string, VeiledVariant>());

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
        this.variants = VeiledVariants;
        this.current = VeiledVariants[0];
    }

    override ngOnInit() {
        super.ngOnInit();

        if(VariantMap.has(this.property.value)) {
            this.current = VariantMap.get(this.property.value)!;
        } else {
            this.current = VeiledVariants[0];
            this.property.value = this.current.name;
        }

        this.update();
    }

    ngOnDestroy() {
        this.property.extraClassName = "";
    }

    update() {
        this.property.value = this.current.name;
        this.property.extraClassName = this.property.type.extraClassNameMap!(this.property);
    }
}
