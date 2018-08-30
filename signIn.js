import React,{Component} from 'react'
import{StyleSheet,Text,TextInput,Image,TouchableOpacity,View} from'react-native'
// import {
//     createStackNavigator,
//   } from 'react-navigation';
export class Signin extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          email:'',
          password:''
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
              this.props.navigation.navigate('Tab')
              //  if(this.state.email==this.props.navigation.state.params.email && this.state.password==this.props.navigation.state.params.password)
              //  this.props.navigation.navigate('Tab')
              //  else
              //  alert('InValid Email or Password')
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