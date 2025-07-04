type IngredientProps = {
  ingredient: string;
  measure: string;
};

export function IngredientItem({ ingredient, measure }: IngredientProps) {
  return (
    <div className="flex justify-between border-b border-gray-700 pb-1">
      {/* Ingredient */}
      <span>{ingredient}</span>

      {/* Measure */}
      <span className="text-custom-orange-500">{measure}</span>
    </div>
  );
}


export function extractIngredients(meal: any): IngredientProps[] {
  if (!meal) return [];

  return Array.from({ length: 5 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient ? { ingredient, measure } : null;
  }).filter((item): item is IngredientProps => item !== null);
}

