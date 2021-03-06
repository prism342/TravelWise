import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Dialog from 'react-native-dialog';

const places_data = [
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
  { name: 'Toronto', image_path: '../images/toronto.jpg', rating: 5.0 },
];

const RatingComponent = () => {
  const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    image: {
      width: 18,
      height: 18,
    },
    rating_text: {
      color: 'black',
      fontSize: 14,
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

const PortraitPlaceCard = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      //paddingVertical: 5,
      marginVertical: 5,
      //borderRadius: 10,
      //backgroundColor: 'green',
      borderColor: '#004aad',
      borderWidth: 1,
    },
    second_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 5,
      paddingRight: 8,
      paddingBottom: 2,
    },
    image: {
      width: 180,
      height: 180,
    },
    title: {
      color: 'black',
      fontSize: 16,
    },
    heart_icon: {
      width: 25,
      height: 25,
    },
  });

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/toronto.jpg')} />
        <View style={styles.second_container}>
          <View>
            <Text style={styles.title}>Toronto</Text>
            <RatingComponent />
          </View>
          <Image
            style={styles.heart_icon}
            source={require('../images/heart-filled.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

var setSearchDialogVisible: any = null;

function SearchDialog() {
  const [visible, setVisible] = useState(false);
  setSearchDialogVisible = setVisible;

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSearch = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Search places</Dialog.Title>
        <Dialog.Input></Dialog.Input>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Search" onPress={handleSearch} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 4,
      backgroundColor: 'white',
      borderColor: '#38b6ff',
      borderWidth: 1,
      height: 60,
    },
    search_icon: {
      width: 35,
      height: 35,
    },
    favorite_icon: {
      width: 35,
      height: 35,
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

    row_container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });

  //    <TextInput style={styles.text_input} />
  //<Button title={'Favorites'} onPress={() => {}}></Button>
  return (
    <SafeAreaView flex={1}>
      <View>
        <SearchDialog />
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => {
              if (setSearchDialogVisible != null) setSearchDialogVisible(true);
            }}>
            <Image
              style={styles.search_icon}
              source={require('../images/search.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Image
              style={styles.favorite_icon}
              source={require('../images/heart-filled.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={places_data}
          renderItem={({ item }) => (
            <View style={styles.row_container}>
              <PortraitPlaceCard navigation={navigation} />
              <PortraitPlaceCard navigation={navigation} />
            </View>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
