import React from "react";
import styled from "styled-components";
import BackButton from "components/atoms/BackButton";
import NickName from "components/atoms/NickName";
import { Link } from "react-router-dom";
import theme from "utils/theme";
import NotificationsTypeSelect from "components/notifications/NotificationsTypeSelect";
import NotificationsList from "components/notifications/NotificationsList";

const StyledWrapper = styled.section``;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid ${theme.colors.secondary};
  span {
    font-size: ${theme.fontSize.s};
  }
`;
const StyledNickName = styled(NickName)`
  margin-left: 60px;
`;

class Notifications extends React.Component {
  state = {
    type: "all",
  };
  handleChangeOption = (e) =>
    this.setState({
      type: e.target.value,
    });
  render() {
    const { type } = this.state;
    return (
      <StyledWrapper>
        <StyledHeader>
          <Link to="/">
            <BackButton />
          </Link>
          <StyledNickName>Notifications</StyledNickName>
        </StyledHeader>
        <NotificationsTypeSelect changeOption={this.handleChangeOption} />
        <NotificationsList type={type} />
      </StyledWrapper>
    );
  }
}

export default Notifications;
