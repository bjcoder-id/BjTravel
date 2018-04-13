import React, { PureComponent } from 'react';
import { 
	View, 
	TextInput, 
	StyleSheet,
	BackAndroid, 
	Button,
	Text,
	TouchableOpacity,
} from 'react-native';

class SignUp extends PureComponent{
	constructor(){
		super();
		this.state = {
			username:'',
			password:'',
			button:'SignUp'
		}
	}

	handleChangeUserName = text => {
		this.setState({
			username: text,
		});
	};

	handleChangePassword = text => {
		this.setState({
			password: text,
		})
	}

	render(){
		return(
			<View style={styles.View}>
			  <Text style={{textAlign:'center', fontSize:20, marginTop:20, color:'#b30000'}}>SignUp</Text>
				<TextInput 
					placeholder="Email Address" 
					onChangeText={this.handleChangeUserName} 
					value={this.state.username} 
					style={styles.username}
				/>
				<TextInput 
					placeholder="Password" 
					onChangeText={this.handleChangePassword}
					value={this.state.password}
					style={styles.password}
				/>
				
				<TouchableOpacity 
				  style={styles.button}
					onPress={this.onPressButton}
				>
				  <Text style={styles.text}>{this.state.button}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	View: {
		backgroundColor:'#99ddff',
		flex:1
	},
	username: {
		marginTop:150,
		marginRight:40,
		marginLeft:40,
		fontSize:16,
	},
	password: {
		marginTop:15,
		marginRight:40,
		marginLeft:40,
		fontSize:16,
	},
	button: {
		marginTop:15,
		marginRight:40,
		marginLeft:40,
		backgroundColor:'#ff0000',
		padding: 8,
		alignItems: 'center',
		borderRadius:5
	},
	text:{
		fontSize:17,
		color:'#fff'
	}
});

export default SignUp