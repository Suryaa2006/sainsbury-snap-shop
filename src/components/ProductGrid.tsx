import { ProductCard } from "./ProductCard";
import eggsImage from "@/assets/eggs.jpg";
import oatMilkImage from "@/assets/oat-milk.jpg";
import breadImage from "@/assets/bread.jpg";
import bananasImage from "@/assets/bananas.jpg";
import yogurtImage from "@/assets/yogurt.jpg";
import glutenFreeBreadImage from "@/assets/gluten-free-bread.jpg";
import chickenImage from "@/assets/chicken.jpg";

// Mock product data
const products = [
  {
    id: "1",
    name: "Sainsbury's Organic Free Range Eggs, 12 pack",
    image: eggsImage,
    size: "12 eggs",
    price: "£3.25",
    nectarPrice: "£3.50",
    dietTags: ["Organic", "Free Range"],
    description: "Fresh organic free range eggs"
  },
  {
    id: "2",
    name: "Sainsbury's Plant Pioneers Oat Milk, 1L",
    image: oatMilkImage,
    size: "1L",
    price: "£1.80",
    dietTags: ["Vegan", "Plant-Based"],
    description: "Creamy oat milk alternative"
  },
  {
    id: "3",
    name: "Sainsbury's Wholemeal Bread, 800g",
    image: breadImage,
    size: "800g",
    price: "£1.15",
    dietTags: ["Wholemeal"],
    description: "Freshly baked wholemeal bread"
  },
  {
    id: "4",
    name: "Sainsbury's British Beef Mince, 500g",
    image: "/api/placeholder/400/400",
    size: "500g (5% fat)",
    price: "£4.00",
    nectarPrice: "£4.25",
    dietTags: ["British", "High Protein"],
    description: "Premium British beef mince"
  },
  {
    id: "5",
    name: "Sainsbury's Organic Bananas, 1kg",
    image: bananasImage,
    size: "Approx 6-8 bananas",
    price: "£1.50",
    dietTags: ["Organic", "Vegan"],
    description: "Fresh organic bananas"
  },
  {
    id: "6",
    name: "Sainsbury's Greek Style Natural Yogurt, 500g",
    image: yogurtImage,
    size: "500g",
    price: "£2.00",
    dietTags: ["Vegetarian", "High Protein"],
    description: "Thick and creamy Greek style yogurt"
  },
  {
    id: "7",
    name: "Sainsbury's Gluten Free White Bread, 400g",
    image: glutenFreeBreadImage,
    size: "400g",
    price: "£2.50",
    dietTags: ["Gluten Free", "Vegetarian"],
    description: "Soft gluten free white bread"
  },
  {
    id: "8",
    name: "Sainsbury's Organic Chicken Breast, 300g",
    image: chickenImage,
    size: "300g (2 fillets)",
    price: "£4.50",
    nectarPrice: "£4.75",
    dietTags: ["Organic", "High Protein"],
    description: "Premium organic chicken breast"
  },
  {
    id: "9",
    name: "Sainsbury's Low Fat Natural Yogurt, 1kg",
    image: yogurtImage,
    size: "1kg",
    price: "£2.25",
    dietTags: ["Low Fat", "Vegetarian"],
    description: "Smooth low fat natural yogurt"
  }
];

interface ProductGridProps {
  searchQuery?: string;
}

export function ProductGrid({ searchQuery }: ProductGridProps) {
  // In a real app, this would filter products based on search and selected filters
  const filteredProducts = searchQuery 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.dietTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : products;

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Products {searchQuery && `for "${searchQuery}"`}
        </h2>
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        role="grid"
        aria-label="Product grid"
      >
        {filteredProducts.map((product) => (
          <div key={product.id} role="gridcell">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            No products found for "{searchQuery}"
          </p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or browse our categories
          </p>
        </div>
      )}
    </div>
  );
}