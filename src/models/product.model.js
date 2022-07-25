import { DataHelper } from "../helper/datahelper.helper.js";
import { Category } from "./category.model.js";
import { BaseModel } from "./baseModel.model.js";

export class Product extends BaseModel{
    price = -1;
    category_id = -1;

    constructor(props){
        super(props); //recupère les informations enregistrées dans l'objet de classe BaseModel (obtenue grâce à l'appel de Objet.assign(this, props))
        this.assign(props); //appelle la fonction héritée de la classe mère BaseModel; relit les données de la ligne de données et ajoute éventuellement aux propriétés de l'objet les valeurs des propriétés propres à la classe fille
    }

    getCategory(){  //déclaration d'une fonction propre à cette classe fille
        let datahelper = new DataHelper(["category", "product"]);
        let category = datahelper.getOne("category",this.category_id );
        console.log(category);
        return category;
    }

}