import { motion } from "framer-motion"
import { Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/blocks/search-bar"
import { CategoryFilter } from "@/components/blocks/category-filter"
import { FeaturedProducts } from "@/components/blocks/featured-products"

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

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  )
}