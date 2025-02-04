import { useDatabase } from "@altanlabs/database"
import { ProductCard } from "./product-card"
import { Skeleton } from "@/components/ui/skeleton"
import type { Product } from "@/types/database"

export function FeaturedProducts() {
  const { records, isLoading } = useDatabase<Product>("Products", {
    limit: 6,
    sort: [{ field: "created_at", direction: "desc" }],
    filters: [{ field: "status", operator: "eq", value: "Available" }],
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {records.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.fields.title}
          price={product.fields.price}
          condition={product.fields.condition}
          imageUrl={product.fields.images?.[0]?.url || "/placeholder-golf.jpg"}
          category={product.fields.category}
          location="Location" // This will be updated when we integrate with user profiles
        />
      ))}
    </div>
  )
}