import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';





export default class MyScene extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}


	render(){
		return(
			<View>
				<Text style={[styles.text,{backgroundColor:"#6b6"}]}>你好，{this.props.title}</Text>

				<TouchableHighlight style={styles.touch} onPress={this.props.onForward}>
					<Text style={styles.text}>去下一个场景</Text>
				</TouchableHighlight>

				<TouchableHighlight style={[styles.touch,{backgroundColor:"#2b2"}]} onPress={this.props.onBack}>
					<Text style={styles.text}>返回上一个场景</Text>
				</TouchableHighlight>

			</View>
		)
	}
}


const styles = StyleSheet.create({
	touch:{
		height:42,
		backgroundColor:'green',
	},
	text:{
		textAlign:'center',
		color:'#fff',
		lineHeight:42,
	}
})


