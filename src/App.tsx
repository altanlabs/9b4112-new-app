import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/theme/theme-provider"
import { DatabaseProvider } from "@altanlabs/database"
import Layout from "./layout"
import { Toaster } from "@/components/ui/sonner"
import { Home, ShoppingBag, MessageCircle, Heart, User } from "lucide-react"

const sidebarConfig = {
  items: [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: "My Listings",
      href: "/listings",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: <MessageCircle className="h-4 w-4" />,
    },
    {
      label: "Favorites",
      href: "/favorites",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="h-4 w-4" />,
    },
  ],
  companyName: "Golf Exchange",
  defaultOpen: true,
}

const headerConfig = {
  title: "Golf Exchange",
  navigation: [
    { label: "Browse", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  showNotifications: true,
  showUserMenu: true,
  showThemeToggle: true,
}

const footerConfig = {
  text: "© 2024 Golf Exchange. All rights reserved.",
  links: [
    { label: "About Us", href: "/about" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Support", href: "/support" },
  ],
}

const databaseConfig = {
  API_BASE_URL: "https://api.altan.ai/galaxia/hook/VnqJkO",
  SAMPLE_TABLES: {
    Products: "9b489e31-c7db-4515-924f-3c657d9d8eeb",
    Users: "de4322c6-c229-4617-aef1-751086d85da2",
    Categories: "c13a531a-56f8-4964-9e72-2893a6fae08e",
    Transactions: "b6aa0add-3214-41c1-b1b0-c30553153d77",
    Reviews: "3ee816b2-deee-4f5f-b805-d6b6475a8469",
    Messages: "05342bb5-e386-4294-acef-db7400119db1"
  }
}

function App() {
  return (
    <DatabaseProvider config={databaseConfig}>
      <ThemeProvider defaultTheme="light" storageKey="golf-exchange-theme">
        <Router>
          <Layout
            sidebarConfig={sidebarConfig}
            header={headerConfig}
            footer={footerConfig}
          />
          <Toaster />
        </Router>
      </ThemeProvider>
    </DatabaseProvider>
  )
}

export default App