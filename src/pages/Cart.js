import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../dataHandling/StateProvider.js';
import Subtotal from '../items/Subtotal.js';
import CartItems from '../items/CartItems.js';



// ASYNC FUNCTION (DELETING)
// ACTUALLY GET THE DATA FROM THE ITEMS

function Cart() {

    const [ { cart } ] = useStateValue()
            
    const renderCartCheckOut = () => {
    
        return(
            <CartCheckOut>

                <CheckOutTotal>
                    <Subtotal />
                </CheckOutTotal>

                <CheckOutBTNs>

                    <CheckOutSelf>
                        Buy for me
                    </CheckOutSelf>

                    <CheckOutGift>
                        Buy as a gift
                    </CheckOutGift>

                </CheckOutBTNs>

            </CartCheckOut>
    )}

    return (
        <CartContainer>
            <CartTittle>
                CART
            </CartTittle>

            {cart.map((itm) => (
                <CartItems name={itm.name} img={itm.image} price={itm.price} />

            ))}


            {renderCartCheckOut()}
            

        </CartContainer>
    )
}

export default Cart

const CartContainer = styled.div`
`

const CartTittle = styled.h1`
    display: flex;
    justify-content: center;
`

const CartCheckOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20rem;
`
const CheckOutTotal = styled.div``

const CheckOutBTNs = styled.div`
    button {
        border: none;
        color: white;
        background-color: #262626;
        padding: 10px;
        margin: 9px 0px 0px 11px;
        border-radius: 7px;
        font-size: 15px;
        cursor: pointer;
    }
`

const CheckOutSelf = styled.button``
const CheckOutGift = styled.button``