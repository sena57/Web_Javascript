import React from 'react'

export default function Button({ name }) {
  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-10">
      {name}
    </button>
  );
}
