import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../category'
import Card from '../components/Card'
import { food_items } from '../food'
import { DataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { toast } from 'react-toastify'

const Home = () => {
    const { foodCategories, setfoodCategories, input, showCard, setshowCard } = useContext(DataContext);

    const [cart, setcart] = useState([])


    const addToCart = (food) => {
        let existItem = cart.find((item) => item.id == food.id)

        if (existItem) {
            let newCart = cart.map((item) => {
                return item.id == food.id ? { ...item, quantity: item.quantity + 1 } : item;
            })
            setcart(newCart)
        }
        else {
            setcart([...cart, food])
        }
        setshowCard(true);
    }

    const increaseQuantity = (id) => {
        let newCart = cart.map((item) => {
            return id == item.id ? { ...item, quantity: item.quantity + 1 } : item;
        })
        setcart(newCart)

    };

    const decreaseQuantity = (id) => {

        let newCart = cart.map((item) => {
            return id == item.id ? { ...item, quantity: item.quantity - 1 } : item;
        }).filter((item) => item.quantity > 0);


        setcart(newCart)
    };

    const deleteItem = (id) => {

        setcart(prevCart =>
            prevCart.filter(item => item.id !== id)
        );

    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const subtotal = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const deliveryFee = cart.length > 0 ? 20 : 0;


    // Tax
    const tax = subtotal * 0.05;


    // Final Total
    const total = subtotal + deliveryFee + tax;

    function filter(category) {
        if (category == "All") {
            setfoodCategories(food_items);
        }
        else {
            let newList = food_items.filter((item) => item.food_category == category)
            setfoodCategories(newList);
        }
    }
    return (
        <div className='w-full min-h-screen bg-slate-200'>
            <Nav totalQuantity={totalQuantity} />
            {!input ? <div className='flex flex-wrap justify-center items-center gap-6 text-gray-600 text-md font-bold '>
                {categories.map((item, index) => {
                    return (
                        <div
                            onClick={() => filter(item.name)}
                            key={index} className='w-30 hover:bg-green-200 cursor-pointer transition-all duration-200 h-30 shadow-xl bg-white rounded-md flex flex-col gap-4 p-3'>
                            {item.icon}
                            {item.name}
                        </div>
                    )
                })}
            </div> : null}

            {foodCategories.length == 0 &&
                <div className='w-full mt-20 font-extrabold text-green-500 text-7xl flex justify-center  '>
                    No Dish Found
                </div>}
            <div className='flex flex-wrap justify-center gap-5 items-center pt-8 pb-8'>
                {
                    foodCategories.map((item, index) => {
                        return <Card addToCart={addToCart} key={index} quantity={item.food_quantity} name={item.food_name} image={item.food_image} type={item.food_type} price={item.price} id={item.id} />
                    })
                }
            </div>

            <div className={`w-[40vw] overflow-auto p-6 h-screen transition-all duration-500 fixed top-0 right-0 bg-white shadow-xl ${showCard ? "translate-x-0" : "translate-x-full"}`}>
                <header className='w-full flex justify-between items-center'>
                    <span className='text-green-400 text-xl font-semibold'>Order item</span>
                    <RxCross2
                        onClick={() => setshowCard(false)}
                        className='text-green-400 text-2xl w-7 cursor-pointer hover:text-gray-500 h-7' />
                </header>
                {cart.length == 0 &&
                    <div
                        className='text-green-500 text-5xl font-bold w-full flex justify-center mt-25'
                    >Cart is Empty</div>}
                {
                    cart.map((item, index) => {
                        return <Card2 key={index} deleteItem={deleteItem} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} quantity={item.quantity} name={item.name} price={item.price} id={item.id} image={item.image} />
                    })
                }

                {cart.length > 0 && (

                    <div className="mt-8">
                        <hr />
                        {/* Subtotal */}

                        <div className="flex justify-between mt-3 mb-3">

                            <span>Subtotal</span>

                            <span className='text-green-500'>
                                Rs {subtotal.toFixed(0)}/-
                            </span>

                        </div>


                        {/* Delivery */}

                        <div className="flex justify-between mb-3">

                            <span>Delivery Fee</span>

                            <span className='text-green-500'>
                                Rs {deliveryFee}/-
                            </span>

                        </div>


                        {/* Tax */}

                        <div className="flex justify-between mb-4">

                            <span>Taxes</span>

                            <span className='text-green-500'>
                                Rs {tax.toFixed(0)}/-
                            </span>

                        </div>


                        <hr />


                        {/* Total */}

                        <div className="flex justify-between mt-5 text-xl font-semibold">

                            <span>
                                Total
                            </span>

                            <span className="text-green-500">
                                Rs {total.toFixed(0)}/-
                            </span>

                        </div>


                        {/* Place Order */}

                        <button 
                        onClick={()=>toast.success("Order succefully Placed...")}
                        className="w-full bg-green-500 text-white py-3 mt-6 rounded-md">

                            Place Order

                        </button>

                    </div>

                )}
            </div>
        </div>
    )
}

export default Home
