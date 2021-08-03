import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, SafeAreaView,Platform } from 'react-native';

import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../features/restaurants/components/restaurant-info.components';




export const RestaurentsScreen = () => {


    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return(

<>
<SafeAreaView style={styles.container}>
    <View style={styles.search}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      
    </View>

    <View style={styles.list}>
      <RestaurantInfo/>
    </View> 
    </SafeAreaView>
</>

    )
}



const styles = StyleSheet.create({
    container: {
     flex:1, marginTop: StatusBar.currentHeight
    },
    search: {
     alignItems:'center',justifyContent:'center',padding: 16, 
    },
    list: {flex: 1, padding:16,},
    
   });
   