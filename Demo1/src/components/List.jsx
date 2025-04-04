import React from 'react'

export default function List() {
  const items = ["Coffee", "Tea", "Beer"];
  return (
      <div className="max-w-xs mx-auto mt-10">
      <ul className="border border-white">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-teal-700 text-white p-4 text-lg border-b border-white hover:bg-teal-600 transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
