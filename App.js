import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { RestaurentsScreen } from './src/screens/restaurants.screen';



// const isAndroid = Platform.OS === 'android';


export default function App() {



  return (
    <>

    <RestaurentsScreen/>
   
    <ExpoStatusBar style='auto'/>
    </>
  );
}

