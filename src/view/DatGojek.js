import { View, Text ,Image,StyleSheet, ImageBackground} from 'react-native'
import MapView ,    {Marker}from 'react-native-maps';
import React ,{useEffect,useState}from 'react'
import { SearchBar } from '@rneui/themed';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const DatGojek = () => {
  const [region, setRegion] = useState({ })

  const userLocation = async () => {
    // Yêu cầu quyền truy cập vị trí nền
    let { status } = await Location.requestForegroundPermissionsAsync();
    // Kiểm tra xem quyền đã được cấp hay chưa
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    // Lấy vị trí hiện tại (latitude và longitude) bất đồng bộ
    let location = await Location.getCurrentPositionAsync({});

    // Thiết lập khu vực sử dụng các tọa độ vị trí đã lấy được
    setRegion({

        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
  }

    useEffect(() => {
        userLocation()
    }, [  ])

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
    setSearch(search);
    };

  return (
    <View style={styles.container}>
        
       
        
        <View style={{width:'100%',height:200,borderRadius:30}}>
          
            <MapView style={styles.map} 
                region={region}
                initialRegion={region}
            >
                <Marker coordinate={region} />
            </MapView>
            
        </View>
        <View style={{width:'80%',height:200}}>
            <SearchBar
                placeholder="tìm địa điểm"
                onChangeText={updateSearch}
                value={search}
                platform="ios"
                searchIcon={{ size: 24 }}
            />
            <View style={{width:'100%',height:40,flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <View style={{ flexDirection:'row',width:150,height:'100%',borderRadius:50,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray'}}>
                    <MaterialCommunityIcons name="home-circle" size={24} color="gray" />
                    <Text style={{marginLeft:5,fontSize:16,fontWeight:500}}>Lưu nhà riêng</Text>
                </View>
                <View style={{ flexDirection:'row',width:150,height:'100%',borderRadius:50,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray'}}>
                    <MaterialCommunityIcons name="home-circle-outline" size={26} color="gray" />
                    <Text style={{marginLeft:5,fontSize:16,fontWeight:500}}>Lưu nhà riêng</Text>
                </View>
            </View>
        </View>
  
             
    </View>
  )
}

export default DatGojek

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        backgroundImage:'url(../image/bgr.png)'
    },
    map: {
        width: '100%',
        height: '100%',
      },
})