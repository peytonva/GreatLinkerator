import React from 'react';
import ReactDOM from 'react-dom'; 
import './style.css';

import {
  App,
  form
} from './components';

import {
  getLinks,
  createTags,
  getTags,
  countClicks
} from './api';



const App = () => {
  const [linkList, setLinkList] = useState([]);
  const [App] = useState([]);
  useEffect(() => {
    getLink()
      .then(link => {
        setLinkList(link)
      })
      .catch(error => {
        // something errors
      });
  }, []);
  useEffect(() => {
    if (!currentLink) {
      setLinkEntries([]);
      setTags([]);
      return;
    }
    getLinkByUser(currentLink.id)
      .then(link => {
        setUserLink(link);
      })
      .catch(error => {
        // something errors
      });
    getTagsByUser(currentTag.id)
      .then(tags => {
        setUserTags(tags);
      })
      .catch(error => {
        // something errors
      });
  }, [currentUser]);
  return (
    <div id="App"></div>
  );


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)};