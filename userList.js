import React,{Component} from 'react'
import{StyleSheet,Text,TextInput,Image,TouchableOpacity,View,Switch,Slider,FlatList,Image} from'react-native'
import { AsyncStorage } from "react-native"
export class Userlist extends Component{
    constructor(props)
    {
        super(props);
        this.state={
           
            array:[]
        }
        
    }
    componentWillMount()
    {
        this._retrieveData();
       
    }
    render()
    {
        
        return(
        <View>
        
        <FlatList
        data={this.state.array}
                renderItem={({item})=>{return(
                  <View style={{borderBottomColor:'black',borderBottomWidth:2}}>
                  <Text>{item.gender}</Text>
                  <Text>{item.name.title}</Text>
                  <Text>{item.name.first}</Text>
                  <Text>{item.name.last}</Text>
                  <Text>{item.email}</Text>
                  </View>
            
                )}}>
        </FlatList>

        {/* <TouchableOpacity style={{width:100,height:20,backgroundColor:'pink'}} onPress={()=>{ this.apiCall();}}><Text>press on the button</Text></TouchableOpacity> */}
        </View>
        )
    }
    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('key');
          if (value !== null) {
            // We have data!!
           this.apiCall(value)
           alert(value)
          }
          else
          alert('err')
         } catch (error) {
           // Error retrieving data
         }
      }
      baseurl="http://192.168.12.39:7000/api/"
      apiCall= async(value)=> {
       try {
         let response = await fetch(
           this.baseurl+"v1/user/getUserList/0/1/10",{
             
               method: 'GET',
               headers: {
                'x-access-token':value
               },
          }
          
         );
         let responseJson = await response.json();
         this.setState({array:responseJson.message.results})
         alert('response'+JSON.stringify(responseJson))
         return responseJson;
        
       } catch (error) {
         console.error(error);
       }
     }
 
}