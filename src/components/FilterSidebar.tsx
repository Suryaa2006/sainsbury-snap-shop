import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  "Fresh Food",
  "Bakery",
  "Frozen",
  "Dairy & Eggs", 
  "Meat & Fish",
  "Drinks",
  "Health & Beauty",
  "Household",
];

const dietOptions = [
  "Vegetarian",
  "Vegan", 
  "Gluten Free",
  "Organic",
  "Low Fat",
  "High Protein",
];

const priceRanges = [
  "Under £1",
  "£1 - £3",
  "£3 - £5", 
  "£5 - £10",
  "Over £10",
];

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onItemChange: (item: string, checked: boolean) => void;
  expanded: boolean;
  onToggleExpanded: () => void;
}

function FilterSection({ title, items, selectedItems, onItemChange, expanded, onToggleExpanded }: FilterSectionProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleExpanded}
            aria-expanded={expanded}
            aria-label={`${expanded ? 'Collapse' : 'Expand'} ${title} filters`}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      {expanded && (
        <CardContent className="pt-0">
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox
                  id={`${title}-${item}`}
                  checked={selectedItems.includes(item)}
                  onCheckedChange={(checked) => onItemChange(item, !!checked)}
                />
                <label
                  htmlFor={`${title}-${item}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export function FilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    diet: true,
    price: true,
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev => 
      checked ? [...prev, category] : prev.filter(c => c !== category)
    );
  };

  const handleDietChange = (diet: string, checked: boolean) => {
    setSelectedDiets(prev => 
      checked ? [...prev, diet] : prev.filter(d => d !== diet)
    );
  };

  const handlePriceChange = (price: string, checked: boolean) => {
    setSelectedPrices(prev => 
      checked ? [...prev, price] : prev.filter(p => p !== price)
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedDiets([]);
    setSelectedPrices([]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedDiets.length > 0 || selectedPrices.length > 0;

  return (
    <aside className="w-80 space-y-4" role="complementary" aria-label="Product filters">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        )}
      </div>
      
      <Separator />

      <div className="space-y-4">
        <FilterSection
          title="Category"
          items={categories}
          selectedItems={selectedCategories}
          onItemChange={handleCategoryChange}
          expanded={expandedSections.categories}
          onToggleExpanded={() => setExpandedSections(prev => ({ ...prev, categories: !prev.categories }))}
        />

        <FilterSection
          title="Diet"
          items={dietOptions}
          selectedItems={selectedDiets}
          onItemChange={handleDietChange}
          expanded={expandedSections.diet}
          onToggleExpanded={() => setExpandedSections(prev => ({ ...prev, diet: !prev.diet }))}
        />

        <FilterSection
          title="Price Range"
          items={priceRanges}
          selectedItems={selectedPrices}
          onItemChange={handlePriceChange}
          expanded={expandedSections.price}
          onToggleExpanded={() => setExpandedSections(prev => ({ ...prev, price: !prev.price }))}
        />
      </div>
    </aside>
  );
}