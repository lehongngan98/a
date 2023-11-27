import { View, Text ,Image, ScrollView, FlatList} from 'react-native'
import React from 'react'
import { Feather,FontAwesome ,FontAwesome5,AntDesign,Entypo,MaterialIcons,Ionicons} from '@expo/vector-icons';

const TaiKhoan = ({route}) => {
    const { user } = route.params || {};
    console.log(user);
  return (
    <View style={{marginLeft:20}}>
      
      
      <ScrollView >
        <View style={{height:70,width:'100%',marginTop:20,flexDirection:'row'}}>
                <View style={{width:50,height:50, backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:100}}>
                    <Image source={{uri:user.image}} style={{resizeMode:'cover',width:50,height:50,borderRadius:100}}/>
                    
                </View>
                <View style={{width:'65%',height:'100%',marginLeft:20}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{user.name}</Text>
                    <Text style={{fontSize:15,color:'gray',fontWeight:'bold',marginTop:5}}>{user.mail}</Text>
                    <Text style={{fontSize:15,color:'gray',fontWeight:'bold',marginTop:5}}>+{user.phone}</Text>
                </View>
                <View style={{width:'20%',height:'100%'}}>
                    <Feather name="edit" size={24} color="black" />
                </View>
                
               
            
        </View>
        <View style={{marginTop:40,marginBottom:5}}>
                <Text style={{fontSize:20,fontWeight:500}}>Tài Khoản</Text>
                
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <FontAwesome5 name="clipboard-list" size={24} color={ "black"} />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Đơn Hàng</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text>Xem chuyển đi và lịch sử</Text>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign name="gift" size={24} color={"black"} />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Ưu đãi</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <FontAwesome name="credit-card" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Phương thức thanh toán</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Entypo name="help-with-circle" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Trợ giúp & yêu cầu hổ trợ</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons name="language" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Thay đổi ngôn ngữ</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Entypo name="location" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Địa điểm quen thuộc</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="people" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Giới thiệu bạn bè</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="notifications" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Thông báo</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons name="security" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Bảo mật tài khoản</Text>
                <View style={{width:55,height:'60%',backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:40,marginLeft:10}}>
                    <Text style={{fontSize:16,color:'white',fontWeight:'bold',marginTop:5}}>Mới</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Ionicons name="settings" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Quản lý tài khoản</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:40,marginBottom:5}}>
                <Text style={{fontSize:20,fontWeight:500}}>Thông tin chung</Text>
        </View>


        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <FontAwesome5 name="clipboard-list" size={24} color={ "black"} />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Quy chế</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <FontAwesome5 name="clipboard-list" size={24} color={ "black"} />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Chính sách bảo mật</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <FontAwesome5 name="clipboard-list" size={24} color={ "black"} />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Điều khoản dịch vụ</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>

        <View style={{marginTop:10,width:'100%',height:50,justifyContent:'space-between',flexDirection:'row',borderBottomWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign name="star" size={24} color="black" />
                <Text style={{marginLeft:10,fontSize:16,fontWeight:700}}>Đánh giá ứng dụng Gojek</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginRight:20}}>
                <Text>4.77.0</Text>
            </View>
        </View>


        <View style={{width:50,height:70}}/>
            
       
      </ScrollView>



    </View>
  )
}

export default TaiKhoan