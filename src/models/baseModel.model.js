export class BaseModel{

    id = -1;
    title = "";
    description = "";
    image = "url";


    assign(props){
        for (const key in props){
            if(!this.hasOwnProperty(key)){  //pour chaque clé, regarde si la clé existe dans les propriétés de la classe : si oui, l'expression est false et la paire clé/value est conservée; si non, l'expression est true et la clé qui n'existe pas dans la classe de base est supprimée;
                delete props[key];
            }
        }
        Object.assign(this, props); //ajoute à l'objet en construction les paires clés/valeur qui sont conservées;
    }

    setProp(key, value){
        if (key == this.id) return this; //key : nom de la propriété de l'objet; value : valeur que l'on va assigner à la propriété key
        this[key] = value; //empêche la modification de l'id
        //key est variable, il est donc mis en crochet (comme l'index d'un array)
        return this;
    }
    
}