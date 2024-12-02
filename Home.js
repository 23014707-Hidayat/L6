import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#2C2C2C',
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 30,
        color: '#FFFFFF',
    },
    sectionContainer: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5,
        color: '#FFFFFF',
        marginLeft: 5,
    },
    genreContainer: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#393939',
    },
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#d3d3d3',
    },
    itemImage: {
        width: 120,
        height: 160,
        marginVertical: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    descriptionBox: {
        marginTop: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                    navigation.navigate('Edit', { index, genre: section.title, name: item.name, imageId: item.imageId, description: item.description });
                }}
            >
                <Image style={styles.itemImage} source={{ uri: `https://cdn.myanimelist.net/images/anime/${item.imageId}.jpg` }} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.descriptionBox}>{item.description}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.appContainer}>
            <StatusBar />
            <Text style={styles.appTitle}>Anime List</Text>
            <Button
                title="Add Anime"
                onPress={() => {
                    navigation.navigate('Add');
                }}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <View style={[styles.genreContainer, { backgroundColor: bgcolor }]}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Home;
