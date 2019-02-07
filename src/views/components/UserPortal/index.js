import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import ChangePassword from '../ChangePassword'
import { WhiteLink } from '../../../utils/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { confirmPopUp } from '../../../utils/globalFunc'
import { logout } from './actions'
import { startLoading, finishLoading } from '../../../controllers/Actions'

const UserPortalContainer = styled.summary`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
  background: #34495e;
  border-radius: .5rem;
  padding: 1rem;
  box-sizing: border-box;
`;

const LeftPanel = styled.aside` 
  display:flex;
  align-items: center;
  width: 50%;
  color:#fff;

  img {
      margin-right: 10px;
  }

  @media all and (max-width:640px) {
    width: 100%;
    justify-content: left;
    margin-bottom: 1.5rem;
  }
`;

const RightPanel = styled.aside`
  width: 50%;
  text-align:right;

  @media all and (max-width:640px) {
    width: 100%;
    text-align:left;
  }
`;

const userLogout = dispatch => {
    if (confirmPopUp("Are you sure you want to logout?")) {
        Router.push(`/`)
        dispatch(logout())
        dispatch(startLoading())
        window.sessionStorage.setItem('token', '');
    }
}

const UserPortal = props => {
    const { dispatch, loggedInAs, loggedIn, profileImg, username, token } = props;

    if (loggedIn) {
        dispatch(finishLoading())
    }

    if (loggedInAs && loggedIn) {
        return (
            <UserPortalContainer>
                <LeftPanel>
                    <img style={{ 'borderRadius': '100%' }} width="64" alt="Profile Image" src={profileImg ? profileImg : 'https://res.cloudinary.com/fwgs210/image/upload/v1549488926/user_profile/resoxynwrkrn1jvwbpee.png'} />
                    <h3>{username}</h3>
                </LeftPanel>
                <RightPanel>
                    <ChangePassword loggedInAs={loggedInAs} token={token} />
                    <WhiteLink onClick={() => userLogout(dispatch)}>
                        <FontAwesomeIcon prefix="fas" icon="sign-out-alt" /> Logout
                    </WhiteLink>
                </RightPanel>
            </UserPortalContainer>
        )
    }

    return null
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps)(UserPortal)
