import { motion } from "framer-motion"
import { Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/blocks/product-card"
import { SearchBar } from "@/components/blocks/search-bar"
import { CategoryFilter } from "@/components/blocks/category-filter"

// Temporary mock data
const mockProducts = [
  {
    id: "1",
    title: "TaylorMade SIM2 Driver",
    price: 399.99,
    condition: "Like New",
    imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3",
    category: "Golf Clubs",
    location: "Miami, FL"
  },
  {
    id: "2",
    title: "Titleist Pro V1 Golf Balls (12-Pack)",
    price: 49.99,
    condition: "New",
    imageUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3",
    category: "Golf Balls",
    location: "Austin, TX"
  },
  {
    id: "3",
    title: "Callaway RAZR X Irons Set",
    price: 599.99,
    condition: "Good",
    imageUrl: "https://images.unsplash.com/photo-1632332274165-839049fe7619?ixlib=rb-4.0.3",
    category: "Golf Clubs",
    location: "Phoenix, AZ"
  },
]

export default function IndexPage() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query)
  }

  const handleCategoryChange = (category: string) => {
    console.log("Category changed to:", category)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Golf Equipment Marketplace
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Buy and sell quality golf equipment from fellow enthusiasts
        </p>
      </motion.section>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <SearchBar onSearch={handleSearch} />
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <CategoryFilter onCategoryChange={handleCategoryChange} />
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            List Item
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </motion.div>
    </div>
  )
}