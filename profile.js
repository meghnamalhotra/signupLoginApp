import React,{Component} from 'react'
import{StyleSheet,Text,TextInput,Image,TouchableOpacity,View} from'react-native'
export class Prof extends Component{
    constructor(props)
    {
        super(props);

    }
    static navigationOptions = {
        header:null
      };
    
      render()
    {
       return( <View style={styles.container}>
           <Text style={{ marginBottom:30,fontSize:20}}>Profile</Text>
           <Image source={require('./girl.jpeg')}  style={styles.img}/>
            <TextInput style={styles.text}
             placeholder="John"  />
             <TextInput style={styles.text}
             placeholder="john@gmail.com"  />
             <TextInput style={styles.text} maxLength={20}
             placeholder="(999)999-9999"  />
             <TouchableOpacity style={styles.signup}>
             <Image source={require('./orange.png')}  />
             <Text style={styles.sitx}>Save</Text>
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
        backgroundColor:'white'
      },
    signup:{
         height:60,
         width:250,
         borderRadius:5,   
         backgroundColor:'orange',
         marginTop: 50,
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
     },
     img:{
         width:70,
         height:80,
         borderRadius: 100,
         marginBottom: 30,
     }
});