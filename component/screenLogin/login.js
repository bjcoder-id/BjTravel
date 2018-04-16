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

class Login extends PureComponent{
	constructor(){
		super();
		this.state = {
			username:'',
			password:'',
			button:'Log In'
		}
	}

	handleChangeEmail = text => {
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
			  <Text style={{textAlign:'center', fontSize:25, marginTop:20, color:'#b3b3b3'}}>Log In</Text>
				<TextInput 
					placeholder="Email Address" 
					onChangeText={this.handleChangeEmail} 
					keyboardType="email-address"
					underlineColorAndroid="rgba(0,0,0,0)"
					value={this.state.username} 
					style={styles.username}
				/>
				<TextInput 
					placeholder="Password" 
					onChangeText={this.handleChangePassword}
					underlineColorAndroid="rgba(0,0,0,0)"
					value={this.state.password}
					secureTextEntry={true}
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
		backgroundColor:'grey',
		borderRadius:10,
		paddingHorizontal:20
	},
	password: {
		marginTop:15,
		marginRight:40,
		marginLeft:40,
		fontSize:16,
		backgroundColor:'grey',
		borderRadius:10,
		paddingHorizontal:20
	},
	button: {
		marginTop:15,
		marginRight:40,
		marginLeft:40,
		backgroundColor:'#002db3',
		padding: 8,
		alignItems: 'center',
		borderRadius:5
	},
	text:{
		fontSize:17,
		color:'#fff'
	}
});

export default Login;