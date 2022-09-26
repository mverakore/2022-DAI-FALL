import { Layout, Button, ButtonGroup } from "@ui-kitten/components";
import React from 'react';




export default function Main() {
    return (
        <Layout>
            <ButtonGroup>
                <Button onPress={() => setText('Left button pressed')}>L</Button>
                <Button onPress={() => setText('Middle button pressed')}>M</Button>
                <Button onPress={() => setText('Right button pressed')}>R</Button>
            </ButtonGroup>
        </Layout>
    )
}