import { View, Text ,StatusBar,Image,TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'

export default function HopThu() {
  return (
    <SafeAreaView style={{flex:1 ,flexDirection:'column',backgroundColor:'white'}}>
      <StatusBar style='light'/>
      {/* Component Header */}
      <View style={{height:'5%',width:'100%',borderBottomWidth:1,justifyContent:'center',borderColor:'gray'}}>
        <Text style={{fontSize:24,marginLeft:20,fontWeight:600}}>Hộp thư</Text>
      </View>

      {/* component tương tác */}
      <View style={{height:150,width:'100%'}}>
          <View style={{}}>
            <Text style={{fontSize:20,fontWeight:500,marginLeft:20,marginTop:20}}>Thao tác nhanh</Text>
          </View>
      
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <View style={{height:50,width:50,marginTop:20,marginLeft:30}}>
                <Image style={{width:40,height:40}} source={require('../image/mail.png')} resizeMode='stretch'/>
                <Text style={{fontSize:12,fontWeight:500,marginLeft:10,paddingTop:5}}>Thư</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row'}}>
              <View style={{height:50,width:50,marginTop:20,marginLeft:30}}>
                <Image style={{width:40,height:40}} source={require('../image/help.png')} resizeMode='stretch'/>
                <Text style={{fontSize:12,fontWeight:500,paddingTop:5}}>Support</Text>
              </View>
            </TouchableOpacity>

          </View>

          
      </View>

      {/* component trò chuyện*/}
      <View style={{height:150,width:'100%'}}>
          <View>
            <Text style={{fontSize:20,fontWeight:500,marginLeft:20,marginTop:20}}>Trò chuyện</Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',height:90,marginTop:10,marginLeft:10,alignItems:'center'}}>
            <Image style={{width:80,height:80}} source={require('../image/icon-messenger.png')} resizeMode='stretch'/>  
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'500'}}>Bạn chưa có tin nhắn</Text>         
            </View>
          </View>
      </View>
    </SafeAreaView>
  )
}