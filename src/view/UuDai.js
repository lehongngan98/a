import {StatusBar ,View, Text ,SafeAreaView,Image, ScrollView} from 'react-native'
import React from 'react'
import { Feather,FontAwesome ,FontAwesome5,AntDesign,Entypo,MaterialIcons,Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function UuDai() {
  return (
    <SafeAreaView style={{flex:1 ,flexDirection:'column',backgroundColor:'white'}}>
      <StatusBar style='light'/>
      {/* Component Header */}
      
      <View style={{height:'5%',width:'100%',borderBottomWidth:1,justifyContent:'center',borderColor:'gray'}}>
        <Text style={{fontSize:24,marginLeft:20,fontWeight:600}}>Ưu đãi</Text>
      </View>
      <ScrollView>
        <View style={{width:'100%',height:100,marginTop:20,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{ backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 5,borderRadius:10 }}elevation={5} >
                <View style={{width:120,height:100,}}  >
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}} >
                    <Text style={{fontSize:20}}>0</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <View>
                    <Text style={{fontSize:16,marginTop:10,marginHorizontal:10,fontWeight:600}}>Đơn hàng</Text>
                </View>
                <View >
                    <Text style={{fontSize:16,marginTop:10,marginHorizontal:10}}>Sẳn sàng</Text>
                </View>
                <View style={{borderBottomColor:'orange',borderBottomWidth:5,marginTop:5,width:'80%',marginHorizontal:10,borderRadius:100}}/>
            </View>
        </View>

            <View style={{ backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 5,borderRadius:10 }}elevation={5} >
                <View style={{width:120,height:100}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}} >
                    <Text style={{fontSize:20}}>0</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <View>
                    <Text style={{fontSize:16,marginTop:10,marginHorizontal:10,fontWeight:600}}>Gói dịch vụ</Text>
                </View>
                <View >
                    <Text style={{fontSize:16,marginTop:10,marginHorizontal:10}}>Kịch hoạt</Text>
                </View>
                <View style={{borderBottomColor:'purple',borderBottomWidth:5,marginTop:5,width:'80%',marginHorizontal:10,borderRadius:100}}/>
                </View>
            </View>

            <View style={{ backgroundColor: 'white', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 5,borderRadius:10 }}elevation={5} >
                <View style={{width:120,height:100,}}  >
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}} >
                    <Text style={{fontSize:20}}>0</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
                <View>
                    <Text style={{fontSize:16,marginTop:10,marginHorizontal:10,fontWeight:600}}>Nhiệm vụ</Text>
                </View>
                <View >
                    <Text style={{fontSize:16,marginTop:10,marginHorizontal:10}}>Xử lí ngay</Text>
                </View>
                <View style={{borderBottomColor:'green',borderBottomWidth:5,marginTop:5,width:'80%',marginHorizontal:10,borderRadius:100}}/>
                </View>
            </View>
        </View>

        <View style={{width:'90%',height:40,marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderWidth:1,borderRadius:60,borderColor:'gray'}}>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
            <AntDesign name="gift" size={24} color={ "orange"} />
            <Text style={{marginLeft:10,fontWeight:500,fontSize:16}}>Bạn có mã khuyến mãi?</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
        </View>

        
        <Text style={{fontSize:24,fontWeight:500,marginTop:30,marginLeft:20}}>Ưu đãi hot phải đặt ngay</Text>
        
        <View style={{width:'100%',height:50,marginTop:20,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{width:80,height:40,justifyContent:'center',alignItems:'center',borderRadius:30,backgroundColor:'#ddd'}}>
                <Text style={{fontSize:16,fontWeight:500}}>GoCar</Text>
            </View>
            <View style={{width:80,height:40,justifyContent:'center',alignItems:'center',borderRadius:30,backgroundColor:'#ddd'}}>
                <Text style={{fontSize:16,fontWeight:500}}>GoFood</Text>
            </View>
            <View style={{width:80,height:40,justifyContent:'center',alignItems:'center',borderRadius:30,backgroundColor:'#ddd'}}>
                <Text style={{fontSize:16,fontWeight:500}}>GoRide</Text>
            </View>
            <View style={{width:80,height:40,justifyContent:'center',alignItems:'center',borderRadius:30,backgroundColor:'#ddd'}}>
                <Text style={{fontSize:16,fontWeight:500}}>GoSend</Text>
            </View>
        </View>

        {/* 3 hình ảnh  */}
        
        <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../image/uudai1.png')} style={{width:'90%',height:200}} resizeMode='contain'/>
            <Image source={require('../image/uudai2.png')} style={{width:'90%',height:200}} resizeMode='contain'/>
            <Image source={require('../image/gojek3.png')} style={{width:'90%',height:200}} resizeMode='contain'/>
            <Image source={require('../image/gojek4.png')} style={{width:'90%',height:200}} resizeMode='contain'/>

        </View>




            <View style={{height:150,width:'100%',marginLeft:20,marginTop:20}}>
                <View style={{height:40,width:'100%',flexDirection:'row',alignItems:'center',marginTop:10}}>
                <View style={{height:25,width:25,justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../image/search.png')} resizeMode='stretch'/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'600',marginLeft:5}}>gojek</Text>
                </View>
                </View>

                <View style={{height:50,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontWeight:'800',maxWidth:230}}>Ưu đãi đặt biệt dành cho bạn</Text>
                </View>

                <View style={{height:70,width:'100%',flexDirection:'row'}}>              
                
                    <View style={{width:30,height:30}}>
                        <Image source={require('../image/smile-star.png')} style={{width:30,height:30}}/>
                    </View>               
                    <Text style={{fontSize:18,color:'gray',marginRight:30,maxWidth:'90%',fontWeight:500}}>Siêu nhiều chương trình hấp dẫn đang chờ bạn!</Text>
                </View>
            </View>

            <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../image/gojek1.png')} style={{width:'90%',height:200}} resizeMode='contain'/>
                <Image source={require('../image/gojek2.png')} style={{width:'90%',height:200,marginTop:20}} resizeMode='contain'/>
            </View>


            <View style={{height:150,width:'100%',marginLeft:20,marginTop:20}}>
                <View style={{height:40,width:'100%',flexDirection:'row',alignItems:'center',marginTop:10}}>
                <View style={{height:25,width:25,justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../image/search.png')} resizeMode='stretch'/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'600',marginLeft:5}}>gojek</Text>
                </View>
                </View>

                <View style={{height:50,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontWeight:'800',maxWidth:230}}>Đặt gojek càng nhiều nhận thưởng càng chill</Text>
                    <View style={{width:120,height:50,backgroundColor:'#aefa99',marginRight:30,justifyContent:'center',alignItems:'center',borderRadius:50}}>
                        <Text style={{fontSize:18,fontWeight:700,color:'green'}}>Xem tất cả</Text>
                    </View>
                </View>

                <View style={{height:70,width:'100%',flexDirection:'row'}}>              
                
                    <View style={{width:30,height:30}}>
                        <Image source={require('../image/smile-star.png')} style={{width:30,height:30}}/>
                    </View>               
                    <Text style={{fontSize:18,color:'gray',marginRight:30,maxWidth:'90%',fontWeight:500}}>Yêu thích chiếc bụng đói với vũ trụ món ngon trên GooFood nha!</Text>
                </View>
            </View>

            <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../image/uudai3.png')} style={{width:'90%',height:200}} resizeMode='contain'/>
                <Image source={require('../image/uudai4.png')} style={{width:'90%',height:200,marginTop:20}} resizeMode='contain'/>
            </View>

        
            <View style={{height:50,width:'100%',marginLeft:20,marginTop:20}}/>
        </ScrollView>
    </SafeAreaView>
  )
}