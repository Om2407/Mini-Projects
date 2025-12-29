import React from 'react'

// Mock components for demonstration
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold" style={{ color: '#60a5fa' }}>
        Decode@Chn
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
        <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
)

const Navbar2 = () => (
  <nav className="fixed top-16 left-0 right-0 z-40 border-b border-white/5" style={{ backgroundColor: '#111111' }}>
    <div className="container mx-auto px-6 py-3 flex items-center justify-center space-x-6">
      <a href="/men" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Men</a>
      <a href="/women" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Women</a>
      <a href="/kids" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Kids</a>
      <a href="/courses" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Courses</a>
      <a href="/product" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Products</a>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="border-t border-white/10 mt-auto" style={{ backgroundColor: '#0a0a0a' }}>
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#60a5fa' }}>BRAND</h3>
          <p className="text-gray-400 text-sm">Your destination for premium products and courses.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/men" className="hover:text-blue-400 transition-colors">Men</a></li>
            <li><a href="/women" className="hover:text-blue-400 transition-colors">Women</a></li>
            <li><a href="/kids" className="hover:text-blue-400 transition-colors">Kids</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>F</a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>T</a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>I</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        © 2025 BRAND. All rights reserved.
      </div>
    </div>
  </footer>
)

// Mock pages with enhanced styling
const Home = () => (
  <div className="min-h-screen pt-32 pb-16 px-6">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6 animate-pulse opacity-25" style={{ color: '#60a5fa' }}>
          Welcome &#128536;
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover amazing products and courses tailored just for you
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="group rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: '#3b82f6' }}>
              {item}
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Feature {item}</h3>
            <p className="text-gray-400">Explore our amazing features and discover what makes us unique.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const About = () => (
  <div className="min-h-screen pt-32 pb-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-5xl font-bold mb-8" style={{ color: '#60a5fa' }}>About Us</h1>
      <div className="rounded-2xl p-10 border border-white/10" style={{ backgroundColor: '#1a1a1a' }}>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          We are passionate about delivering excellence in everything we do. Our mission is to provide top-quality products and educational content.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          With years of experience and a dedicated team, we strive to exceed expectations and create lasting value for our customers.
        </p>
      </div>
    </div>
  </div>
)

const Contact = () => (
  <div className="min-h-screen pt-32 pb-16 px-6">
    <div className="container mx-auto max-w-2xl">
      <h1 className="text-5xl font-bold mb-8" style={{ color: '#60a5fa' }}>Contact Us</h1>
      <div className="rounded-2xl p-10 border border-white/10" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
            <input type="text" className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
            <textarea className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors h-32" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></textarea>
          </div>
          <button className="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#3b82f6' }}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
)

const CategoryPage = ({ title }) => (
  <div className="min-h-screen pt-32 pb-16 px-6">
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mb-12" style={{ color: '#60a5fa' }}>{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="group rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="aspect-square flex items-center justify-center text-4xl font-bold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
              {item}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Product {item}</h3>
              <p className="text-sm text-gray-400">$99.99</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Course = () => (
  <div className="min-h-screen pt-32 pb-16 px-6">
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mb-12" style={{ color: '#60a5fa' }}>Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <a key={item} href={`/courses/${item}`} className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="aspect-video flex items-center justify-center text-5xl font-bold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
              {item}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Course {item}</h3>
              <p className="text-gray-400 mb-4">Learn advanced techniques and master new skills with our comprehensive course.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold" style={{ color: '#60a5fa' }}>$149</span>
                <span className="text-sm text-gray-500">12 hours</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
)

const CoursesDetail = () => (
  <div className="min-h-screen pt-32 pb-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="rounded-2xl overflow-hidden border border-white/10" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="aspect-video flex items-center justify-center text-6xl font-bold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
          1
        </div>
        <div className="p-10">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#60a5fa' }}>Course Details</h1>
          <p className="text-xl text-gray-300 mb-6">Master the fundamentals and advanced concepts in this comprehensive course.</p>
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-3xl font-bold" style={{ color: '#60a5fa' }}>$149</span>
            <span className="text-gray-400">12 hours of content</span>
            <span className="text-gray-400">Certificate included</span>
          </div>
          <button className="w-full py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#3b82f6' }}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>
)

const NotFound = () => (
  <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-9xl font-bold mb-4" style={{ color: '#60a5fa' }}>404</h1>
      <p className="text-2xl text-gray-400 mb-8">Page not found</p>
      <a href="/" className="inline-block px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#3b82f6' }}>
        Go Home
      </a>
    </div>
  </div>
)

const App = () => {
  const [currentPath, setCurrentPath] = React.useState('/')
  
  const navigate = (path) => {
    setCurrentPath(path)
    window.history.pushState({}, '', path)
  }

  React.useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault()
        navigate(e.target.pathname)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const renderPage = () => {
    if (currentPath === '/') return <Home />
    if (currentPath === '/about') return <About />
    if (currentPath === '/contact') return <Contact />
    if (currentPath === '/men') return <CategoryPage title="Men's Collection" />
    if (currentPath === '/women') return <CategoryPage title="Women's Collection" />
    if (currentPath === '/kids') return <CategoryPage title="Kids' Collection" />
    if (currentPath === '/product') return <CategoryPage title="All Products" />
    if (currentPath === '/courses') return <Course />
    if (currentPath.startsWith('/courses/')) return <CoursesDetail />
    return <NotFound />
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Navbar2 />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App