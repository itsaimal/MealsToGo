import React, {useState,useContext} from 'react';
import { FlatList,Pressable,TouchableOpacity} from 'react-native';

import { Searchbar,ActivityIndicator, Colors } from 'react-native-paper';
import {RestaurantInfoCard } from '../features/restaurants/components/restaurant-info-card.components';
import styled from "styled-components/native";
import { SafeArea } from '../components/utilty/safe-area.components';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';
import { Search } from '../features/restaurants/components/search.components';






const RestaurantList = styled(FlatList).attrs({

  contentContainerStyle:{padding: 16,
  },
})``;


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = ({navigation}) => {


   

    const {restaurants,isLoading,error} = useContext(RestaurantsContext);
   

    return(

<SafeArea>

{isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

  <Search/>
   <RestaurantList data={restaurants}
   renderItem={({item}) => {
     
   
return(
  <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail",{restaurant: item,})}>
  <RestaurantInfoCard restaurant={item} /></TouchableOpacity>
)}
   }
   keyExtractor={(item) => item.name}
   />
      
    
  </SafeArea>

    )
}


