import React,{Component} from 'react'
import{StyleSheet,Text,TextInput,Image,TouchableOpacity,View} from'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
export class Signup extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          name:'meghu',
          email:'',
          password:''
        }
    }
    static navigationOptions = {
        header:null
      };
    render()
    {
       return( <View style={styles.container}>
                  <Text style={{ marginBottom:30,fontSize:20}}>Sign Up</Text>
            <TextInput style={styles.text}
             placeholder="Name" />
             <TextInput style={styles.text}
             placeholder="E-mail"  onChangeText={(email)=>this.setState({email})}  />
             <TextInput style={styles.text} maxLength={20} 
             placeholder="Password"  onChangeText={(password)=>this.setState({password})} />
              <TouchableOpacity style={styles.signup} onPress={()=>{
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/.test(this.state.password))
                {
              let resetActions=StackActions.reset({
                index:0,
                actions:[
                  NavigationActions.navigate({
                    routeName:'Home',
                    params:{
                      name:this.state.name,
                      email:this.state.email,
                      password:this.state.password
                    }
                  })
                ],
              })
              this.props.navigation.dispatch(resetActions)
            }
            else
            {
              alert('Invalid Input')
            }

              } }>
             <Image source={require('./orange.png')}  />
             <Text style={styles.sitx}>Sign Up</Text>
             </TouchableOpacity> 
             
        </View>
       );
      return(
        <Text>hello</Text>
      )
    }
}
const styles=StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        borderRadius: 10,
        backgroundColor:'white'
      },
    signup:{
         height:60,
         width:250,
         borderRadius:5,   
         backgroundColor:'orange',
         marginTop: 30,
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