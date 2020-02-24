import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './main.css';

const instagramTitleRegExp = new RegExp(/<title>\n*(.*)\(@gin_faceid.hk\) • Instagram photos and videos\n*<\/title>/)
const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/);
export default class Main extends React.Component {

    state = {
        photos: [],
        title: ""
    }

    async componentDidMount() {
        try {
            const result = await this.fetchInstagramPhotos('https://www.instagram.com/gin_faceid.hk/')
            console.log(result.title)
            this.setState({
                photos: result.photos,
                title: result.title
            })
            // Do something with the photos
        } catch (e) {
            console.error('Fetching Instagram photos failed', e)
        }
    }

    async fetchInstagramPhotos(accountUrl) {
        const response = await axios.get(accountUrl)
        var title = response.data.match(instagramTitleRegExp)[1]
        console.log(title)
        var data = response.data.match(instagramRegExp)[1];
        data = data.substring(0, data.length - 1);
        const json = JSON.parse(data)
        const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 8)
        const photos = edges.map(({ node }) => {
            return {
                url: `https://www.instagram.com/p/${node.shortcode}/`,
                thumbnailUrl: node.thumbnail_src,
                displayUrl: node.display_url,
                caption: node.edge_media_to_caption.edges[0].node.text
            }
        })
        // photos.forEach(x=>console.log(x.caption.replace(/(\r\n|\n|\r)/gm, '\n')))
        // console.log(photos);
        return { title, photos }
    }

    render() {
        return <div>
            <br />
            <br />
            <legend align="center" style={{color: "#9A8873"}}>{this.state.title}</legend>
            <br />
            {this.state.photos.map(photo => {
                return <div><Card >
                    <Card.Img variant="top" src={photo.displayUrl} />

                </Card>
                    {photo.caption.split(/(\r\n|\n|\r)/gm).map((i, key) => {
                        return <div key={key}>{i}</div>
                    })}</div>

            })}
        </div>
    }
}