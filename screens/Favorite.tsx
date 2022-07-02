import React, {Component} from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity,Platform, ScrollView, SafeAreaView,FlatList } from 'react-native';
import {Card,Paragraph,Title, Avatar, Button } from 'react-native-paper';




const Favorite = () => {
   
  
  return (
    
    <SafeAreaView>
    
      <View style={styles.box1}>
        <TouchableOpacity style={styles.buttonStyle} >
          <Image source={require("./assets/backarrow.png")}/>
        </TouchableOpacity>
        <Text style={styles.titleStyle}>Favorite List</Text>
      </View>

      
      <ScrollView>
        <Card>
          <Card.Cover source={require('./assets/potala-palace.jpeg')}></Card.Cover>
          <Card.Content>
            <Title>The Potala Palace</Title>
            <View style={styles.reviewSectionStyle}>
              <Paragraph>Rating (number of reviews)</Paragraph>
              <View style={styles.starsStyle}>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/halfstar.png')}/>
              </View>
            </View>
          </Card.Content>


          <Card.Cover source={require('./assets/grand_palace_bangkok.jpeg')}></Card.Cover>
          <Card.Content>
            <Title>The Grand Palace</Title>
            <View style={styles.reviewSectionStyle}>
              <Paragraph>Rating (number of reviews)</Paragraph>
              <View style={styles.starsStyle}>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/halfstar.png')}/>
              </View>
            </View>
          </Card.Content>


          <Card.Cover source={require('./assets/niagarafalls.jpeg')}></Card.Cover>
          <Card.Content>
            <Title>The Niagara Falls</Title>
            <View style={styles.reviewSectionStyle}>
              <Paragraph>Rating (number of reviews)</Paragraph>
              <View style={styles.starsStyle}>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/star.png')}/>
                <Image style={styles.starStyle} source={require('./assets/halfstar.png')}/>
              </View>
            </View>
          </Card.Content>
          
        </Card>

      </ScrollView>
      
    </SafeAreaView>
  );
}

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f123',
    
  },
  buttonStyle:{

  },
  box1:{
    flexDirection:'row',
    padding:10,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  titleStyle:{
    fontSize:22,
    fontWeight:'700',
    //fontStyle:'',
    //alignSelf:'center',
    marginLeft:66,
  },
  reviewSectionStyle:{
    flexDirection:'row',
    alignItems:'baseline',
    justifyContent:'space-between',
    paddingBottom:15,
  },
  starStyle:{
    width:20,
    height:20,
  },
  starsStyle:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  reviewTextStyle:{},
});

  

