import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionFeedContainer from './question_feed_container';
import SideBarContainer from './side_bar_container';

class Content extends React.Component{
  render(){
    return (
      <div>
        <div className="content">
          <SideBarContainer />
          <QuestionFeedContainer />
        </div>
      </div>
    );
  }
}

export default Content;



// <section class="content-sidebar">
//
// </section>
// <section class="content-main">
//
// </section>
