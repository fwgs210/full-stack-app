import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { LineButton, WhiteLink, InputGroup, InputLabel, InputField, InputButton } from '../../../utils/Input'
import { stripSpaces, validatePassword } from '../../../utils/globalFunc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
`

class ChangePassword extends React.Component {
    state = {
        changingPass: false,
        currentPass: '',
        newPass: '',
        reNewPass: '',
        userError: false,
        errorMessage: '',
        token: '',
        loggedInAs: ''
    }

    clearInput = () => this.setState({
        changingPass: false,
        currentPass: '',
        newPass: '',
        reNewPass: '',
        userError: false,
        errorMessage: ''
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
                window.alert(res.data.message)
            } else {
                this.setState({ userError: true, errorMessage: res.data.message })
            }

        })
    }

    componentDidMount() {
        const { loggedInAs, token } = this.props
        this.setState({
            loggedInAs,
            token
        })
    }
    

    render(){
        return (
            this.state.changingPass ? (
                <FormContainer onSubmit={this.changePassword}>
                    <InputGroup>
                        <InputLabel>old password</InputLabel>
                        <InputField value={this.state.currentPass} onChange={(e) => this.handleChange('currentPass', e.target.value)} type="password" required />
                    </InputGroup>
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
                        <LineButton onClick={() => this.handleChange('changingPass', false)}>Cancel</LineButton>
                    </InputGroup>
                    {this.state.userError ? <ErrorMessage>{this.state.errorMessage}</ErrorMessage> : ''}
                </FormContainer>
            ) : (
                    <WhiteLink onClick={() => this.handleChange('changingPass', true)}>
                        <FontAwesomeIcon prefix="fas" icon="unlock-alt" /> Change Password
                    </WhiteLink>
            )            
        )
    }
} 

export default ChangePassword
