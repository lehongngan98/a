import { View, Text ,StatusBar,TextInput,ScrollView,Image, TouchableOpacity,Dimensions,FlatList,SafeAreaView} from 'react-native'
import React, { useState } from 'react'; 
import { Feather,FontAwesome } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const flatListImgCar = [
  {
      id: 1,
      image: require('../image/view-car1.png'),
  },
  {
      id:2,
      image: require('../image/view-car2.png'),
  },
  {
      id:3,
      image: require('../image/view-car3.png'),
  },
  {
      id:4,
      image: require('../image/view-car4.png'),
  },

]
const flatListImgFood = [
  {
      id: 1,
      image: require('../image/view-food1.png'),
  },
  {
      id:2,
      image: require('../image/view-food2.png'),
  },
  {
      id:3,
      image: require('../image/view-food3.png'),
  },
  {
      id:4,
      image: require('../image/view-food4.png'),
  },

]
const flatListImgSend = [
  {
      id: 1,
      image: require('../image/view-send1.png'),
  },
  {
      id:2,
      image: require('../image/view-send2.png'),
  },


]

const renderItemCar = ({item,index}) =>{
  
  return(
    <TouchableOpacity style={{width:0.8*windowWidth,height:200,backgroundColor:'white',borderRadius:10,margin:10}}>
      <Image style={{width:'100%',height:'100%'}}resizeMode='stretch' source={item.image}/>
    </TouchableOpacity>
  )
}
const renderItemFood = ({item,index}) =>{
  
  return(
    <TouchableOpacity style={{width:0.8*windowWidth,height:200,backgroundColor:'white',borderRadius:10,margin:10}}>
      <Image style={{width:'100%',height:'100%'}}resizeMode='stretch' source={item.image}/>
    </TouchableOpacity>
  )
}
const renderItemSend= ({item,index}) =>{
  
  return(
    <TouchableOpacity style={{width:0.8*windowWidth,height:200,backgroundColor:'white',borderRadius:10,margin:10}}>
      <Image style={{width:'100%',height:'100%'}}resizeMode='stretch' source={item.image}/>
    </TouchableOpacity>
  )
}

export default function Home({navigation}) {
 
  const [dataCar,setDataCar] = useState(flatListImgCar);
  const [dataFood,setDataFood] = useState(flatListImgFood);
  const [dataSend,setDataSend] = useState(flatListImgSend);
  const [isRender,setisRender] = useState(false) ;  


  

  return (
    
    <SafeAreaView style={{flex:1 ,flexDirection:'column',backgroundColor:'white'}}>
      
      <StatusBar barStyle='dark-content'/>
      {/* Component Header */}
      <View style={{height:70,width:'100%',backgroundColor:'green',flexDirection:'row'}}>
         {/* Search */}
        <View style={{width:'70%',height:70,marginTop:12}}>
         <TouchableOpacity>
          <View style={{backgroundColor:'white',marginLeft:10,borderRadius:100,padding:10,flexDirection:'row',alignItems:'center'}}>
              <Feather name="search" size={24} color="black" />
              <Text style={{fontSize:15,color:'gray'}}>Tìm dịch vụ, món ngon, địa điểm</Text>
            </View>
         </TouchableOpacity>
        </View>
        {/* User */}
        <View style={{width:120,height:120,alignItems:'center',marginTop:12}}>
          <TouchableOpacity style={{height:'35%',width:'40%'}}
            onPress={() => navigation.navigate('Thông Tin Tài Khoản')}
          >
            <View style={{width:'100%',height:'100%', backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:100}}>
                <FontAwesome name="user" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Component Body */}
      <View style={{height:'85%',width:'100%',flexDirection:'column',backgroundColor:'white'}}>
        <ScrollView style={{marginHorizontal:10}} pagingEnabled={true} >
          {/* Component service */}
          <View style={{height:100,width:'100%',flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              {/* Image goride */}
              <TouchableOpacity style={{width:'20%',height:'70%'}}
                onPress={() => navigation.navigate('Gojek')}
              >
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',padding:5}}>
                  <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/bike.png')} resizeMode='contain'/>
                  <Text style={{fontSize:15,fontWeight:'600'}}>GoBike</Text>
                </View>
              </TouchableOpacity>

               {/* Image gocar */}
               <TouchableOpacity style={{width:'20%',height:'70%'}}
                onPress={() => navigation.navigate('Gocar')}
               >
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',padding:5}}>
                  <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/car.png')}resizeMode='contain'/>
                  <Text style={{fontSize:15,fontWeight:'600'}}>GoCar</Text>
                </View>
               </TouchableOpacity>
               

               {/* Image gofood */}
               <TouchableOpacity style={{width:'20%',height:'70%'}}
                onPress={() => navigation.navigate('Gofood')}
               >
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',padding:5}}>
                  <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/menu.png')}resizeMode='contain'/>
                  <Text style={{fontSize:15,fontWeight:'600'}}>GoFood</Text>
                </View>
               </TouchableOpacity>

               {/* Image gosend */}
               <TouchableOpacity style={{width:'20%',height:'70%'}}
                onPress={() => navigation.navigate('Gosend')}
               >
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',padding:5}}>
                  <Image style={{width:'100%',height:'100%',marginTop:20}} source={require('../image/gosend.png')}resizeMode='contain'/>
                  <Text style={{fontSize:15,fontWeight:'600'}}>GoSend</Text>
                </View>
               </TouchableOpacity>
          </View>

          {/* Component QC */}
          <View style={{backgroundColor:'green',height:250,width:'100%'}}>
            <TouchableOpacity style={{alignContent:'center'}}>
              <Image style={{width:'100%',height:'100%'}} source={require('../image/home-qc.png')} resizeMode='stretch'/>
            </TouchableOpacity>
          </View>

          {/* Component Gocar Goride */}
          <View style={{height:400,width:'100%'}}>
            <View style={{height:40,width:'100%',flexDirection:'row',alignItems:'center',marginTop:10}}>
              <View style={{height:25,width:25,justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../image/search.png')} resizeMode='stretch'/>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'600',marginLeft:5}}>gocar goride</Text>
              </View>
            </View>

            <View style={{height:30,width:'100%'}}>
              <Text style={{fontSize:18,fontWeight:'800',marginTop:5}}>Hè phiêu lưu ký,deal xịn hết ý, Gojek nha!</Text>
            </View>

            <View style={{backgroundColor:'white',height:70,width:'100%',flexDirection:'row'}}>              
              <Text style={{fontSize:18,color:'gray'}}>
                <View style={{width:30,height:30}}>
                  <Image style={{width:'100%',height:'100%'}} source={require('../image/car1.png')} resizeMode='stretch'/>
                </View>
                <View style={{width:20,height:30,marginHorizontal:5}}>
                  <Image style={{width:'100%',height:'100%'}} source={require('../image/bike.png')} resizeMode='stretch'/>
                </View>
                Đặt xe đi học,đi làm,đi chill giảm ngay 50% với mã GOJEKNHA và GOCARNHA</Text>
            </View>

            {/* scrollview gocar goride */}
           <View style={{height:270,width:'100%'}}>
            <FlatList
             data={dataCar}
             renderItem={renderItemCar}
             horizontal={true}
             style={{marginTop:10}}>
            </FlatList>
           </View>
          </View>

          {/* Component Gofood */}
          <View style={{height:400,width:'100%'}}>
            <View style={{height:40,width:'100%',flexDirection:'row',alignItems:'center',marginTop:10}}>
              <View style={{height:25,width:25,justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../image/cutlery.png')} resizeMode='stretch'/>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'600',marginLeft:5}}>gofood</Text>
              </View>
            </View>

            <View style={{height:30,width:'100%'}}>
              <Text style={{fontSize:18,fontWeight:'800',marginTop:5}}>Ở đây có món ngon bạn thích!</Text>
            </View>

            <View style={{backgroundColor:'white',height:70,width:'100%',flexDirection:'row'}}>              
              <Text style={{fontSize:18,color:'gray'}}>
                <View style={{width:30,height:30}}>
                  <Image style={{width:'100%',height:'100%'}} source={require('../image/hamburger.png')} resizeMode='stretch'/>
                </View>               
                Yêu thích chiếc bụng đói với vũ trụ món ngon trên GooFood nha!</Text>
            </View>

            {/* scrollview gofood */}
           <View style={{height:270,width:'100%'}}>
            <FlatList
             data={dataFood}
             renderItem={renderItemFood}
             horizontal={true}
             style={{marginTop:10}}>              
            </FlatList>
           </View>
          </View>
          

          {/* Component Gosend */}
          <View style={{height:450,width:'100%'}}>
            <View style={{height:40,width:'100%',flexDirection:'row',alignItems:'center',marginTop:10}}>
              <View style={{height:25,width:25,justifyContent:'center',alignItems:'center'}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../image/gift-box.png')} resizeMode='stretch'/>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'600',marginLeft:5}}>gosend</Text>
              </View>
            </View>

            <View style={{height:30,width:'100%'}}>
              <Text style={{fontSize:18,fontWeight:'800',marginTop:5}}>Gửi gì cứ GoSend đi!</Text>
            </View>

            <View style={{backgroundColor:'white',height:50,width:'100%',flexDirection:'row'}}>              
              <Text style={{fontSize:18,color:'gray'}}>
                <View style={{width:30,height:30}}>
                  <Image style={{width:'100%',height:'100%'}} source={require('../image/giftbox.png')} resizeMode='stretch'/>
                </View>
                Giá hạt dẻ,giao nhanh,nhận khoẻ!</Text>
            </View>

            {/* scrollview gosend */}
           <View style={{height:270,width:'100%'}}>
            <FlatList
             data={dataSend}
             renderItem={renderItemSend}
             horizontal={true}
             style={{marginTop:10}}>    
            </FlatList>
           </View>
          </View>
          {/* <View style={{height:70,width:'100%'}}/> */}
        </ScrollView>
      </View>
      <View style={{width:'100%',height:200}}/>

    </SafeAreaView>
    
  )
}

{/* <TextInput placeholder='Search'style={{backgroundColor:'white',marginLeft:10,marginTop:'30%',borderRadius:100,padding:10}}/> */}