import * as React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {
		  flexDirection: 'row', 
		  alignItems: 'center', 
		  marginLeft: 20,
		  marginRight: 20,
		  marginTop: 5,
		  borderWidth: 2,
		  padding: 10,
		  borderColor: '#2c28ed' ,
		  borderRadius: 10,
		  backgroundColor: '#74a1ed'
	},
	  image: {
		  width: 40,
		  height: 40,
		  marginRight: 10
	  },
	  font: {
		  fontWeight:'bold'
	  }
  });

export default function CharacterCard({image, name, id}) {
	const navigation = useNavigation();
	
	return (
	  <TouchableOpacity 
			  style={styles.container}
			  onPress={() => navigation.navigate('Detail', {id})}
	  >
			  <Image 
				  style={styles.image}
				  source={image}
			  />
		<Text style={styles.font}>{name}</Text>
	  </TouchableOpacity>
	);
  }