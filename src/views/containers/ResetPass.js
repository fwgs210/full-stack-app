import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Router from 'next/router'
import { InputGroup, InputLabel, InputField, InputButton } from '../../utils/Input'
import { stripSpaces, validatePassword } from '../../utils/globalFunc'

const ErrorMessage = styled.div`
  color: #D31C1D;
  text-align: center;
  font-size: .875rem;
`;

const FormContainer = styled.form`
    text-align: left;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 0 8px 2px rgba(65,64,66,.1);
    margin-bottom: 1.5rem;
    background-color: #fff;
    box-sizing:border-box;
`

class ResetPass extends React.Component {
    state = {
        newPass: '',
        reNewPass: '',
        userError: false,
        errorMessage: '',
        token: ''
    }

    clearInput = () => this.setState({
        newPass: '',
        reNewPass: '',
        userError: false,
        errorMessage: '',
        token: ''
    })

    handleChange = (nameToUpdate, value) => {
        this.setState({
            [nameToUpdate]: value
        })
    }

    changePassword = (e) => {
        e.preventDefault();

        if (this.state.newPass !== this.state.reNewPass) {
            this.setState({
                userError: true,
                errorMessage: `You passwords don't match`
            })
            return null
        }

        if (!validatePassword(this.state.newPass)) {
            this.setState({
                userError: true,
                errorMessage: `Please make sure your password has uppercase, lowercase letter, number, special character and no space.`
            })
            return null
        } 

        axios.post('/api/user/change-password', {
            newPassword: stripSpaces(this.state.newPass)
            }, {
            headers: { 'Authorization': 'bearer ' + this.state.token }
        }).then(res => {
            if (res.status === 200) {
                this.clearInput()
                window.alert(res.data.message + ' And now you will be redirected.')
                window.sessionStorage.setItem('token', res.data.token);
                Router.push('/')
            } else {
                this.setState({ userError: true, errorMessage: res.data.message })
            }

        })
    }

    componentDidMount() {
        if(this.props.query.token) {
            this.handleChange('token', this.props.query.token)
        }
    }
    

    render(){
        return (
            <FormContainer onSubmit={this.changePassword}>
            <InputGroup>
                <InputLabel>new password</InputLabel>
                <InputField value={this.state.newPass} onChange={(e) => this.handleChange('newPass', e.target.value)} type="password" required />
            </InputGroup>
            <InputGroup>
                <InputLabel>re-type new password</InputLabel>
                <InputField value={this.state.reNewPass} onChange={(e) => this.handleChange('reNewPass', e.target.value)} type="password" required />
            </InputGroup>
            <InputGroup>
                <InputButton type="submit">Update</InputButton>
            </InputGroup>
            {this.state.userError ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : ''}
        </FormContainer>
        )
    }
} 

export default ResetPass
