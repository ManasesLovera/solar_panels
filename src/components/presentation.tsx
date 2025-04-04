function Presentation() {
    return (
      <section id="home" className="bg-gradient-to-b from-green-50 to-white pb-10 pt-25">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Harness the Power of the Sun</h1>
              <p className="text-xl text-gray-600 mb-8">
                Green Energy provides high-quality solar panel solutions for homes at no cost. Save money and help
                the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                  See if you qualify!
                </a>
                <a href="#benefits" className="border border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Solar panels on a house roof"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Presentation