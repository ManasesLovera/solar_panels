import { useState } from "react"

function Header() {    
    // Add state for mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    // Toggle mobile menu function
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <header className="bg-green-600 text-white p-4 shadow-md fixed w-full top-0 left-0 z-40">
            <div className="container mx-auto flex justify-between items-center relative">
                <div className="flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                    </svg>
                    <span className="text-2xl font-bold">Green Energy</span>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#benefits" className="hover:underline">Benefits</a>
                    <a href="#testimonials" className="hover:underline">Testimonials</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
                
                {/* Mobile Menu Toggle Button */}
                <button 
                    className="md:hidden" 
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    )}
                </button>
                
                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div 
                        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(2px)'
                        }}
                        onClick={toggleMobileMenu}
                    ></div>
                )}

                {/* Mobile Menu */}
                <div
                    className={`
                        md:hidden 
                        fixed 
                        top-0 
                        right-0 
                        h-full 
                        w-64 
                        bg-green-700 
                        z-50 
                        transform 
                        transition-transform 
                        duration-300 
                        ease-in-out 
                        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <div className="flex justify-between items-center p-4 border-b border-green-600">
                        <span className="text-xl font-bold">Menu</span>
                        <button 
                            onClick={toggleMobileMenu} 
                            className="text-white"
                            aria-label="Close menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col p-4">
                        <a 
                            href="#home" 
                            className="text-white py-2 hover:bg-green-600 px-4 rounded" 
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </a>
                        <a
                            href="#benefits"
                            className="text-white py-2 hover:bg-green-600 px-4 rounded"
                            onClick={toggleMobileMenu}
                        >
                            Benefits
                        </a>
                        <a
                            href="#testimonials"
                            className="text-white py-2 hover:bg-green-600 px-4 rounded"
                            onClick={toggleMobileMenu}
                        >
                            Testimonials
                        </a>
                        <a 
                            href="#contact" 
                            className="text-white py-2 hover:bg-green-600 px-4 rounded" 
                            onClick={toggleMobileMenu}
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header