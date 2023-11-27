import { View, Text ,Image,StyleSheet, Button} from 'react-native'
import MapView ,    {Marker}from 'react-native-maps';
import React ,{useEffect,useState}from 'react'
import * as Location from 'expo-location';
import { SearchBar } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Gocar = () => {
  const [region, setRegion] = useState({ })
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
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
        <View style={{width:'100%',height:300,borderRadius:30}}>
          
            <MapView style={styles.map} 
                region={region}
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

export default Gocar

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      
  },
  map: {
      width: '100%',
      height: '100%',
    },
})