import React from 'react'
import styled from 'styled-components'
import {
    InputGroup,
    InputLabel,
    InputField,
    InputButton,
    LineButton
} from './Input'

const UserLogin = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 40px auto 0;
`;

const RadioOption = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  align-items: center;

  [type="radio"] {
      width: 100%;
      margin-top: .5rem;
  }

  img {
      width: 48px;
  }
`;

const UserForm = props => {
    const { registering, username, email, password, rePassword, forgetPass } = props.state
    const { handleChange, createNewUser, userLogin, forgetPassRequest } = props;

    const registerForm =
        <UserLogin>
            <form onSubmit={createNewUser}>
                <InputGroup>
                    <InputLabel>choose your avatar</InputLabel>
                    <RadioOption><img alt="avatar1" src='/assets/images/avatar-default.png' /><br /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImage', '../assets/images/avatar-default.png')} /></RadioOption>
                    <RadioOption><img alt="avatar2" src='/assets/images/avatar-yellow.png' /><br /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImage', '../assets/images/avatar-yellow.png')} /></RadioOption>
                    <RadioOption><img alt="avatar3" src='/assets/images/avatar-glasses-1.png' /><br /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImage', '../assets/images/avatar-glasses-1.png')} /></RadioOption>
                    <RadioOption><img alt="avatar4" src='/assets/images/avatar-glasses-2.png' /><br /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImage', '../assets/images/avatar-glasses-2.png')} /></RadioOption>
                    <RadioOption><img alt="avatar5" src='/assets/images/avatar-beared.png' /><br /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImage', '../assets/images/avatar-beared.png')} /></RadioOption>
                    <RadioOption><img alt="avatar6" src='/assets/images/avatar-brown.png' /><br /><input type="radio" name="selectMyAvatar" onChange={() => handleChange('profileImage', '../assets/images/avatar-brown.png')} /></RadioOption>
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
                    <LineButton onClick={() => handleChange('registering', false)}>Login</LineButton>
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
                    <LineButton onClick={() => handleChange('registering', true)}>Register here</LineButton>
                    <LineButton onClick={(e) => { e.preventDefault(); handleChange('forgetPass', true) }}>forgot password?</LineButton>
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
                    <LineButton onClick={() => handleChange('forgetPass', false)}>Login</LineButton>
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

export default UserForm