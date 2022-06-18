import React, {useEffect} from 'react';
import {Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      RNBootSplash.hide({duration: 250, fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return <Text>Hello</Text>;
}

export default App;
