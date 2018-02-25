import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import SearchBox from "../../components/SearchBox";
import { connect } from "react-redux";
import { Font } from "expo";
import _ from "lodash";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Planets: "",
      fontLoaded: false
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

    setTimeout(() => {
      this.props.dispatch({
        type: "RESET_COUNTER"
      });
    }, 1000 * 60);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps && nextProps.Planets) {
      this.setState({
        Planets: nextProps.Planets
      });
    }
  };

  renderPlant = () => {
    const { selectedPlanet } = this.state;
    var keys = _.keysIn(selectedPlanet);
    return (
      <View>
        <FlatList
          data={keys}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: 10,
                marginHorizontal: 10
              }}
            >
              <Text>
                {_.capitalize(item)} : {selectedPlanet[item]}
              </Text>
            </View>
          )}
        />
      </View>
    );
  };

  render() {
    const { Planets, fontLoaded, cleared, selectedPlanet } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(255,255,255,0.7)"
        }}
      >
        <SearchBox
          onSearchStart={() => {
            this.setState({
              selectedPlanet: ""
            });
          }}
        />

        <View
          style={{
            flex: 1,
            top: -10
          }}
        >
          {!selectedPlanet && fontLoaded && Planets && Planets.length > 0
            ? Planets.map((itm, ind) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.dispatch({
                        type: "UPDATE_COUNT"
                      });
                      this.setState({
                        selectedPlanet: itm
                      });
                    }}
                    key={ind}
                    style={{
                      backgroundColor: "white",
                      //height: 30,
                      paddingHorizontal: 10,
                      paddingVertical: 5
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "regular",
                        paddingVertical: 10,
                        fontSize: itm.population > 100000 ? 18 : 12
                      }}
                    >
                      {itm.name}
                    </Text>
                  </TouchableOpacity>
                );
              })
            : selectedPlanet ? this.renderPlant() : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Planets: state.planetResults
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
