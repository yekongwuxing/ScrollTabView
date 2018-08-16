/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

let screenWidth = Dimensions.get('window').width;

    type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <ScrollableTabView style={styles.container}
                           renderTabBar={() => <DefaultTabBar />}
                           tabBarActiveTextColor={'#ff0000'}
                           tabBarUnderlineStyle={styles.tabBarUnderline}
        >
            <Text style={styles.textStyle} tabLabel='娱乐'>娱乐</Text>
            <Text style={styles.textStyle} tabLabel='科技'>科技</Text>
            <Text style={styles.textStyle} tabLabel='军事'>军事</Text>
            <Text style={styles.textStyle} tabLabel='体育'>体育</Text>

        </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
      marginTop:20
  },
  tabBarUnderline:{
    width:screenWidth/4,
      height:1,
      backgroundColor:'#ff0000'
  },
    textStyle:{
        flex:1,
        fontSize:20,
        textAlign:'center',
        marginVertical:40
    }

});
