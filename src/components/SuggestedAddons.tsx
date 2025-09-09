import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const suggestedAddons = [
  {
    id: "addon-1",
    name: "Garlic Bread",
    price: "£1.25",
    image: "/api/placeholder/80/80"
  },
  {
    id: "addon-2", 
    name: "Side Salad",
    price: "£2.50",
    image: "/api/placeholder/80/80"
  },
  {
    id: "addon-3",
    name: "Parmesan Cheese",
    price: "£3.00",
    image: "/api/placeholder/80/80"
  },
  {
    id: "addon-4",
    name: "Olive Oil",
    price: "£2.75",
    image: "/api/placeholder/80/80"
  }
];

export function SuggestedAddons() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-lg">Complete the meal</CardTitle>
        <p className="text-sm text-muted-foreground">
          Customers who bought these items also bought
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {suggestedAddons.map((addon) => (
            <div 
              key={addon.id}
              className="flex flex-col items-center text-center space-y-2 p-3 rounded-lg border border-border hover:shadow-card transition-shadow"
            >
              <img
                src={addon.image}
                alt={addon.name}
                className="w-16 h-16 object-cover rounded-md"
                loading="lazy"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-medium line-clamp-2">
                  {addon.name}
                </h4>
                <p className="text-sm font-semibold text-grocery-orange">
                  {addon.price}
                </p>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                className="w-full"
                aria-label={`Add ${addon.name} to cart`}
              >
                <Plus className="h-3 w-3 mr-1" />
                Add
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}