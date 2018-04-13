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
			<View>
			 <Text style={{textAlign:'center', fontSize:20, marginTop:20, color:'#b3b3b3'}}>Change Your Password</Text>
			 <TextInput
				placeholder="Email Address"
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
		)
	}
}

const styles = StyleSheet.create({
	view: {
		backgroundColor:'#99ddff',
		flex:1
	},
	textInput: {
		marginTop:30,
		marginRight:40,
		marginLeft:40,
		fontSize:16,
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