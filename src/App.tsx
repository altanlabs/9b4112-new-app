import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/theme/theme-provider"
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

function App() {
  return (
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
  )
}

export default App