import React,{Component} from 'react'
import{StyleSheet,Text,TextInput,Image,TouchableOpacity,View,Switch,Slider} from'react-native'
export class Settings extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            value1:false,
            value2:false
        }
    }
    render()
    {
        return(
           <View style={styles.container}>
            <View style={styles.setting}>
               <Text style={{fontSize:20}}>Setting 1</Text>
               <Switch onTintColor='tint' value={this.state.value1} onValueChange={()=>
               {
                if(this.state.value1){
                   this.setState({value1:false})
                   this.setState({value2:true})
                
               }
               else{
                this.setState({value1:true})
                this.setState({value2:false})
               }
            }}></Switch>
            </View>
            <View style={styles.setting}>
               <Text style={{fontSize:20}}>Setting 2</Text>
               <Switch value={this.state.value2} onValueChange={()=>{
                   if(this.state.value2){
                    this.setState({value2:false})
                    this.setState({value1:true})
                 
                }
                else{
                 this.setState({value2:true})
                 this.setState({value1:false})
                }
               }}></Switch>
            </View>
            <View style={{padding:20,backgroundColor:'#F5F5F5'}}>
            <Text style={{fontSize:25,color:'black'}}>Notifications</Text>
            </View>
            <View style={styles.setting}>
               <Text style={{fontSize:20 ,padding:15}}>Account Info</Text>
              
            </View>
            <View style={styles.setting}>
               <Text style={{fontSize:20,padding:15}}>Newsletter</Text>
               
            </View>
            <View style={{padding:20,backgroundColor:'#F5F5F5'}}>
            <Text style={{fontSize:25,color:'black'}}>Brightness</Text>
            </View>
            <View style={styles.setting}>
            <Slider style={{padding:15}}></Slider>
            </View>
           </View>
        )
    }
   
    
}

const styles=StyleSheet.create({
    container: {
       flex: 1,
        flexDirection: 'column',
        width:'100%',
       
        backgroundColor:'white',
        
      },
      setting:{
          backgroundColor:'white',
         
          padding: 20,
          borderBottomWidth: 2,
          borderBottomColor:'#E1E1E1',
      }
    })