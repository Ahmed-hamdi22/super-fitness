const API = import.meta.env.VITE_API;

// Function to fetch a meals categories
export const getMealsCategories = async () => {
  const response = await fetch(`${API}/categories.php`);
  const payload: APIResponse<PaginatedResponse<{ categories: Meals[] }>> =
    await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }
  return payload.categories || [];
};

// Function to fetch a meals by category
export const getMealsByCategory = async (category: string) => {
  const response = await fetch(`${API}/filter.php?c=${category}`);
  const payload: APIResponse<PaginatedResponse<{ meals: MealByCategory[] }>> =
    await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload.meals || [];
};

// Function to fetch a single meal by id
export const getMealDetails = async (id: string) => {
  const response = await fetch(`${API}/lookup.php?i=${id}`);
  const payload: APIResponse<PaginatedResponse<{ meals: MealDetails[] }>> =
    await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload.meals || [];
};
