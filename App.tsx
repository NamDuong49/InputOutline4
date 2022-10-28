/**
 * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
 * npm install  react-native-reanimated
 * Add babel plugin (follow link)
 * Reset cache
 * npm install react-native-input-outline
 * ./gradlew clean
 */

import React, {useState, useEffect} from 'react';
import Outline from './src/screens/Outline/Outline';
import Relationship from './src/screens/Relationship';
import PreviousWork from './src/screens/PreviousWork';
import CurrentWork from './src/screens/CurrentWork';
import LaborContract from './src/screens/LaborContract';

const App = () => {
  return (
    <Relationship />
    // <PreviousWork/>
    // <CurrentWork/>
    // <LaborContract/>
    // <Outline/>
  );
};

export default App;
