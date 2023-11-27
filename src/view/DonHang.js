import { View ,SafeAreaView,StatusBar,useWindowDimensions,StyleSheet,Text,Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function LichSu() {
    return (
      <View style={{ flex: 1 ,flexDirection:'row',backgroundColor:'white'}}>
        <View style={{width:100,height:40,backgroundColor:'#eee',borderWidth:1,borderRadius:50,justifyContent:'center',alignItems:'center',marginLeft:20,marginTop:20,borderColor:'gray'}}>
            <Text style={{fontSize:20,fontWeight:500}}>Lịch sử</Text>    
        </View>  
        <View style={{width:150,height:40,backgroundColor:'#eee',borderWidth:1,borderRadius:50,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginLeft:20,marginTop:20}}>
            <Text style={{fontSize:20,fontWeight:500}}>Trạng thái</Text> 
            <AntDesign name="down" size={24} color="black" />   
        </View>
      </View>
    );
  }
  
  function DonHangDatTruoc() {
    return (
      <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:'white'}}>
        <Image source={require('../image/donhang.png')} resizeMode='contain' style={{width:300,height:200}}/>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:10}}>Đơn hàng hiện tại hiển thị tại đây!</Text>
        <Text style={{fontSize:16,textAlign:'center',marginHorizontal:50,marginTop:5}}>Nếu không thấy đơn hàng của mình, vui lòng kéo xuống tải lại trang</Text>
      </View>
    );
  }

  function DatTruoc() {
    return (
      <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:'white'}}>
        <Image source={require('../image/donhang.png')} resizeMode='contain' style={{width:300,height:200}}/>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:10}}>Bạn muốn đặt trước đơn hàng?</Text>
        <Text style={{fontSize:16,textAlign:'center',marginHorizontal:50,marginTop:5}}>Đặt trước đơn hàng, tận hưởng ngày nhàn tênh!</Text>
      </View>
    );
  }
  
const Tab = createMaterialTopTabNavigator();
export default function DonHang() {


  return (
    <SafeAreaView style={{flex:1 ,backgroundColor:'white'}}>
        <StatusBar style='light'/>
        {/* Component Header */}
        <View style={{height:'5%',width:'100%',borderBottomWidth:1,justifyContent:'center'}}>
            <Text style={{fontSize:24,marginLeft:20,fontWeight:600}}>Đơn hàng</Text>
        </View>
        <Tab.Navigator>
            
            <Tab.Screen name="Đơn hàng" component={DonHangDatTruoc} />
            <Tab.Screen name="Đặt trước" component={DatTruoc} />
            <Tab.Screen name="Lịch sử" component={LichSu} />
        </Tab.Navigator>

    </SafeAreaView>
  
  );
}
