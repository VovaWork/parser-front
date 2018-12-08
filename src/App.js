import React, { Component } from 'react';
import './App.css';
import './assets/fonts.css'

import UrlsToDownload from './components/UrlsToDownload/UrlsToDownload';
import LogsContainer from './components/LogsContainer/LogsContainer';

class App extends Component {
  state = {
    downloadedUrls: []
  }

  setLinks = (urls) => {
    this.setState({downloadedUrls: urls})
  }

  render() {
    return (
      <main className='main'>
        <div className='container'>

          <UrlsToDownload onLink={this.setLinks.bind(this)} />
          <LogsContainer>
            <div label="Скачанные ссылки">
              <ul>
                {this.state.downloadedUrls.map((url, elementId) => {
                    return <li 
                              key={elementId}
                              className='tab-list__item'>
                                <span className='tab-list__item-icon'></span>
                                <span className='tab-list__item-url'>{url.message}</span>
                                <span className='tab-list__item-status'>{url.status}</span>
                           </li>
                })}
              </ul>
            </div>
            <div label="Ошибки скачивания">
                Ошибки скачивания
            </div>
          </LogsContainer>

          <div className='download-btn-wrap'>
              <a href='##' download className="download-site btn disabled">Скачать архив</a>
          </div>
        
        </div>
      </main>
    );
  }
}

export default App;