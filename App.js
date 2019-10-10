import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {Block, Text} from './components/index'

import * as theme from './theme'
import * as mock from './mock'

export default class App extends React.Component {
  
  render(){
    return (
      <SafeAreaView style={styles.safe}>
        {this.renderHeader()}
        {this.renderRequests()}
      </SafeAreaView>
    )
  }

  renderHeader() {
    return (
      <Block flex={0.36} column style={{paddingHorizontal: 15,}}>
        <Block flex={false} row style={{paddingVertical: 15,}}>
          <Block center>
            <Text h3 bold white>Blood Requests</Text>           
          </Block>

          {/* <Image style={styles.avatar} source={}/> */}
        </Block>
        <Block card shadow color="white" style={styles.headerChart}>
          <Block row space="between" style={{paddingHorizontal: 30}}>
            <Block row center flex={false}>
              <Text h1>291 </Text>
              <Text caption bold tertiary style={{paddingHorizontal: 10}}>
                -12%
              </Text>
            </Block>
            <Block row center flex={false}>
              <Text caption bold primary style={{paddingHorizontal: 10}}>
                +49%
              </Text>
              <Text h1> 481</Text>
            </Block>
          </Block>
          <Block flex={0.5} center row space="between" style={{paddingHorizontal: 30}}>
              <Text caption light>Available</Text>
              <Text caption light>Requests</Text>
          </Block>
          <Block>
            <Text>chart</Text>
          </Block>
        </Block>
    </Block>
    );
  }

  renderRequest(request){
    return(
      <Block card shadow color="white">
        <Text>{request.name}</Text>
      </Block>
    );
  }

  renderRequests() {
    const { requests } = this.props;
    return (
      <Block flex={0.8} column color="gray" style={styles.requests}>
        <Block flex={false} row space="between"> 
          <Text light>Recent Updates</Text>
          <Text bold>View All</Text>
        </Block>
        <ScrollView>
          { requests.map(request => (
            <TouchableOpacity key={`request-${request.id}`}>
              {this.renderRequest(request)}
            </TouchableOpacity>
            ))}
        </ScrollView>
      </Block>
    )
  }
}

App.defaultProps = {
  user: mock.user,
  requests: mock.requests,
  chart: mock.chart,
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  headerChart: {
    paddingTop: 30,
    // paddingBottom: 45,
    zIndex: 1,
  },
  requests: {
    marginTop: -40,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
  }
})