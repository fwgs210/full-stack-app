import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChangePassword from '../ChangePassword'
import { WhiteLink } from '../../utils/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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


const UserPortal = props => {
    const { loggedInAs, loggedIn, userProfileImg, username, userLogout, token, userRole } = props;

    if (loggedInAs && loggedIn) {
        return (
            <UserPortalContainer>
                <LeftPanel>
                    <img width="64" alt="Profile Image" src={userProfileImg ? userProfileImg : '/assets/images/avatar-default.png'} />
                    <h3>{ userRole === 'administrator' ? 'Tracy Su' : username.userPosted}</h3>
                </LeftPanel>
                <RightPanel>
                    <ChangePassword loggedInAs={loggedInAs} token={token} />
                    <WhiteLink onClick={userLogout}>
                        <FontAwesomeIcon prefix="fas" icon="sign-out-alt" /> Logout
                    </WhiteLink>
                </RightPanel>
            </UserPortalContainer>
        )
    }

    return null
}

UserPortal.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    loggedInAs: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    userLogout: PropTypes.func.isRequired
}

export default UserPortal
