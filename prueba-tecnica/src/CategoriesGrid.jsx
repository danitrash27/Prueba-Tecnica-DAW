import categories from './categorias.json';
import { CategoryCard } from './CategoryCard';

export function CategoriesGrid(){
    return (
        <ul>
            {categories.map(category => <CategoryCard key="" categoria={category} />)}
        </ul>
    );
}