import { DataHelper } from "../helper/datahelper.helper";
import { Category } from "./category.model";


export class Product {
    id = -1;
    title = "";
    price = -1;
    description = "";
    image = "url";
    category_id = -1;

    constructor(props){
        Object.assign(this, props);
    }

    getCategory(){
        let datahelper = new DataHelper(["category", "product"]);
        let category = datahelper.getOne("category",this.category_id );
        console.log(category);
        return category;
    }

}