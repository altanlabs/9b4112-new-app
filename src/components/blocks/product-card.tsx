import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  price: number
  condition: string
  imageUrl: string
  category: string
  location: string
}

export function ProductCard({
  title,
  price,
  condition,
  imageUrl,
  category,
  location,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <Badge variant="secondary">{condition}</Badge>
        </div>
        <Badge variant="outline" className="mb-2">
          {category}
        </Badge>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">${price.toLocaleString()}</span>
        <Button variant="secondary" size="sm">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact Seller
        </Button>
      </CardFooter>
    </Card>
  )
}