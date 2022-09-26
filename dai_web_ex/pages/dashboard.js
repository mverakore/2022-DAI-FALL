import { Image, Reveal } from 'semantic-ui-react'

export default function dashboard() {
    return <div>
        <h1> HIIIIIIIIIIIIIIII </h1>
        <Reveal animated='fade'>
            <Reveal.Content visible>
                <Image src='https://placekitten.com/500/550' size='medium' />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Image src='https://c.tenor.com/patKcXgljGYAAAAd/cursed-cat.gif' size='medium' />
            </Reveal.Content>
        </Reveal>
    </div>
}