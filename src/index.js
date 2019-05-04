import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Tweet(){
  return(
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <NameWithHandle/><Time/>https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gravatar.com%2Favatar%2F8e78ba61d5edeb036e8e9827438190f5.jpg%3Fdefault%3Dhttps%253A%252F%252Fnedbatchelder.com%252Fpix%252Favatar%252Fa37.jpg%26size%3D40&f=1
        <Message/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton />
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Avatar(){
  return(
    <img src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gravatar.com%2Favatar%2F8e78ba61d5edeb036e8e9827438190f5.jpg%3Fdefault%3Dhttps%253A%252F%252Fnedbatchelder.com%252Fpix%252Favatar%252Fa37.jpg%26size%3D40&f=1' className='avatar' alt='avatar' />
  );
}

function Message(){
    return(
      <div className='message'>
      This is less than 140 characters.
      </div>
    );
}

function NameWithHanlde(){
    return(
      <span className='name-with-handle'>
      <span className='name'>Anup Sedhain</span>
      <span className='handle'>@npsedhain </span>
      </span>
    );
}

const Time = () => (
  <span className='time'> 3h ago</span>
);

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = () => (
  <i className='fa fa-retweet retweet-button'/>
);

const LikeButton = () => (
  <i className='fa fa-heart like-button'/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-option-button"/>
);

ReactDOM.render(
  <Tweet />,
  document.querySelector('#root')
);
