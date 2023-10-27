import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            newsData: [
                {
                    id: 1,
                    title: "Technology",
                    content: "This is the content of the first article in Technology.",
                    image: "https://cryptocrunchapp.com/wp-content/uploads/2023/10/cryptocrunch-trends-36-768x960.jpg",
                    views: 123
                },
                {
                    id: 2,
                    title: "Assets - Crypto",
                    content: "This is the content of the second article in Crypto.",
                    image: "https://cryptocrunchapp.com/wp-content/uploads/2023/10/cryptocrunch-trends-37-768x960.jpg",
                    views: 234
                },
                {
                    id: 3,
                    title: "Global Market - Entertainment",
                    content: "This is the content of the third article in Entertainment.",
                    image: "https://cryptocrunchapp.com/wp-content/uploads/2023/10/photo1698156993-768x960.jpeg",
                    views: 345
                }
            ],
            activeTab: 'Technology',
            cryptoStats: 'Sample Cryptocrunchstats',
            cryptoDescription: 'This is a sample description of the top 10 trending crypto coins of the day',
        };
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }
    handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Shared from My React App',
                text: 'Check out this article!',
                url: window.location.href,
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Sharing failed', error));
        } else {
            alert('Sharing is not supported in this browser. You can manually copy the URL.');
        }
    }

    render() {
        const { newsData, activeTab } = this.state;

        return (
            <div>
                <div className="main-cont a">
                    <div className="container">
                        <div className="main-app">
                            <div className="logo-header">
                                <img src={require('../../assets/img/cryptocurrency.png')} alt="Logo" />
                            </div>
                            <header>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => this.handleTabClick('Technology')}>
                                                Technology
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => this.handleTabClick('Crypto')}>
                                                Crypto
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => this.handleTabClick('Entertainment')}>
                                                Entertainment
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </header>
                            <div className='main-cont'>
                                {newsData.map((article) => (
                                    article.title.includes(activeTab) && (
                                        <div key={article.id}>
                                            <div className='main-cont-dv'>
                                                <h2>{article.title} <img src={require('../../assets/img/Verified.png')} alt="Verified" /></h2>
                                                <p>{article.content}</p>
                                            </div>
                                            <section className="image-section">
                                                <img src={article.image} alt="News Article" />
                                            </section>
                                            <div className="social-icons">
                                                <a onClick={this.handleShare}>
                                                    <img src={require('../../assets/img/send-logo.png')} alt="Share" />
                                                </a>
                                                <a><img src={require('../../assets/img/x-logo-1.png')} alt="X Logo" /></a>
                                                <a><img src={require('../../assets/img/copy-logo.png')} alt="Copy Logo" /></a>
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
