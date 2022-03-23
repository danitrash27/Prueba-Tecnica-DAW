import category from './categorias.json';

export function CategoriesGrid(){
    console.log(category);
    return (
        <ul>
            {category.map(function(e){
                return <li>{e}</li>
            })}
        </ul>
    );
}