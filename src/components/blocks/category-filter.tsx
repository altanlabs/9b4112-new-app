import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
  "All Categories",
  "Golf Clubs",
  "Golf Bags",
  "Golf Balls",
  "Golf Apparel",
  "Golf Accessories",
  "Training Aids",
]

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  return (
    <Select onValueChange={onCategoryChange} defaultValue="All Categories">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}