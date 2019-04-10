import { RecipeItem } from './recipe-item';
import { deserialize, deserializeAs } from 'cerialize';

export class Recipe {
  @deserialize public id: number;
  @deserialize public name: string;
  @deserializeAs(RecipeItem) public in: RecipeItem[];
  @deserializeAs(RecipeItem) public out: RecipeItem;
  @deserialize public rank: number;
  @deserialize public image: string;
}
