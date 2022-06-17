import React from 'react';
import {View, TextInput, Text,StyleSheet } from 'react-native';
import { Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput placeholder="Search" value={term} onChangeText={newTerm => onTermChange(newTerm)} autoCorrect={false} autoCapitalize="none" onEndEditing={()=> onTermSubmit()}/>
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'rgb(128,128,128)',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginBottom: 10
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex:1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default SearchBar;