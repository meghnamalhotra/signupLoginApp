import React,{Component} from 'react'
import{StyleSheet,Text,TextInput,Image,TouchableOpacity,View} from'react-native'
import { AsyncStorage } from "react-native"
// import {
//     createStackNavigator,
//   } from 'react-navigation';
export class Signin extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          email:'',
          password:'',
         
        }

    }
    static navigationOptions = {
        title: 'Sign In',
        header:null
      };
    render()
    {
        // const { navigate } = this.props.navigation;
       return( <View style={styles.container}>
           <Text style={{ marginBottom:30,fontSize:20}}>Sign In</Text>
            <Image source={require('./top.png')} style={{marginBottom:30}} />
              <TextInput style={styles.text}
             placeholder="E-mail"  onChangeText={(email)=>this.setState({email})}/>
             <TextInput style={styles.text} maxLength={20}
             placeholder="Password"  onChangeText={(password)=>this.setState({password})}/>
              <TouchableOpacity style={styles.signin}
             onPress={() =>{
              // this.props.navigation.navigate('Tab')
              //  if(this.state.email==this.props.navigation.state.params.email && this.state.password==this.props.navigation.state.params.password)
              //  this.props.navigation.navigate('Tab')
              //  else
              //  alert('InValid Email or Password')
              this.apiFunction();
             
              }}>
            
            <Image source={require('./orange.png')}  />
             <Text style={styles.sitx}>Sign In</Text>
             </TouchableOpacity>
             <Text style={{marginTop:20}}>Forgot your details?</Text>
              <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Profile')}}>
                <Text style={{marginTop:100,fontSize:20}}>create a new account</Text>
             </TouchableOpacity> 
        </View>
       );
    }

    baseurl="http://192.168.12.39:7000/api/"
    apiFunction= async()=> {
     try {
       let response = await fetch(
         this.baseurl+"v1/user/authenticateUser",{
           
             method: 'POST',
             headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({
              
               email:this.state.email,
               password:this.state.password

             }),
            
         }
        
       );
       let responseJson = await response.json();
      // alert('response'+responseJson.success)
       this.setState({bool:responseJson.success})
       if(responseJson.success)
       {
        
        this.storeData(responseJson.token);
        this.props.navigation.navigate('Tab')
       }
       else
       {
         alert('error in signin')
       }
       return responseJson;
      
     } catch (error) {
       console.error(error);
     }
   }

   storeData = async (access) => {
    try {
      await AsyncStorage.setItem('key',access);
      alert('success')
    } catch (error) {
      // Error saving data
      alert('err')
    }
  }
  
}

const styles=StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
       
        borderRadius: 10,
        backgroundColor:'white',
        marginRight: 30,
      },
    signin:{
         height:60,
         width:250,
         borderRadius:5,   
         backgroundColor:'orange',
         marginTop: 20,
},
   text:{
    borderWidth:1,
    width:250,
    backgroundColor:'white',
    borderRadius: 5,
  },
  sitx:{
     
    position:"absolute",
     marginLeft:90,
     marginTop:17 ,
     fontSize: 20,
     color:'white'
      }
});