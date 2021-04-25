import React from 'react'
import styled from 'styled-components'

let img_pad = 'https://static.wixstatic.com/media/719a68_3675ec27049442eeb2d3a81e8fda4ee1~mv2.jpg'
let img_mng = 'https://static.wixstatic.com/media/12316e44d26649c69a935420b4dbb784.jpg/v1/fit/w_924,h_520/12316e44d26649c69a935420b4dbb784.jpg'

function About() {

    
    return (
        <AbouPage>
            <AboutTOP>
                <AboutPadIMG />
                <div>
                    <p>
                    As the one leading software store in the world genesis can provide you a good service for free you can access all games with our Genesis premium you can have a discount for your first avail. We believe that all customer deserve a good service  try it now!
                    <h2>-Genesis</h2>
                    </p>
                </div>
            </AboutTOP>
            <AboutBOT>
                <div>
                    <p>
                    Genesis is composed of five young aspiring Entrepreneurs, as well as IT professionals. It is created mainly to give consumers online a hassle-free environment in terms of shopping Video and LAN Games.
                    </p>
                </div>
                <AboutMngIMG />
            </AboutBOT>
        </AbouPage>
    )
}

export default About
const AbouPage = styled.div`
    margin-bottom: 10rem;
`
const AboutPadIMG = styled.div`
    background: url(${img_pad}) center no-repeat;
    backgroundSize: cover;
    width: 50rem;
    height: 30rem;

`

const AboutTOP = styled.div`
    display: flex;
    margin-bottom: 3rem;
    p {
        width: 30rem;
        font-size: 20px;
        padding: 7rem;
        padding-bottom: 1rem
    }
    h2 {
        padding-left: 20rem;
        padding-top: 20px
        
    }
`
const AboutBOT = styled.div`
    display: flex;
    p {
        width: 30rem;
        font-size: 20px;
        padding: 7rem;
    }

`
const AboutMngIMG = styled.div`
    background: url(${img_mng}) center no-repeat;
    backgroundSize: cover;
    width: 50rem;
    height: 30rem;

`