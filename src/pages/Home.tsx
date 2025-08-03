import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome to Themed App</h1>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">This is a dummy paragraph with content.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition duration-300">
          Click Me
        </button>
      </div>

      {/* API Section */}
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="h-[150px] flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-[100px] w-[100px] object-contain"
              />
            </div>

            {/* Info */}
            <h3 className="text-sm font-semibold mb-1 line-clamp-2 h-[2.5rem]">{product.title}</h3>
            <p className="text-lg font-bold text-green-600 mb-1">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐ {product.rating?.rate || 4.5}</span>
              <span className="ml-2 text-gray-500 text-xs">({product.rating?.count || 120} reviews)</span>
            </div>

            {/* CTA */}
            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
