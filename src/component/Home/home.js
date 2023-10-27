import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            newsData: [],
            activeTab: 'Technology',
            cryptoStats: 'Sample Cryptocrunchstats',
            cryptoDescription: 'This is a sample description of the top 10 trending crypto coins of the day.',
        };
    }
    

    componentDidMount() {
        // Simulate fetching data from the sample API
        const sampleData = [
            {
                "id": 1,
                "title": "Sample Article 1 - Technology",
                "content": "This is the content of the first article in Technology.",
                "image": "https://via.placeholder.com/400x200",
                "views": 123
            },
            {
                "id": 2,
                "title": "Sample Article 2 - Crypto",
                "content": "This is the content of the second article in Crypto.",
                "image": "https://via.placeholder.com/400x200",
                "views": 234
            },
            {
                "id": 3,
                "title": "Sample Article 3 - Entertainment",
                "content": "This is the content of the third article in Entertainment.",
                "image": "https://via.placeholder.com/400x200",
                "views": 345
            }
        ];

        this.setState({ newsData: sampleData });
    }

    render() {
        const { newsData, activeTab } = this.state;

        return (
            <div>
                <div className="main-cont">
                    <div className="container">
                        <div className="main-app">
                            <div className="logo-header">
                                <img src={require('../../assets/img/logo.jpg')} alt="Logo" />
                            </div>
                            <header>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => this.setState({ activeTab: 'Technology' })}>
                                                Technology
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => this.setState({ activeTab: 'Crypto' })}>
                                                Crypto
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => this.setState({ activeTab: 'Entertainment' })}>
                                                Entertainment
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>
                            <div className='main-cont'>
                                <div className='main-cont-dv'>
                                    <h2>{this.state.cryptoStats} <img src={require('../../assets/img/Verified.png')} alt="Logo" /></h2>
                                    <p>{this.state.cryptoDescription}</p>
                                </div>
                                {newsData.map((article) => (
                                    article.title.includes(activeTab) && (
                                        <div key={article.id}>
                                            <h2>{article.title}</h2>
                                            <p>{article.content}</p>
                                            <section className="image-section">
                                                <img src={article.image} alt="News Article" />
                                            </section>
                                            <div className="social-icons">
                                                <a href="#"><img src={require('../../assets/img/x-logo-1.png')} alt="Logo" /></a>
                                                <a href="#"><img src={require('../../assets/img/copy-logo.png')} alt="Logo" /></a>
                                                <a href="#"><img src={require('../../assets/img/send-logo.png')} alt="Logo" /></a>
                                            </div>
                                            <div className='views'>
                                                <p>{article.views} Views</p>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
