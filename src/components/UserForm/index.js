import React from 'react'
import styled from 'styled-components'
import StyledLoader from '../Loader'
import {
    InputGroup,
    InputLabel,
    InputField,
    InputButton,
    LineButton
} from '../../utils/Input'

const UserLogin = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 40px auto 0;
`;

const RadioOption = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
  align-items: center;

  [type="radio"] {
      margin-top: .5rem;
  }

  img {
      width: 48px;
  }
`;

const UserForm = props => {
    const { registering, username, email, password, rePassword, forgetPass } = props.state
    const { handleChange, createNewUser, userLogin, forgetPassRequest, history } = props;
    const registerForm =
        <UserLogin>
            <form onSubmit={createNewUser}>
                <InputGroup>
                    <InputLabel>choose your avatar</InputLabel>
                    <RadioOption><img alt="avatar1" src='/assets/images/avatar-default.png' /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImg', '../assets/images/avatar-default.png')} /></RadioOption>
                    <RadioOption><img alt="avatar2" src='/assets/images/avatar-yellow.png' /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImg', '../assets/images/avatar-yellow.png')} /></RadioOption>
                    <RadioOption><img alt="avatar3" src='/assets/images/avatar-glasses-1.png' /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImg', '../assets/images/avatar-glasses-1.png')} /></RadioOption>
                    <RadioOption><img alt="avatar4" src='/assets/images/avatar-glasses-2.png' /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImg', '../assets/images/avatar-glasses-2.png')} /></RadioOption>
                    <RadioOption><img alt="avatar5" src='/assets/images/avatar-beared.png' /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImg', '../assets/images/avatar-beared.png')} /></RadioOption>
                    <RadioOption><img alt="avatar6" src='/assets/images/avatar-brown.png' /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImg', '../assets/images/avatar-brown.png')} /></RadioOption>
                </InputGroup>
                <InputGroup>
                    <InputLabel>username</InputLabel>
                    <InputField value={username} onChange={(e) => handleChange('username', e.target.value)} type="text" required />
                </InputGroup>
                <InputGroup>
                    <InputLabel>email</InputLabel>
                    <InputField value={email} onChange={(e) => handleChange('email', e.target.value)} type="email" required />
                </InputGroup>
                <InputGroup>
                    <InputLabel>password</InputLabel>
                    <InputField value={password} onChange={(e) => handleChange('password', e.target.value)} type="password" required />
                </InputGroup>
                <InputGroup>
                    <InputLabel>Re-type password</InputLabel>
                    <InputField value={rePassword} onChange={(e) => handleChange('rePassword', e.target.value)} type="password" required />
                </InputGroup>
                <InputGroup>
                    <InputButton type="submit">Register</InputButton>
                    <LineButton onClick={() => {
                        handleChange('registering', false);
                        history.push('/login')
                    }}>Login</LineButton>
                </InputGroup>
            </form>
        </UserLogin>


    const loginForm =
        <UserLogin>
            <form onSubmit={userLogin}>
                <InputGroup>
                    <InputLabel>username</InputLabel>
                    <InputField value={username} onChange={(e) => handleChange('username', e.target.value)} type="text" required />
                </InputGroup>
                <InputGroup>
                    <InputLabel>password</InputLabel>
                    <InputField value={password} onChange={(e) => handleChange('password', e.target.value)} type="password" required />
                </InputGroup>
                <InputGroup>
                    <InputButton type="submit">login</InputButton>
                    <LineButton onClick={() => {
                        handleChange('registering', true)
                        history.push('/register')
                    }}>Register here</LineButton>
                    <LineButton onClick={(e) => { 
                        e.preventDefault(); handleChange('forgetPass', true) 
                        history.push('/forget-password')
                    }}>forgot password?</LineButton>
                </InputGroup>
            </form>
        </UserLogin>


    const forgetPassForm =
        <UserLogin>
            <form onSubmit={forgetPassRequest}>
                <InputGroup>
                    <InputLabel>email</InputLabel>
                    <InputField value={email} onChange={(e) => handleChange('email', e.target.value)} type="email" required />
                </InputGroup>
                <InputGroup>
                    <InputButton type="submit">Submit</InputButton>
                    <LineButton onClick={() => {
                        handleChange('forgetPass', false)
                        history.push('/login')
                    }}>Login</LineButton>
                </InputGroup>
            </form>
        </UserLogin>

    if (registering) {
        return registerForm
    }

    if (forgetPass) {
        return forgetPassForm
    }

    return loginForm
}

export default StyledLoader(UserForm)