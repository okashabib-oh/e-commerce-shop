import React from 'react'
import styled from 'styled-components'
import { products } from '../../data'
import Product from './Product'

const Products = () => {
    return (
        <Container>
            {products.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`
export default Products