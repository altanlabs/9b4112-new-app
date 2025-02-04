export interface Product {
  id: string
  fields: {
    title: string
    description: string
    price: number
    condition: "New" | "Used"
    category: string
    images: Array<{ url: string }>
    status: "Available" | "Sold" | "Reserved"
    created_at: string
    updated_at: string
    seller_id: string
  }
}

export interface User {
  id: string
  fields: {
    name: string
    email: string
    location: string
    avatar_url: string
    rating: number
    bio: string
  }
}

export interface Category {
  id: string
  fields: {
    category_name: string
    parent_category: string | null
  }
}

export interface Transaction {
  id: string
  fields: {
    status: "Pending" | "Completed" | "Cancelled"
    price: number
    fees: number
    total: number
    created_at: string
    completed_at: string | null
    buyer_id: string
    seller_id: string
  }
}