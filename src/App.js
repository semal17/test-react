import './App.css';
import React from 'react';
// import Button from './Button';
import PlaceholderPost from './PlaceholderPost';
import PlaceholderPostHook from './PlaceholderPostHook'
import Comment from './Comment';
import CommentHook from './CommentHook';
import Comment2 from './Comment2';
import Comment2Hook from './Comment2Hook';


function App() {
  return (
    <>
      <PlaceholderPostHook />
      <CommentHook />
      <Comment2Hook />
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      {/* <Comment2/> */}
    </>
  );
}

export default App;
