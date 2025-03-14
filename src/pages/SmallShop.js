import React, { useEffect, useState } from "react"
import { supabase } from "../supabaseCLient";
import Header from "../components/Header"
import "./SmallShop.css"

export default function SmallShop() {
const [product, setProduct] = useState([]);


useEffect(() => {
    const fetchProducts = async () => {
        const {data, error} = await supabase
        .from('products').select();
        if (data){
            setProduct(data)
        } else {
            console.log(error)
        }
    }
    fetchProducts()
}, [])

    return(
        <>
        <Header />
        <div className="card-container">
            <div className="card-wrapper">
                {product.map((product) =>(
                    <div className="card">
                    <p className="card-title">{product.name}</p>
                        <div className="card-divider"></div>
                    <img src={product.image_url} alt="foto do bolo" className="product-photo"/>
                   <div className="description">
                    <p style={{color: "rgba(0, 0, 0, 0.8)"}}>{product.description}</p>
                   </div>
                   <div className="price">
                    <p>R$ {product.price}</p>
                    <button className="add-bt">Adicionar a sacola 😋</button>
                   </div>
                    </div>
                ))}

            </div>
        </div>
        </>
    )
}