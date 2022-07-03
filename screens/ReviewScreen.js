import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
ScrollView,
  FlatList,Dimensions
} from 'react-native';


const RatingComponent = () => {
  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       justifyContent:'center',
        marginLeft:10,
        marginVertical:5
},

r_container: {
  flexDirection: 'row',
 justifyContent:'flex-start',
 
  },
 
  
  r_image: {
    width: 10,
    height: 10,
  },

    image: {
      width: 18,
      height: 18,
    },
   
rating_number:{
  
   color: 'black',
      fontSize: 12,
      
    }
  });
  return (
    <View >


      <View style={styles.container}>
        
        
      <Image
        style={styles.image}
        source={require('../images/star-filled.png')}
      />
      <Image
        style={styles.image}
        source={require('../images/star-filled.png')}
      />
      <Image
        style={styles.image}
        source={require('../images/star-filled.png')}
      />
      <Image
        style={styles.image}
        source={require('../images/star-filled.png')}
      />
      <Image
        style={styles.image}
        source={require('../images/star-filled.png')}
      />
     
      
     </View>
     
     
    </View>
    
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width)
const DescriptionCard = () =>{

  return(
    <View style={cardstyles.card_container}>
      <Text style={{fontSize:16,textAlign:'left',fontWeight:'bold',color:'black',paddingLeft:10,paddingTop:5}}>John Doe</Text>
      
      <Text style={{fontSize:14,textAlign:'justify',color:'black',marginStart:4,padding:5}}> It is a good place for family getaways.Really enjoyed it. The climate is refreshing</Text>
      <Text style={{fontSize:12,textAlign:'right',fontWeight:'normal',marginRight:15}}>1 month ago</Text>
     
    
    </View>
  )
}
const cardstyles = StyleSheet.create({
  card_container: {
    width: deviceWidth-20,
   height: 100,
   borderRadius: 20,
   shadowColor:'#000',
   marginVertical:10,
   margin:10,
   backgroundColor: '#F5F5F5',
   shadowOffset:
   {
    width:5,
    height:5
   },
    shadowOpacity:0.25,
    elevation:7,
    shadowRadius: 5
  },
  
})


  





const ReviewScreen = () => {
  const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 4,
      backgroundColor: 'white',
      borderColor: '#38b6ff',
      borderWidth: 1,
    },
    
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    /*
    text_input: {
      height: 40,
      width: '70%',
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 10,
      backgroundColor: 'white',
    },*/

    
      reviews_container: {
        marginTop: 0,
        margin: 15,
        paddingBottom: 15,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 2,
    },
  });

  //    <TextInput style={styles.text_input} />
  //<Button title={'Back'} onPress={() => {}}></Button>
  return (
    <View>
      <View style={styles.navbar}>

        <Text style={styles.title}>Reviews</Text>

      </View>
      
     <Text style={{fontSize:44,color:"black",paddingHorizontal:5,marginBottom:2,marginStart:10,textAlign:'center'}}>5.0</Text>
     <Text style={{fontSize:13,paddingHorizontal:5,marginBottom:2,marginStart:10,textAlign:'center'}}>51,229 reviews</Text>
      <RatingComponent/><ScrollView>
      <DescriptionCard/>
      <DescriptionCard/>
      <DescriptionCard/>
      <DescriptionCard/>
      <DescriptionCard/>
      <DescriptionCard/>
      <DescriptionCard/>
      </ScrollView>
    </View>
  )
            };


            export default ReviewScreen;
        
