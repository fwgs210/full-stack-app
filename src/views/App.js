import React, { Component } from 'react'
import styled from 'styled-components'
import ShowComments from './ShowComment'
import AddComment from './AddComment'
import UserForm from './UserForm'
import UserPortal from './UserPortal'
import Dashboard from './Dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

// init fontAwesome
library.add(fas, far)

const AppContainer = styled.section.attrs({})`
  width: 100%;
  max-width: 800px;
  margin: 20px auto 80px;
  background: #fff;
  box-shadow: 0 20px 50px 0 rgba(34,43,55,.1);
  padding: 20px 40px;
  border-radius: 5px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;  
`;

const NewPostContainer = styled.div`
  margin-top: 3rem;
`;

const ErrorMessage = styled.div`
  color: #D31C1D;
  text-align: center;
  font-size: .875rem;
`;

class App extends Component {

  render() {
    const { loggedIn, errorMessage, userRole, token, history } = this.props

    return (
      <AppContainer>
        <UserPortal history={history} />
        <Dashboard userRole={userRole} token={token} />
        <ShowComments />
        {
          !loggedIn ? (
              <React.Fragment>
                <UserForm
                  history={history}
                />
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </React.Fragment>
            ) : (
              <NewPostContainer>
                <AddComment />
              </NewPostContainer>
            )
        }
      </AppContainer>
    )
  }
}

// const AddCommentContainer = props => {
//   if (!props.loggedIn) {
//     return (
//       <React.Fragment>
//         <UserForm
//           history={props.history}
//           loaded={props.loaded}
//         />
//         <ErrorMessage>{props.errorMessage}</ErrorMessage>
//       </React.Fragment>
//     )
//   }
//   return (
//     <NewPostContainer>
//       <AddComment />
//     </NewPostContainer>
//   )
// }

const mapStateToProps = state => ({ ...state.user, ...state.loading })
 //this method is used to pass state down functions

// const mapDispatchToProps = dispatch => ({ //this method is used to pass function down functions
//   loadComments: allComments => dispatch(loadComments(allComments)),
//   loadingStart: () => dispatch(startLoading()),
//   loadingEnd: () => dispatch(finishLoading()),
//   setError: errorMessage => dispatch(setError(errorMessage)),
//   clearError: () => dispatch(clearError())
// })

export default connect(mapStateToProps)(App)
