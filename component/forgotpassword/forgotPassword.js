import React, { PureComponent } from 'react';
import { 
	View, 
	TextInput, 
	StyleSheet, 
	TouchableOpacity, 
	Text} from 'react-native';


class ForgotPassword extends PureComponent{
	constructor(){
		super();
		this.state = {
			email:'',
			text:'Forgot Password'
		}
	}
	onPressForgot = text => {
		this.setState({
			email: text,
		})
	}
	render(){
		return(
			<View style={styles.view}>
			 <Text style={{textAlign:'center', fontSize:20, marginTop:20, color:'#b3b3b3'}}>Change Your Password</Text>
			 	<View style={styles.view1}>
			 		<TextInput
						placeholder="Email Address"
						underlineColorAndroid="rgba(0,0,0,0)"
						keyboardType="email-address"
						onChangeText={this.onPressForgot} 
						value={this.state.password}
						style={styles.textInput}
			 		/>
			 		<TouchableOpacity
						onPress={this.onPress} 
						style={styles.button}
			 		>
			 		  <Text style={{color:'#fff', fontSize:16}}>{this.state.text}</Text>
			 		</TouchableOpacity>
			 	</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		backgroundColor:'#99ddff',
		flex:1,
	},
	view1: {
		backgroundColor:'#99ddff',
		flex:1,
		alignItems:'center',
		marginTop:100
		
	},
	textInput: {
		marginRight:40,
		marginLeft:40,
		fontSize:16,
		width:300,
		backgroundColor:'grey',
		borderRadius:10,
		paddingHorizontal:10
	},
	button: {
		marginTop:15,
		marginRight:40,
		marginLeft:40,
		backgroundColor:'#002db3',
		padding: 8,
		alignItems: 'center',
		borderRadius:5
	}
})

export default ForgotPassword