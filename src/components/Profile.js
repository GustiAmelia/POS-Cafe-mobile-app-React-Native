import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View>
       <StatusBar style ={Styles.statusBar} barStyle="light-content"/>
       <View style={Styles.header}>
            <Text style={Styles.text_header}>profile</Text>
        </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  statusBar:{
    backgroundColor:'#009387',
  },
});

export default Profile;
