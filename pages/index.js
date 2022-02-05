import React ,{useState , useEffect} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

 const [product ,setProduct] = useState([])
useEffect(()=>{
  fecthData()
},[])
  

const fecthData = async () => {
  const info  = await fetch('api/products')
  const data =  await info.json();
  setProduct(data)
  console.log(product)

  
}

  return (
    <div className={styles.container}>
     {product.map((item , i)=>{
       return (
         <>
          {i}
         </>
       )
     })}
    </div>
  )
}
