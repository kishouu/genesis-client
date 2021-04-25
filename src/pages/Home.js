import React, {useState} from 'react'
import styled from 'styled-components'
import { itemData } from '../dataHandling/HardCodedData.js'
import ItemSmall from '../items/ItemSmall.js'

function Home() {

    const [smallItems] = useState(itemData)
    // [
    //     {
    //         name: 'Dark Souls III',
    //         id: 1,
    //         img: 'https://www.wallpaperup.com/uploads/wallpapers/2015/09/14/802840/bdbe78433f9386224f1038647153d339.jpg',
    //         price: 2000
    //     },
    //     {
    //         name: 'Omori',
    //         id: 2,
    //         img: 'https://cdn.akamai.steamstatic.com/steam/apps/1150690/capsule_616x353.jpg?t=1618373247',
    //         price: 389
    //     }
    // ]




    return (
        <HomeContainer>


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

`
const SmallItemsContainer = styled.div`
    display: flex
`