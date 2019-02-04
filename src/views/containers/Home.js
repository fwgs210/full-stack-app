import React from 'react'
import styled from 'styled-components'
import ShowComments from '../components/ShowComment'
import UserForm from '../components/UserForm'
import { connect } from 'react-redux';

const ErrorMessage = styled.div`
  color: #D31C1D;
  text-align: center;
  font-size: .875rem;
`;


const Home = ({ errorMessage, history }) => (
  <React.Fragment>
    <ShowComments />
    <UserForm history={history} />
    <ErrorMessage>{errorMessage}</ErrorMessage>
  </React.Fragment>
)

const mapStateToProps = state => ({ ...state.loading })

export default connect(mapStateToProps)(Home)
