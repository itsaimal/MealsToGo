import React, {useState,useContext} from 'react';
import { FlatList} from 'react-native';

import { Searchbar,ActivityIndicator, Colors } from 'react-native-paper';
import {RestaurantInfoCard } from '../features/restaurants/components/restaurant-info-card.components';
import styled from "styled-components/native";
import { SafeArea } from '../components/utilty/safe-area.components';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';




const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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


export const RestaurentsScreen = () => {


    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const {restaurants,isLoading,error} = useContext(RestaurantsContext);
   

    return(

<SafeArea>

{isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

    <SearchContainer>

    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
     
      </SearchContainer>
   <RestaurantList data={restaurants}
   renderItem={({item}) => {
     console.log(item);
   
return(
  <RestaurantInfoCard restaurant={item} />
)}
   }
   keyExtractor={(item) => item.name}
   />
      
    
  </SafeArea>

    )
}


