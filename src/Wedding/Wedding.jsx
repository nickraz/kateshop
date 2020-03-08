import React from 'react';
import css from './Wedding.module.css';
import axios from 'axios';
import URLs from '../URLs';

class Wedding extends React.Component {

    componentDidMount() {
        axios.get(`${URLs.Server}/flower/api/wedding`)
            .then((response) => {
                this.setState({ header: response.data.header, text: response.data.text });
            });
    }

    render() {
        if (this.state) {
            return (
                <div className={`container ${css.wedding}`} data-container="container">
                    <div className={`container ${css.content}`} data-container="container">
                        <h2>{this.state.header}</h2>
                        <p>{this.state.text}</p>
                    </div>

                </div>
            );
        }
        return null;
    }
}

export default Wedding;