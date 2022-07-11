import * as React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	image: {
		width: 230,
    height: 354,
		alignSelf: 'center',
    borderStyle: 'dotted solid double dashed',
    borderRadius: 3,
	},
  title: {
    alignSelf: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  description: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
		borderColor: '#2c28ed',
		borderRadius: 10,
		backgroundColor: '#74a1ed',
  }
});

export default function Information({ image, name, description }) {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }