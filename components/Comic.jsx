import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	outer: {
		width,
		alignItems: "center",
		justifyContent: "center"
	},
	container: {
		width: 260,
		backgroundColor: '#74a1ed',
		borderWidth: 2,
		borderColor: '#2c28ed',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20
	},
	image: {
		marginTop: 10,
		width: 230,
		height: 354
	},
	font: {
		padding: 10,
		fontWeight: 'bold',
	}
});

export default function Comic({ name, image }) {
  return (
		<View style={styles.outer}>
			<View style={styles.container}>
				<Image style={styles.image}
					source={{uri: image}}
				/>
				<Text style={styles.font}>{name}</Text>
			</View>
		</View>
  )
}