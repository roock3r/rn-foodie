import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    ///
    //ADDED THIS BLOCK IN USE RESULTS JS
    ///
    const filterResultsByPrice = (price) => {
        // price == '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <View style={{flex:1}}>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null} 
        {/* <Text> We have found {results.length} results</Text> */}
        <ScrollView>
        <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricer" />
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;