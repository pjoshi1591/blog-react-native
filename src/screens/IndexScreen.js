import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogpost } = useContext(Context);

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={ blogPost => blogPost.id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{ item.title }</Text>
                                <TouchableOpacity onPress={() => deleteBlogpost(item.id)}>
                                    <MaterialIcons name="delete-forever" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <MaterialIcons name="add" size={30} />
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 2,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 26
    }
});

export default IndexScreen;