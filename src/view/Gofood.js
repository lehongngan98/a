import { View, Text,Image, TextInput, FlatList, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView ,TouchableOpacity} from 'react-native'
import { Feather,FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Gofood = () => {

    const[imagemonngon,setImagemonngon] = useState()
    const [food_inf,setFood_inf] = useState()
    const [list_food,setList_food] = useState()
    const getUserAPI = async () => {
        try {
          const response = await fetch('https://6561fb1edcd355c083246fec.mockapi.io/ImgMonNgon');
          const responsemonngon = await fetch('https://65636da6ee04015769a7312d.mockapi.io/food_inf');
          if (!response.ok || !responsemonngon.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          
          return data
        } catch (error) {
          console.error(error);
          return [];
        }
      };
      const getUserAPIFood_Inf = async () => {
        try {          
          const responsemonngon = await fetch('https://65636da6ee04015769a7312d.mockapi.io/food_inf');
          if (!responsemonngon.ok ) {
            throw new Error('Network response was not ok');
          }
          
          const datamonngon = await responsemonngon.json();
          return datamonngon
        } catch (error) {
          console.error(error);
          return [];
        }
      };

      const getUserAPIList_food = async () => {
        try {          
          const responsemonngon = await fetch('https://65636da6ee04015769a7312d.mockapi.io/list_food');
          if (!responsemonngon.ok ) {
            throw new Error('Network response was not ok');
          }
          
          const datamonngon = await responsemonngon.json();
          return datamonngon
        } catch (error) {
          console.error(error);
          return [];
        }
      };

      useEffect(() => {
        const fetchData = async () => {
            const data = await getUserAPI();
            const datafood_inf = await getUserAPIFood_Inf();
            const datalist_food = await getUserAPIList_food();
            console.log(data);
            console.log("food_inf: "+datafood_inf);
            console.log("list_food: "+datalist_food);
            setImagemonngon(data);
            setFood_inf(datafood_inf);
            setList_food(datalist_food);
        };
        fetchData();
      }, []);
      

  return (
    <ScrollView style={{flex:1,backgroundColor:'white'}}>
        
            <View >
                <Image source={require('../image/image-header.png')} style={{resizeMode:'contain',width:'100%',height:220}} />
            </View>
            <View style={{alignItems:'center',marginTop:-20}}>
                <View style={{backgroundColor:'white',marginLeft:10,borderRadius:100,padding:5,flexDirection:'row',alignItems:'center',borderColor:'gray',borderWidth:1,width:'80%'}}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput style={{fontSize:20}} 
                    placeholder='Tìm dịch vụ, món ngon, địa điểm'
                    ></TextInput>
                </View>
            </View>
            <View>
                <Image source={require('../image/image-food.png')}style={{resizeMode:'contain',width:'100%',height:250}}/>
            </View>
            <Text style={{marginLeft:20,fontSize:20,fontWeight:700}}>Đặt món ngon giao tận nơi</Text>
            <Text style={{marginLeft:20,fontSize:15,fontWeight:700,color:'gray',marginTop:10}}>Thêm nhiều khuyến mãi tiết kiệm hơn</Text>
            <FlatList           
                data={imagemonngon}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Image source={{uri:item.image}} style={{resizeMode:'contain',width:200,height:200}}/>
                    </View>
                )}

            />
            <View>
                <Text style={{marginLeft:20,fontSize:20,fontWeight:700 ,marginTop:20}}>Ăn ngon mỗi ngày cùng Gofood</Text>
                <Text style={{marginLeft:20,fontSize:15,fontWeight:700,color:'gray',marginTop:10,marginBottom:10}}>Hàu bao nhẹ nhõm</Text>                
            </View>
            
            <FlatList
                data={food_inf}
                numColumns={2}
                
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={{flexDirection:'row',height:300}}>
                        <View style={{marginLeft:20,marginRight:5}}>
                            <Image source={{uri:item.image}} style={{resizeMode:'cover',width:180,height:180,borderRadius:15}}/>
                            <Text style={{color:'gray',marginLeft:5,marginTop:5}}>{item.distance}</Text>
                            <View style={{width:180,height:50}}>
                                <Text style={{fontSize:20,fontWeight:700,marginLeft:5,}}>{item.name}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <AntDesign name="star" size={24} color="#096" />
                                <Text style={{marginLeft:5,color:'gray'}}>{item.vote} đánh giá</Text>
                            </View>
                        </View>
                    </View>
                )}
            />

            <View>
                <Text style={{marginLeft:20,fontSize:20,fontWeight:700 ,marginTop:20}}>Thêm gợi ý để bạn chọn</Text>
                <Text style={{marginLeft:20,fontSize:15,fontWeight:700,color:'gray',marginTop:10}}>Toàn món tuyển đảm bảo bạn sẽ mê</Text>                
            </View>
      
            <FlatList
                data={list_food}
                
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={{flexDirection:'row',height:330,width:'100%',marginTop:10}}>
                        
                            <Image source={{uri:item.image}} style={{resizeMode:'contain',width:'100%',height:330,borderRadius:15}}/>
                            
                        
                    </View>
                )}
            />



        <View style={{width:'100%',height:90}}></View>
    </ScrollView>
  )
}

export default Gofood