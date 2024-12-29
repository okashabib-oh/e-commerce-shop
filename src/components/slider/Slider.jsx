import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnMJ1e0JH7cLLXEtvwATrbp82JkIig0piAOkIrrgnko=" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, necessitatibus.
                        </Desc>
                        <Button>Shop Now!</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Wrapper slideIndex={slideIndex}>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnMJ1e0JH7cLLXEtvwATrbp82JkIig0piAOkIrrgnko=" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Winter Sale</Title>
                        <Desc>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, necessitatibus.
                        </Desc>
                        <Button>Shop Now!</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Wrapper slideIndex={slideIndex}>
                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnMJ1e0JH7cLLXEtvwATrbp82JkIig0piAOkIrrgnko=" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Autumn Sale</Title>
                        <Desc>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, necessitatibus.
                        </Desc>
                        <Button>Shop Now!</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
export default Slider