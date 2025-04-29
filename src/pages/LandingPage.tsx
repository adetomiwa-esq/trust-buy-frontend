import { Link } from "react-router-dom"
import { Heart, Search, ShoppingBag, User } from "lucide-react"


function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              FASHION
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/women" className="text-sm font-medium hover:underline">
                WOMEN
              </Link>
              <Link to="/men" className="text-sm font-medium hover:underline">
                MEN
              </Link>
              <Link to="/accessories" className="text-sm font-medium hover:underline">
                ACCESSORIES
              </Link>
              <Link to="/sale" className="text-sm font-medium text-red-600 hover:underline">
                SALE
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input placeholder="Search for items and brands" className="pl-8" />
              </div>
              <button>
                <User className="h-5 w-5" />
              </button>
              <button>
                <Heart className="h-5 w-5" />
              </button>
              <button>
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-[10px] font-medium text-white flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
          <div className="md:hidden mt-2 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input placeholder="Search for items and brands" className="pl-8" />
          </div>
          <div className="md:hidden flex items-center justify-between mt-4 overflow-x-auto pb-2 space-x-4">
            <Link to="/women" className="text-xs whitespace-nowrap font-medium">
              WOMEN
            </Link>
            <Link to="/men" className="text-xs whitespace-nowrap font-medium">
              MEN
            </Link>
            <Link to="/accessories" className="text-xs whitespace-nowrap font-medium">
              ACCESSORIES
            </Link>
            <Link to="/sale" className="text-xs whitespace-nowrap font-medium text-red-600">
              SALE
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <div className="relative h-[500px] bg-gray-100 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">SUMMER SALE</h1>
            <p className="text-xl md:text-2xl mb-8">Up to 50% off thousands of styles</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-black hover:bg-gray-100">
                SHOP WOMEN
              </button>
              <button className="bg-white text-black hover:bg-gray-100">
                SHOP MEN
              </button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">TRENDING NOW</h2>
            {/* <FeaturedProducts /> */}
          </div>
        </div>

        {/* Category Grid */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">SHOP BY CATEGORY</h2>
            {/* <CategoryGrid /> */}
          </div>
        </div>

        {/* Promo Section */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">EXCLUSIVE OFFERS</h2>
            {/* <PromoSection /> */}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">HELP & INFORMATION</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="" className="text-gray-300 hover:text-white">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-300 hover:text-white">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-300 hover:text-white">
                    Delivery & Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">ABOUT FASHION</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-gray-300 hover:text-white">
                    Corporate Responsibility
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SHOPPING FROM</h3>
              <p className="text-gray-300">You're in United States</p>
              <button className="text-gray-300 p-0 h-auto">
                CHANGE
              </button>
            </div>
            <div>
              <h3 className="font-bold mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <Link to="" className="text-gray-300 hover:text-white">
                  Facebook
                </Link>
                <Link to="" className="text-gray-300 hover:text-white">
                  Instagram
                </Link>
                <Link to="" className="text-gray-300 hover:text-white">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 TRUST-BUY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage