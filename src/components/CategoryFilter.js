import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect,filteredTasks }) {
  console.log(categories);
 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories && categories.map((category) => (
          <button 
            className={category === selectedCategory ? 'selected' : ''} 
            key={category} 
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))
      }
      
    </div>
  );
}

export default CategoryFilter;
