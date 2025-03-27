function Header() {
    return (
        <header className="bg-green-600 text-white p-4 shadow-md fixed w-full top-0 left-0">
            <div className="container mx-auto flex justify-between items-center">
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
                <nav className="hidden md:flex gap-6">
                    <a href="#home" className="hover:underline">
                    Home
                    </a>
                    <a href="#products" className="hover:underline">
                    Products
                    </a>
                    <a href="#benefits" className="hover:underline">
                    Benefits
                    </a>
                    <a href="#testimonials" className="hover:underline">
                    Testimonials
                    </a>
                    <a href="#contact" className="hover:underline">
                    Contact
                    </a>
                </nav>
                <button className="md:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
      </header>
    )
}

export default Header