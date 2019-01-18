import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChangePassword from '../ChangePassword'
import { LineButton } from '../../utils/Input'

const UserPortalContainer = styled.summary`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
`;

const LeftPanel = styled.aside` 
  display:flex;
  align-items: center;
  width: 50%;
  text-align:left;

  img {
      margin-right: 10px;
  }
`;

const RightPanel = styled.aside`
  width: 50%;
  text-align:right;
`;


const UserPortal = props => {
    const { loggedInAs, loggedIn, userProfileImg, username, userLogout, token } = props;

    if (loggedInAs && loggedIn) {
        return (
            <UserPortalContainer>
                <LeftPanel>
                    <img width="64" alt="Profile Image" src={userProfileImg ? userProfileImg : '/assets/images/avatar-default.png'} />
                    <h3>{username.userPosted}</h3>
                </LeftPanel>
                <RightPanel>
                    <ChangePassword loggedInAs={loggedInAs} token={token} />
                    <LineButton onClick={userLogout} style={{"display": "inline"}}>logout</LineButton>
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
