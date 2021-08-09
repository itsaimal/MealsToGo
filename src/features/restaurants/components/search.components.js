import React, {useState,useContext} from "react";
import styled from "styled-components/native"
import { Searchbar } from 'react-native-paper';
import { LocationContext } from "../../../services/location/location.context";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {

    const {keyword,search} = useContext(LocationContext)
    console.log(LocationContext)
    
    const [searchKeyword, setSearchKeyword] = useState(keyword);

  

return(
    <SearchContainer>

    <Searchbar
      placeholder="Search"
      onSubmitEditing={() => {
          search(searchKeyword);
      }}
      onChangeText={(text) => {
setSearchKeyword(text)

      }}
      value={searchKeyword}
    />
     
      </SearchContainer>
);

}