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
				<Text>你好，{this.props.title}</Text>

				<TouchableHighlight onPress={this.props.onForward}>
					<Text>去下一个场景</Text>
				</TouchableHighlight>

				<TouchableHighlight onPress={this.props.onBack}>
					<Text>返回上一个场景</Text>
				</TouchableHighlight>

			</View>
		)
	}
}


const styles = StyleSheet.create({
	touch:{
		
	}
})