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
import { removePost } from "redux/actions/dataActions";

const StyledButton = styled.div`
  background: none;
  border: none;
  outline: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: ${theme.fontSize.s};
  text-align: center;
`;
const StyledDeleteBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.4);
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
const StyledBackButton = styled(Button)`
  background: transparent;
  border: 2px solid ${theme.colors.error};
  color: ${theme.colors.error};
`;

class RemovePost extends React.Component {
  state = {
    dialogOpen: false,
  };
  openDialog = () => {
    console.log("open");
    this.setState({ dialogOpen: true });
  };
  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  handleRemovePost = () => {
    this.props.removePost(this.props.post_id);
  };
  render() {
    const dialogOpen = this.state.dialogOpen;
    const { loading } = this.props;
    return (
      <>
        <StyledButton onClick={this.openDialog}>
          <Icon src={BinIcon} />
        </StyledButton>
        {dialogOpen && (
          <>
            <StyledDeleteBackground />
            <StyledDeleteAlert>
              <h3>Are you sure to delete this post ?</h3>
              <StyledButtonsContainer>
                <StyledBackButton onClick={this.closeDialog}>
                  No
                </StyledBackButton>
                <Button secondary onClick={this.handleRemovePost}>
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
  loading: state.UI.loadingRemovePost,
});

RemovePost.propTypes = {
  post_id: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removePost })(RemovePost);
