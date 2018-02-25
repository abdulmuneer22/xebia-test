import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Font } from "expo";
import { colors } from "../../constants";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { Search } from "../../redux/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      username: "",
      password: ""
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      regular: require("../../../assets/fonts/SourceSansPro-Light.ttf"),
      semi_bold: require("../../../assets/fonts/SourceSansPro-SemiBold.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  }

  onUserNameChange = v => {
    this.setState({
      username: v
    });
  };

  onPasswordChange = v => {
    this.setState({
      password: v
    });
  };

  login = () => {
    const { username, password } = this.state;
    const { login } = this.props;
    if (username && password) {
      login(username, password);
    } else {
      alert("errr");
    }
  };

  render() {
    const { fontLoaded } = this.state;
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: colors.PURPLE
        }}
      >
        {fontLoaded && (
          <View
            style={{
              alignItems: "center",
              flex: 1,
              marginTop: 100
            }}
          >
            <Image
              source={require("../../../assets/images/dv.png")}
              style={{
                width: 100,
                height: 100,
                marginVertical: 15
              }}
            />

            <InputBox
              onChange={this.onUserNameChange}
              placeHolder="User name"
            />
            <InputBox
              isPassword={true}
              onChange={this.onPasswordChange}
              placeHolder="Password"
            />

            <Button label="Login" onPress={this.login} />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      dispatch(Search(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
