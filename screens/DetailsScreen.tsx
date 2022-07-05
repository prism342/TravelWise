import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions
} from 'react-native';

const RatingComponent = () => {
  const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
    image: {
      width: 25,
      height: 25,
    },
    rating_text: {
      color: 'black',
      fontSize: 16,
      paddingLeft: 5,
    },
  });
  return (
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
      <Text style={styles.rating_text}>5.0</Text>
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  const { width: screenWidth } = useWindowDimensions();

  const styles = StyleSheet.create({
    details_view: {
      display: 'flex',
    },
    favorite_icon: {
      width: 50,
      height: 50
    },
    title_container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 15,
      paddingBottom: 15,
      borderBottomColor: '#D9D9D9',
      borderBottomWidth: 2,
    },
    title: {
      fontSize: 22
    },
    address: {
      fontSize: 16
    },
    description_container: {
      marginTop: 0,
      margin: 15,
      paddingBottom: 15,
      borderBottomColor: '#D9D9D9',
      borderBottomWidth: 2,
    },
    review_button_container: {
      marginTop: 0,
      margin: 15,
      paddingBottom: 15,
      borderBottomColor: '#D9D9D9',
      borderBottomWidth: 2,
    },
    description: {
      fontSize: 16
    },
    row_container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    review: {
      fontSize: 20
    }
  });

  return (
    <View>
      <ScrollView>
        <View style={styles.details_view}>
          <Image
            style={{
              width: screenWidth,
              height: screenWidth,
              borderRadius: 8
            }}
            source={require('../images/toronto.jpg')}
          />
          <View style={styles.title_container}>
            <View style={{
              width: "80%"
            }}>
              <Text style={styles.title}>Toronto</Text>
              <Text style={styles.address}>Ontario, Canada</Text>
              <RatingComponent />
            </View>
            <TouchableOpacity>
              <Image
                style={styles.favorite_icon}
                source={require('../images/heart-filled.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description}>Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free- standing CN Tower.Toronto also has many green spaces, from the orderly oval of Queen’s Park to 400 - acre High Park and its trails, sports facilities and zoo.</Text>
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('Reviews')}}>
          <View style={styles.review_button_container}>
            <Text style={styles.review}>Reviews ></Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
