import  styled  from 'styled-components';
import React from 'react'
import {itemData}  from '../dataHandling/HardCodedData'
import { useStateValue } from '../dataHandling/StateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const item = itemData[id - 1]

function ItemPage() {

    const [ {}, dispatch ] = useStateValue()

    const addCart = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_TO_CART',
            item: {
                name: item.name,
                id: item.id,
                image: item.image,
                price: item.price
            }
        })
        console.log(` ${item.name} added to cart`);
        }
    

    const img_style = {
        background: `url(${item.img}) center no-repeat`,
        backgroundSize: 'cover'
        }

    
    return (
        <ItemPageContainer>
            <ItemTOP>

            <ItemImage style={img_style} />

                <ItemINFO>
                    <ItemName>
                        {item.name}
                    </ItemName>

                    <ItemDescription>
                        {item.description}
                    </ItemDescription>

                    <ItemPrice>
                        <b>PHP {item.price}</b>
                    </ItemPrice>
                    <ItemAddCartBTN onClick={addCart} > 
                        <b>Add</b> <ShoppingCartIcon />
                    </ItemAddCartBTN>
                </ItemINFO>

            </ItemTOP>

            <ItemRequirements>
                <h2>System Requirements:</h2> <br/>
                <b>OS:</b> {item.requirements.OS} <br/>
                <b>Processor:</b> {item.requirements.Processor} <br/>
                <b>Memory:</b> {item.requirements.Memory} <br/>
                <b>Graphics:</b> {item.requirements.Graphics} <br/>
                <b>DirectX:</b> {item.requirements.DirectX} <br/>
                <b>Network:</b> {item.requirements.Network} <br/>
                <b>Storage:</b> {item.requirements.Storage} <br/>
                <b>AdditionalNotes:</b> {item.requirements.AdditionalNotes} <br/>

            </ItemRequirements>
        </ItemPageContainer>


)
}

export default ItemPage

const ItemPageContainer = styled.div`
`
const ItemTOP = styled.div`
    display: flex;
    font-size: 20px;
`
const ItemINFO = styled.div`
    padding: 1rem 0px 0px 2rem;
`
const ItemImage = styled.div`
    background-color: aqua;
    background-size: cover;
    width: 37rem;
    height: 20rem;
    margin: 0px 10px 0px 3rem;
    filter: drop-shadow(0px 10px 15px #3333);
    
`
const ItemName = styled.h1`

`

const ItemDescription = styled.div`
    width: 30rem;
    padding: 1rem 0px 1rem 0px
`
const ItemPrice = styled.div`
    color: #00000;
    padding: 4px;
    margin-right: 1rem;
    border-radius: 5px;
`
const ItemRequirements = styled.div`
    width: 25rem;
    margin: 3rem 0px 10rem 10rem;
    font-size: 20px;
    h2 {
        margin-left: -3rem
    }
`
const ItemAddCartBTN = styled.button`
    color: #B6F981;
    background: #69914A;
    border: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 7px;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 20px

`