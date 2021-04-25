import React from 'react'
import styled from 'styled-components'

function Login() {

    let line = {
        width: '80%', 
        height: '2px', 
        backgroundColor: '#262626',
        borderRadius: '2px',
        marginBottom: '9px'
    }

    return (
        <LoginContainer>
            <LoginForm>
                <FormContainer>
                    <FormEmail placeholder="Email or Username" />
                    <FormPass placeholder="Password" type="password" />
                    <FormBTN> <b>Login</b> </FormBTN>
                    <div style={line} />
                    <FormBTN> <b>Sign In</b> </FormBTN>
                    <p>forgot password?</p>
                </FormContainer>
            </LoginForm>
            
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-bottom: 10rem

`
const LoginForm = styled.div`
    width: 26rem;
    height: 20rem;
    // background-color: aqua;
    border-radius: 2rem;
    border-style: solid;
    border-width: 2px;
    border-color: #262626;

    display: flex;
    flex-direction: column;

    button {
        cursor: pointer
    }
    p {
        cursor: pointer
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    input {
        width: 22.5rem;
        height: 2.5rem;
        margin-bottom: 9px;
        padding-left: 0.5rem;
        font-size: 16px
    }
    

`


const FormEmail = styled.input`

`
const FormPass = styled.input`

`
const FormBTN = styled.button`

    width: 22.5rem;
    height: 2.5rem;
    margin-bottom: 9px;
    font-size: 20px;
    border: none;
    background-color: #262626;
    color: white;
    border-radius: 4px
`
