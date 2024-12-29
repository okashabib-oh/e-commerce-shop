import styled from "styled-components"

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}
const Container = styled.div`
    height: 25px;
    background-color: #11181C;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
export default Announcement