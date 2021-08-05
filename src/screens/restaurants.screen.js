import React, {useState} from 'react';
import { FlatList} from 'react-native';

import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard } from '../features/restaurants/components/restaurant-info-card.components';
import styled from "styled-components/native";
import { SafeArea } from '../components/utilty/safe-area.components';




const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({

  contentContainerStyle:{padding: 16,
  },
})``;



export const RestaurentsScreen = () => {


    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return(

<SafeArea>
    <SearchContainer>

    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      
      </SearchContainer>
   <RestaurantList data={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
   renderItem={() => <RestaurantInfoCard />}
   keyExtractor={(item) => item.name}
   />
      
    
  </SafeArea>

    )
}


