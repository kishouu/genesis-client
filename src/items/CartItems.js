import React from 'react'
import styled from 'styled-components'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


function CartItems( props ) {

    const container_img_style = { 
        background: `url(${props.img}) bottom center no-repeat`, 
        backgroundSize: 'cover' 
    }

    return (
        <CartItemContainer>
            <CartItem>

                <CartItemDescription>

                    <CartItemImage style={container_img_style} />

                    <CartItemText>

                        <CartItemName>
                            {props.name}
                        </CartItemName>

                        <CartItemPrice>
                            PHP {props.price}
                        </CartItemPrice>

                    </CartItemText>

                </CartItemDescription>

                <CheckBoxIconContainer>
                    <RadioButtonUncheckedIcon />
                </CheckBoxIconContainer>
            </CartItem>

        </CartItemContainer>

    )
}

export default CartItems

const CartItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2.5rem
`

const CartItem = styled.div`
    display: flex;
    height: 7rem;
    justify-content: space-between;
    width: 50rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    border-radius: 1rem;
`

const CartItemImage = styled.div`
    border-radius: 1rem 0rem 1rem 1rem;
    background-size: cover;
    height: 100%;
    width: 13rem;
    background-color: aqua;
    filter: drop-shadow(0px 10px 15px #3333);
    
`
const CartItemDescription = styled.div`
    display: flex
`

const CartItemText = styled.div``
const CartItemName = styled.h3`
    padding: 9px 0px 0px 2rem;
`
const CartItemPrice = styled.h4`
    padding: 5px 0px  0px 2rem;
    color: #85B95D;
`


const CheckBoxIconContainer = styled.div`
    display:flex;
    align-items: center;
    padding-right: 2rem;
`