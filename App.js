import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TextInput, Button, Alert, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Main from "./index";




const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const getUserAPI = async () => {
    try {
      const response = await fetch('https://6561fb1edcd355c083246fec.mockapi.io/user');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Image source={require('./src/image/logo-app.png')} />
      <View style={{ alignItems: 'center', height: 350, justifyContent: 'center' }}>
        <Image source={require('./src/image/logo-main.png')} style={{ resizeMode: 'contain', width: '80%', height: 400 }} />
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 43 }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Số điện thoại</Text>
        <Text style={{ color: 'red' }}>*</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          placeholder="Nhập Số Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={{
            width: '80%',
            height: 40,
            marginLeft: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            paddingLeft: 10,
            fontSize: 20,
            marginTop: 10,
          }}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: '80%',
            height: 40,
            backgroundColor: 'green',
            marginLeft: 10,
            marginTop: 20,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={async () => {
            if (phone.length === 0) {
              Alert.alert('Thông báo', 'Bạn chưa nhập số điện thoại');
            } else {
              const data = await getUserAPI();
              console.log(data);
              const isPhoneExist = data.some((item) => item.phone === phone);
              // lấy ra item có phone trùng với phone nhập vào
              const getuser = data.find((item) => item.phone === phone);
              console.log(getuser);
              
              if (isPhoneExist) {
                navigation.navigate(
                  'Main',

                  
                  { user: getuser },
                  
                );
              } else {
                Alert.alert('Thông báo', 'Số điện thoại không tồn tại');
              }
            }
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};








export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
