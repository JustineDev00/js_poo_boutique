import {DataHelper} from "../helper/datahelper.helper.js";
import { BaseModel } from "./baseModel.model.js";

export class Category extends BaseModel{

    constructor(props){
        super(props); //récupère les informations enregistrées dans l'objet de classe BaseModel (obtenue grâce à l'appel de Objet.assign(this, props))
        this.assign(props); //appelle la fonction héritée de la classe mère BaseModel; relit les données de la ligne de données et ajoute éventuellement aux propriétés de l'objet les valeurs des propriétés propres à la classe fille
    };


    getProductList(){
        let productList = [];
        let datahelper = new DataHelper(["category", "product"]);
        let allProducts = datahelper.getAll("product");
        productList =  allProducts.filter(item => item.category_id == this.id);
        return productList;

    };


}
