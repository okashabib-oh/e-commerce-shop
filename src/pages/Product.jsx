import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import Announcement from '../components/announcement/Announcement'
import Newsletter from '../components/newsletter/Newsletter'
import Footer from '../components/footer/Footer'
import { Add, Remove } from '@mui/icons-material'

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://plus.unsplash.com/premium_photo-1691367279313-71af7ba83f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jeans</Title>
                    <Desc> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate similique ipsa eius a? Quaerat omnis facilis hic modi itaque sed cum explicabo rem, numquam accusantium sapiente, quos, iste fugiat. </Desc>
                    <Price>$49</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 10px;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
     width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #101720;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid #101720;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.5s ease;

    &:hover{
        background-color: #101720;
        color: white;
    }
`
export default Product