declare type Meals = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
} & DatabaseFields;

declare type MealByCategory = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
} & DatabaseFields;

declare type MealDetails = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
} & DatabaseFields;
