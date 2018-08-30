import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,ScrollView,FlatList} from 'react-native';
  import {Card} from './compo2';

export class User extends Component {
  constructor(props){
    super(props);
    this.Array_Items=require('./content.json');
  }
  static navigationOptions = {
    header:null
  };
  render() {
  //  let locationSymbol= "https://www.freeiconspng.com/uploads/map-location-icon-28.png";
    return (
      <View style={styles.container}>
                
        <View style={{backgroundColor:'#2299ff',flexDirection:'row'}}>
          <Text style={{fontSize:40,marginLeft:4}}>=</Text>
          <Text style={styles.title}>Trending</Text>
          <Image source={{uri:'https://www.pngarts.com/files/1/Globe-PNG-Photo.png'}} style={{height:40,width:40,marginLeft:100,marginTop:5}}></Image>
        </View>
        <ScrollView>
          {
            <FlatList
            data={this.Array_Items}
            renderItem={({item})=>{
           // this.Array_Items.map((value,Key)=>{
              return(
              <Card
                key={Key}
                userName={item.userName}
                userDp={item.userDp}
                location={item.location}
                time={item.time}
                pic={item.pic}
                description={item.description}
                />
              )}}
       
          
          />
            }
          </ScrollView>
          </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
    color:'white',
    marginLeft:120,
    marginTop:5,
    fontSize:30 
  }
})