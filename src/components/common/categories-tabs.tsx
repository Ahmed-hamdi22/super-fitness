type CategoriesTabsProps = {
  categories: Meals[];
  selectedCategory: string | null;
  onSelect: (category: string) => void;
};

export default function CategoriesTabs({
  categories,
  selectedCategory,
  onSelect,
}: CategoriesTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {/* Loop through each category and render a button */}
      {categories.map((cat) => (
        <button
          key={cat.idCategory}
          onClick={() => onSelect(cat.strCategory)}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            selectedCategory === cat.strCategory
              ? "bg-custom-orange text-white"
              : "text-black"
          }`}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}
