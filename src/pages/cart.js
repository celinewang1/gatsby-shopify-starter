import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'

const CartPage = () => (
  <Container>
    <h1>Your Cart</h1>
    <Cart />
  </Container>
)

export default CartPage
