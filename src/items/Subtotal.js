import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../dataHandling/reducer'
import { useStateValue } from '../dataHandling/StateProvider'

function Subtotal() {

    const [ {cart} ] = useStateValue()

    return (
        <div>
            <CurrencyFormat
                renderText={ (value) =>(
                    <p>
                        Total ({cart.length}): <b>{value}</b>
                    </p>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'PHP'}
            />
        </div>
    )
}

export default Subtotal
