import React, { useState } from 'react';
import { datasource } from './Data';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [animeName, setAnimeName] = useState('');
    const [imageId, setImageId] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('Isekai'); // Default genre

    return (
        <View style={styles.container}>
            <Button title="Back" onPress={() => navigation.goBack()} color="blue" />

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Anime Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setAnimeName(text)}
                    placeholder="Anime Name"
                    placeholderTextColor="#bbb"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Image ID:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setImageId(text)}
                    placeholder="Image ID"
                    placeholderTextColor="#bbb"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={[styles.input, styles.descriptionInput]}
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Description"
                    value={description}
                    multiline
                    placeholderTextColor="#bbb"
                />
            </View>

            <View style={[styles.pickerContainer, { borderColor: '#fff', borderBottomWidth: 1 }]}>
                <RNPickerSelect
                    value={genre}
                    onValueChange={(value) => setGenre(value)}
                    items={[
                        { label: 'Isekai', value: 'Isekai' },
                        { label: 'Music', value: 'Music' },
                        { label: 'Sci-Fi', value: 'Sci-Fi' },
                        { label: 'Romance', value: 'Romance' },
                    ]}
                />
            </View>

            <Button
                title="SUBMIT"
                onPress={() => {
                    const sectionIndex = datasource.findIndex((section) => section.title === genre);
                    if (sectionIndex !== -1) {
                        datasource[sectionIndex].data.push({ name: animeName, imageId, description });
                    }
                    navigation.navigate('Home');
                }}
                color="blue"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2C2C2C', // Gray background
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        backgroundColor: '#444',
        borderRadius: 5,
        paddingLeft: 8,
        color: '#fff',
    },
    descriptionInput: {
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 20, // Adding margin to ensure space between the description and genre picker
    },
    pickerContainer: {
        marginBottom: 20,
    },
});

export default Add;
