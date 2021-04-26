import React  from 'react'
import styled from 'styled-components'


function CarouselItems(props) {
    
    // const img_style = {
    //     background: `url(${props.image}) bottom center no-repeat`,
    //     backgroundSize: 'cover'
    //     }
    

    return (
        <CarouselContainer>
                
            <ImgContainer>
                <a href={`/prod/${props.name}?id=${props.id}`} >
                    <ItemIMG src={props.img} / >
                </a>
            </ImgContainer>
        </CarouselContainer>

    )
}

export default CarouselItems

const CarouselContainer =styled.div`
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
` 

const ImgContainer =styled.div`
    height: 30rem;
    display: flex;
    justify-content: center;
    padding: 10px;
    
` 
const ItemIMG =styled.img`
    height: 35rem;
    width: 60rem;
    object-fit: cover;
    object-position: 50% 100%;
` 
