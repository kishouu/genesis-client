import styled from 'styled-components'
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../dataHandling/StateProvider';



function ItemSmall(props) {

    const container_img_style = {
        background: `url(${props.image}) bottom center no-repeat`,
        backgroundSize: 'cover'
        }

    const [ {}, dispatch ] = useStateValue()

    // console.log("this is the cart >>>>", cart)

    const addCart = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_TO_CART',
            item: {
                name: props.name,
                id: props.id,
                image: props.image,
                price: props.price
            }
        })
        console.log(` ${props.name} added to cart`);
        }
    
    // const pushItemData = (e) => {
    //     e.preventDefault();
    //     dispatch({
    //         type: 'GO_ITEM_PAGE',
    //         item: {
    //             name: props.name,
    //             id: props.id,
    //             image: props.image,
    //             price: props.price
    //         }
    //     })
    //     console.log(` ${props.name} added to page`);
    //     console.log("this is the item >>>>", itemDetails)
    // }

    return(
        <ItemSmallContainer style={container_img_style}  >


                <a href={`/prod/${props.name}?id=${props.id}`} >
                    <ItemSpace />
                </a>




                <ItemDetails>
                    <ItemSmallPrice>
                        PHP {props.price}
                    </ItemSmallPrice>
                    <ItemSmallAddCartBTN onClick={addCart} > 
                        <b>Add</b> <ShoppingCartIcon />
                    </ItemSmallAddCartBTN>
                </ItemDetails>
            </ItemSmallContainer>
    )
}

export default ItemSmall

const ItemSpace = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    border: none;

`

const ItemSmallContainer = styled.div`
    margin: 2rem 0rem 2rem 2rem;
    width: 15rem;
    height: 18rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding 2rem;
    border-radius: 2rem;
    background-size: cover;
    flex-direction: column;
    filter: drop-shadow(0px 10px 15px #3333);

    a {
        width: 100%;
        height: 100%;
    }
   
`

const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const ItemSmallAddCartBTN = styled.button`
    color: #B6F981;
    background: #69914A;
    border:none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 7px;
    border-radius: 7px;
    cursor: pointer;
    
`

const ItemSmallPrice = styled.h3`
    color: #ffffff;
    background: rgba(38, 38, 38, 0.5);
    padding: 4px;
    margin-right: 1rem;
    border-radius: 5px;
`