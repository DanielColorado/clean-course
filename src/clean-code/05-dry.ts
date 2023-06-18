type Size = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
    constructor(public name: string = '', public price: number = 0, public size: Size = '') { }
    //No DRY
    toString(): string {
        if(this.name.length <= 0 ){
            throw new Error('name is Empty');
        }
        if(this.price <= 0 ){
            throw new Error('price is Zero');
        }
        if(this.size.length <= 0 ){
            throw new Error('size is Empty');
        }
        return `${this.name} (${this.price}), ${this.size}`;
    }
}
(() => {
    const bluePants = new Product('Blue Large Pants',10,'S');
    console.log(bluePants.toString());
    const bluePantsExceptions = new Product('Blue Large Pants');
    console.log(bluePantsExceptions.toString());
})();