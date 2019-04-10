import { deserialize } from 'cerialize';

export class RecipeItem {
  @deserialize public id: number;
  @deserialize public name: string;
  @deserialize public howMany: number;
  @deserialize public rank: number;
}
