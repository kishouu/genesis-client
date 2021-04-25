import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './dataHandling/StateProvider';

let logo = "https://static.wixstatic.com/media/0c03a5_286abf9ad3b94b49aea354128cb489e7~mv2.png/v1/fit/w_924,h_520/0c03a5_286abf9ad3b94b49aea354128cb489e7~mv2.png"

function Header() {

    const [{ cart }] = useStateValue()

    return (
        <HeaderContainer>

            <Link to="/">
                <HeaderLogo src={logo} />
            </Link>

            <HeaderNav>

                <Link to="/">
                    Home
                </Link>

                <Link to="/cart">
                    <CartBTN>
                    Cart <ShoppingCartIcon /> ({cart.length})
                    </CartBTN>
                </Link>

                <Link to="/about">
                    About
                </Link>

                |

                <Link to="/login">
                    Login
                </Link>
                
            </HeaderNav>
                

        </HeaderContainer>
            

    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    margin: 2.5rem;
    justify-content: space-between;
    align-items: center;
    color: #262626
`

const HeaderLogo = styled.img`
    height: 3rem
`

const HeaderNav = styled.div`
    display: flex;
    justifly-content: space-between;
    align-items: center;
    padding: 8px;
    a{
        text-decoration: none;
        padding: 10px;
        color: #262626
    }
`
const CartBTN = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

//const HeaderNavHome = styled.div``
//const HeaderNavCart = styled.div``
//const HeaderNavLogin = styled.div``
//const HeaderNavSignup = styled.div``

//<HeaderNavHome>Home</HeaderNavHome>
//<HeaderNavCart>Cart</HeaderNavCart>
//<HeaderNavSignup>SignUp</HeaderNavSignup>
//<HeaderNavLogin>Login </HeaderNavLogin>
