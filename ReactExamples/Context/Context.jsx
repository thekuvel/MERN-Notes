import data from "./data.json"
import styles from "./Cart.module.css"
import { useContext, useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

const TotalPriceContext = createContext(null)

console.log(data.products[0].rating.count)


//Child Component 1
function CartCard() {

    console.log("Component 1")

    let {count, setCount, price, setPrice} = useContext(TotalPriceContext)

    console.log(count)

    function priceCalculator(e){
        
        setCount(e.target.value)
        setPrice(e.target.value * data.products[0].price)
    }

    function handelRemove () {
        console.log("Remove Button Clicked");
        setCount(0);
        setPrice(0);
    }

    return (
        <>
        <div className={styles.cart}>
            <div className={styles.productDescription}>
                <span className={styles.imageSpan}>
                    <img src={data.products[0].image} alt="image" />
                </span>
                <div>
                    <h3>{data.products[0].title}</h3>
                    <p>Category: {data.products[0].category}</p>
                    <p>Description: {data.products[0].description}</p>
                </div>
            </div>
            
            <div className={styles.price}>
                <label htmlFor="quantity">Quantity: 
                <input type="number" name="quantity" onChange={priceCalculator} value={count}/>
                </label>
                <h4>Price : {price}</h4>
                <span>
                    <button onClick={handelRemove}>Remove</button>   
                </span> 
            </div>
        </div>            
        </>
    )
}

//Child Component 2
function CheckOutSection() {
    console.log("Component 2")

    let {count, setCount, price, setPrice} = useContext(TotalPriceContext)

    return(
        <>

        <hr/>
        <div>
            <span className={styles.flexRowBox}>
                <p>Sub Total</p>
                <p>{price}</p>
            </span>
            <span className={styles.flexRowBox}>
                <p>Shipping</p>
                <p>Free</p>
            </span>
        </div>
        <hr/>
        <div  className={styles.flexRowBox}>
            <p>Total</p>
            <p>{price}</p>
        </div>
        <div>
            <p>Instock : {data.products[0].rating.count - count}</p>
        </div>

        </>
    )
}


// Parent Component
const Cart = () => {

    console.log("Parent Component")

    let [count, setCount] = useState(0);

    let [price,setPrice] = useState(0)

    return(
        <TotalPriceContext.Provider value={{count,setCount, price, setPrice}}>
            <div className={styles.container}>
    
                <CartCard/>
                <CheckOutSection/>
                
            </div>
        </TotalPriceContext.Provider>
        
    )
}

export default Cart
