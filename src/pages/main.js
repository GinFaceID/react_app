import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './main.css';

export default class Main extends React.Component {

    state = {
        photos: [],
        title: ""
    }

    getPosts = async (query) => {
        try {
          const response = await axios.get('http://gin-faceid-backend.herokuapp.com/');
        console.log(response);
          return response.data;
      
        } catch (error) {
          // If there's an error, set the error to the state
          console.log("getPosts error")
        }
      }

    async componentDidMount() {
        try {
            const result = await this.getPosts();
            console.log(JSON.stringify(result))
            this.setState({
                photos: result.photos,
                title: result.title
            })
            // Do something with the photos
        } catch (e) {
            console.error('Fetching Instagram photos failed', e)
        }
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