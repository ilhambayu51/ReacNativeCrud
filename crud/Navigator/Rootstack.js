import {createStackNavigator} from 'react-navigation';
import Homescreen from '../Home/Homescreen';
import Addscreen from '../Add/Addscreen';
import Editscreen from '../Edit/Editscreen';
import App from '../../App';

const RootStack = createStackNavigator(
  {
    Home: Homescreen,
    Add: Addscreen,
    Edit: Editscreen,
    App: App,
  },
  {
    initialRouteName: Homescreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1e88e5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
export default RootStack;
