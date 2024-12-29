import { FavoriteBorderOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.images} />
            <Info>
                <Icon>
                    <ShoppingBagOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    transition: all 250ms;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
    
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    /* width: 100%; */
    height: 75%;
    z-index: 2;
    /* object-fit: cover; */
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px;
    transition: all 250ms;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
export default Product