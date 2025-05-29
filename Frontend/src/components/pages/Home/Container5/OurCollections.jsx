import test from '../../../../../public/cities/test.gif'

const Collections = () => {
  const collectionItems = [
    { name: 'Hair Toppers', image: test },
    { name: 'Wigs', image: test },
    { name: 'Hair Extensions', image: test },
    { name: 'Standouts', image: test },
    { name: 'Hair Toppers', image: test },
    { name: 'Wigs', image: test },
    { name: 'Hair Extensions', image: test },
    { name: 'Standouts', image: test },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#d39a74] mb-12">
          Our Collections
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {collectionItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-full bg-gray-100 mb-4 overflow-hidden">
                {/* This is where your GIF will go. 
                  Using an <img> tag is standard for displaying GIFs.
                  I'm using a placeholder aspect ratio box to mimic the image.
                */}
                <img 
                  // src={item.image} // Uncomment this and use your GIF path
                  src={item.image} // Placeholder image
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-gray-700 mb-3">{item.name}</h3>
              <button className="text-sm text-gray-800 border border-[#d39a74] py-2 px-8 hover:bg-[#d39a74] hover:text-white transition-colors duration-300">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;