import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';
import { Calendar, Layout } from' @ui-kitten/components';
import React from 'react';


const MyButton = styled(Button)`
width: 100%;
height: 50%;
justify-content: center;
align-items: center;
`
const LeftContent = props => <Avatar.Icon {...props} icon="instagram" />

export default function Main() {
    return (
        <ScrollView>
            <Layout>

                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
                <MyButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </MyButton>
                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Title>Cats</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

            </Layout>
        </ScrollView>
    )
}

 {/* <Calendar
                    date={new Date()}
                    onSelect={(nextDate) => () => { alert(`hi ${nextDate}`)}}
                /> */}