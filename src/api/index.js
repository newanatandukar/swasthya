import * as rssParser from 'react-native-rss-parser';

function getRssFeed() {
  return fetch('https://www.nepalihealth.com/feed/')
    .then(response => response.text())
    .then(responseData => rssParser.parse(responseData))
    .then(rss => {
      return rss.items;
    });
}

export default { getRssFeed };
