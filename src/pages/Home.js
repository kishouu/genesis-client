import  Slider  from 'infinite-react-carousel'
import React, {useState} from 'react'
import styled from 'styled-components'
import { itemData } from '../dataHandling/HardCodedData.js'
import CarouselItems from '../items/CarouselItems.js'
import ItemSmall from '../items/ItemSmall.js'

function Home() {

    const [smallItems] = useState(itemData)

    return (
        <HomeContainer>

                <h2>Popular</h2>
                <SmallItemsContainer>
                    {smallItems.map((itm) => (
                        <ItemSmall name={itm.name} id={itm.id} image={itm.img} price={itm.price} />
                    ))}
                </SmallItemsContainer>

                <h2>Party Games</h2>
                <CarouselCont>
                    <Slider dots style={{height: '35rem'}}>
                        {smallItems.map((itm) => (
                            <CarouselItems name={itm.name} id={itm.id} img={itm.img} price={itm.price} />
                        ))}
                    </Slider>
                </CarouselCont>

                <h2>Recommend</h2>
                <SmallItemsContainer>
                    {smallItems.map((itm) => (
                        <ItemSmall name={itm.name} id={itm.id} image={itm.img} price={itm.price} />
                    ))}
                </SmallItemsContainer>

        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    h2 {
        margin: 4rem 0rem 0rem 5rem; 
    }
`

const SmallItemsContainer = styled.div`
    display: flex;
`
const CarouselCont = styled.div`
    margin-top: 2rem

`
