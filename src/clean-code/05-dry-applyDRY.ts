type SizeDRY = '' | 'S' | 'M' | 'L' | 'XL';
class ProductDRY {
    constructor(public name: string = '', public price: number = 0, public size: SizeDRY = '') { }
    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length <= 0) {
                        throw new Error(`${key} is Empty`);
                    }
                    break;
                case 'number':
                    if ((this[key] as number) <= 0) {
                        throw new Error(`${key} is Zero`);
                    }
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not defined`);
            }
        }
        return true;
    }
    //DRY
    toString(): string {
        if (!this.isProductReady()) {
            return '';
        }
        return `${this.name} (${this.price}), ${this.size}`;
    }
}
(() => {
    const bluePants = new ProductDRY('Blue Large Pants', 10, 'S');
    console.log(bluePants.toString());
    const bluePantsExceptions = new ProductDRY('Blue Large Pants');
    console.log(bluePantsExceptions.toString());
})();