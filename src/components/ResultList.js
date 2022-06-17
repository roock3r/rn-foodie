import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from  './ResultDetail';
import { withNavigation} from 'react-navigation';

const ResultList = ({title, results, navigation}) => {
    
    if(!results.length){
        return null;
    }
    
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return( 
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id: item.id}) }><ResultsDetail result={item} /></TouchableOpacity>
            )
        }}
        />
    </View>

}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 10    
    }
});

export default withNavigation(ResultList);