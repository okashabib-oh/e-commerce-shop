import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input placeholder='Email' />
                    <Input placeholder='Password' type='password' />
                    <Button>Login</Button>

                    <Link>Do not you remember the password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/5585845/pexels-photo-5585845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center;
    /* background-size: cover; */
    display: flex;
    justify-content: center;
    align-items: center;
`


const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #101720;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: lightgray;
        color: #101720;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
export default Login