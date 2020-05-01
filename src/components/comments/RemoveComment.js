import React from "react";
import styled from "styled-components";
import theme from "utils/theme";
import PropTypes from "prop-types";

// COMPONENTS
import BinIcon from "assets/icons/bin.svg";
import Icon from "components/atoms/Icon";
import Button from "components/atoms/Button";
import Loader from "react-loader-spinner";

// REDUX STUFF
import { connect } from "react-redux";
import { removeComment } from "redux/actions/dataActions";

const StyledButton = styled.div`
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  font-size: ${theme.fontSize.s};
  text-align: center;
  z-index: 9;
`;
const StyledDeleteBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
`;
const StyledDeleteAlert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: ${theme.colors.tertiary};
  color: ${theme.colors.secondary};
  padding: 25px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

class RemoveComment extends React.Component {
  state = {
    dialogOpen: false,
  };
  openDialog = () => this.setState({ dialogOpen: true });
  closeDialog = () => this.setState({ dialogOpen: false });
  handleRemoveComment = () => this.props.removeComment(this.props.comment_id);

  render() {
    const dialogOpen = this.state.dialogOpen;
    const { loading } = this.props;
    return (
      <>
        <StyledButton onClick={this.openDialog}>
          <Icon small src={BinIcon} />
        </StyledButton>
        {dialogOpen && (
          <>
            <StyledDeleteBackground />
            <StyledDeleteAlert>
              <h3>Are you sure to delete this comment ?</h3>
              <StyledButtonsContainer>
                <Button danger onClick={this.closeDialog}>
                  No
                </Button>
                <Button secondary onClick={this.handleRemoveComment}>
                  Yes
                </Button>
              </StyledButtonsContainer>
              {loading && (
                <Loader
                  type="ThreeDots"
                  color={theme.colors.primary}
                  height={40}
                  width={40}
                />
              )}
            </StyledDeleteAlert>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.UI.loadingRemoveComment,
});

RemoveComment.propTypes = {
  loading: PropTypes.bool.isRequired,
  comment_id: PropTypes.number.isRequired,
  removeComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeComment })(RemoveComment);
