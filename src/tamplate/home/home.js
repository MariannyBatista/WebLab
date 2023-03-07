import React from 'react'
import { useEffect, useState } from 'react'

export default function Home() {


const [result, setResult] = useState([]);


useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      setResult(result.products)
    })
}, [])

console.log(result)


  return (
    <div className='productsDiv'>
      {result.map((art, index) => {
            return (
              <div className='product'
              key={index}>
                    <img src={art.images[0]}/>
                    <p >{art.title}</p>
                    <p >{art.description}</p>
                    <p >${art.price}</p>
              </div>    
            );
          })}
    </div>
  )
}


