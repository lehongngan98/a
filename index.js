// Desc: file chính của ứng dụng Gojek
import { StyleSheet, Text, View } from 'react-native';
import {Home, DonHang, HopThu, UuDai,TaiKhoan,DatGojek,Gocar,Gofood,Gosend} from "./src/view/index.js";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import {Entypo,AntDesign,FontAwesome5} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    backgroundColor: 'white',
    paddingTop: 10,
  }
}

export default function Index({route}) {
  const { user } = route.params || {};
  console.log(user);
  return (
    
      <Tab.Navigator screenOptions={screenOptions} >
        {/* Screen Trang Chủ */}
        <Tab.Screen 
        name="Home" 
        component={StackHome}
        initialParams={{ user: user }}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <Entypo name="home" size={24} color={ focused ? "#88b77b" : "black"}/>
              <Text style={{fontSize:12,color:'#16247d'}}>Trang Chủ</Text>
            </View>
            )
          }
        }}
        />
        {/* Screen Ưu Đãi */}
        <Tab.Screen 
        name="UuDai" 
        component={UuDai}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems:'center',justifyContent:'center'}}>
             <AntDesign name="gift" size={24} color={ focused ? "#88b77b" : "black"} />
              <Text style={{fontSize:12,color:'#16247d'}}>Ưu Đãi</Text>
            </View>
            )
          }
        }}/>

        {/* Screen Đơn Hàng */}
         <Tab.Screen 
        name="DonHang" 
        component={DonHang}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <FontAwesome5 name="clipboard-list" size={24} color={ focused ? "#88b77b" : "black"} />
              <Text style={{fontSize:12,color:'#16247d'}}>Đơn Hàng</Text>
            </View>
            )
          }
        }}/>

        {/* Screen Hộp Thư */}
        <Tab.Screen 
        name="HopThu" 
        component={HopThu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <MaterialIcons name="message" size={24} color={ focused ? "#88b77b" : "black"}/>
              <Text style={{fontSize:12,color:'#16247d'}}>Hộp Thư</Text>
            </View>
            )
          }
        }}/>
       
      </Tab.Navigator>
    
  );
}

function StackHome({route}) {
  const { user } = route.params || {};
  console.log("stackhome user:"+user);
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Trang Chủ" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Thông Tin Tài Khoản" component={TaiKhoan} initialParams={{ user: user }}/>
        <Stack.Screen name="Gojek" component={DatGojek}/>
        <Stack.Screen name="Gocar" component={Gocar}/>
        <Stack.Screen name="Gofood" component={Gofood}/>
        <Stack.Screen name="Gosend" component={Gosend}/>
        
      </Stack.Navigator>
    
  )
}


