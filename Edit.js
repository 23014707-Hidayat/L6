import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#2C2C2C',
    },
    label: {
        color: '#fff',
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingLeft: 8,
        borderRadius: 5,
    },
    descriptionInput: {
        height: 80, // Set a min height
        textAlignVertical: 'top',
    },
});

const Edit = ({ navigation, route }) => {
    const { genre, index } = route.params;
    const sectionIndex = datasource.findIndex((section) => section.title === genre);
    const anime = datasource[sectionIndex].data[index];

    const [name, setName] = useState(anime.name);
    const [imageId, setImageId] = useState(anime.imageId);
    const [description, setDescription] = useState(anime.description);

    const saveChanges = () => {
        // Update anime object with new values
        anime.name = name;
        anime.imageId = imageId;
        anime.description = description;

        navigation.navigate('Home');
    };

    const deleteAnime = () => {
        Alert.alert('Delete Anime', 'Are you sure?', [
            {
                text: 'Yes',
                onPress: () => {
                    datasource[sectionIndex].data.splice(index, 1);
                    navigation.navigate('Home');
                },
            },
            { text: 'No' },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edit Anime:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Anime Name"
            />
            <TextInput
                style={styles.input}
                value={imageId}
                onChangeText={setImageId}
                placeholder="Image ID"
            />
            <TextInput
                style={[styles.input, styles.descriptionInput]}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
                multiline
            />
            <Button title="Save" onPress={saveChanges} />
            <Button title="Delete" onPress={deleteAnime} color="red" />
        </View>
    );
};



export default Edit;
