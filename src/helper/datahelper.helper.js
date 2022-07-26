import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class DataHelper {
    folder = "data";
    files = [];


    constructor(files, folder) {
        this.files = files;
        this.folder = folder || "data";

    }

    initDataStorage = async () => {
        const dataStorage = {};
        for (const file of this.files) {
            dataStorage[file + "Data"] = await this.readJsonFile(file);
        }
        localStorage.setItem("data", JSON.stringify(dataStorage))
    }

    readJsonFile = async (file) => {
        let items = [];
        await fetch(`./src/${this.folder}/${file}.json`) //fetch va chercher dans le dossier de l'objet (ici "data") le fichier json (file) actuel, le reste du code est en attente de la fin de l'exécution de cette commande
            .then(resp => { return resp.text() }) //resp == ce qui a été cherché dans fetch; resp.text() == l'ensemble des lignes de texte contenu dans resp
            .then(text => { items = JSON.parse(text) }); //text == les lignes de texte contenues dans resp; 
        return items;
    }

    getAll = (table) => {
        const data = JSON.parse(localStorage.getItem("data"));
        const rows = data[table + "Data"]?.map(row => {
            switch (table) {
                case "category":
                    return new Category(row);
                case "product":
                    return new Product(row);
            }

        })
        return rows;

    }

    getOne = (table, id) => {
        const data = JSON.parse(localStorage.getItem('data'));
        const row = data[table + "Data"]?.find(item => item.id == id);
        if (!row) {
            return undefined;
        }
        switch (table) {
            case "category":
                return new Category(row);
            case "product":
                return new Product(row);
        }
    }

    




}





