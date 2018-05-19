import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './App';

/*import HomeScreen from './component/reactNvigation/homeScreen';
import DetailScreen from './component/reactNvigation/detailScreen';
import ThirdScreen from './component/reactNvigation/thirdScreen';
import { MainScreen, MetailScreen, GhirdScreen} from './component/reactNvigation/mainScreen';

const App = StackNavigator({
	MainScreen:{
		screen:HomeScreen,
		navigationOptions:{
			headerTitle:'Main',
		}
	},
	MetailScreen:{
		screen:DetailScreen,
		navigationOptions:{
			headerTitle:'Detail',
		}
	},
	GhirdScreen:{
		screen:ThirdScreen,
		navigationOptions:{
			headerTitle:'Third',
		}
	}
});*/

AppRegistry.registerComponent('BjTravel', () => App);
