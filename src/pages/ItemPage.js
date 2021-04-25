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
                <RequirementsContainer>
                    <div>
                        <h3>Minimum:</h3> <br />
                        <b>OS:</b> {item.requirements.minimum.OS} <br/>
                        <b>Processor:</b> {item.requirements.minimum.Processor} <br/>
                        <b>Memory:</b> {item.requirements.minimum.Memory} <br/>
                        <b>Graphics:</b> {item.requirements.minimum.Graphics} <br/>
                        <b>DirectX:</b> {item.requirements.minimum.DirectX} <br/>
                        <b>Network:</b> {item.requirements.minimum.Network} <br/>
                        <b>Storage:</b> {item.requirements.minimum.Storage} <br/>
                        <b>AdditionalNotes:</b> {item.requirements.minimum.AdditionalNotes} <br/>
                    </div>
                    <div>
                        <h3>Recommended:</h3> <br />
                        <b>OS:</b> {item.requirements.recommended.OS} <br/>
                        <b>Processor:</b> {item.requirements.recommended.Processor} <br/>
                        <b>Memory:</b> {item.requirements.recommended.Memory} <br/>
                        <b>Graphics:</b> {item.requirements.recommended.Graphics} <br/>
                        <b>DirectX:</b> {item.requirements.recommended.DirectX} <br/>
                        <b>Network:</b> {item.requirements.recommended.Network} <br/>
                        <b>Storage:</b> {item.requirements.recommended.Storage} <br/>
                        <b>AdditionalNotes:</b> {item.requirements.recommended.AdditionalNotes} <br/>
                    </div>
                </RequirementsContainer>

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
    border-radius: 10px
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
const RequirementsContainer = styled.div`
    display:flex;
    div {
        width: 32rem;
        margin-right: 3rem;
    }
`


const ItemRequirements = styled.div`
    
    margin: 3rem 0px 10rem 9rem;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
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