import React from 'react';

class NewTweets extends React.Component {   

    deleteTweet = (event) => {
        console.log(event.target.id)
        let thisTweet = document.getElementById(event.target.id)
        thisTweet.remove()
    }

    editTweet = (event) =>{
        console.log(event.target.id)
        let thisTweet = document.getElementById(event.target.id)
        thisTweet.edit()
    }

    render() {
            return (
                <div className="tweetBlock" id={this.props.tweetInfo.id}>
                <button className="deleteButton" id={this.props.tweetInfo.id} onClick={this.deleteTweet}>Delete </button>
                <button className ="editButton" id={this.props.tweetInfo.id} onClick={this.putTweet}>Edit</button>
                <h4 className="handle" key={this.props.tweetInfo.handle}>@JasonStevens80</h4>
                <p className="content" key={this.props.tweetInfo.tweetContent}>{this.props.tweetInfo.tweetContent}</p>
               
                <br/>
            </div>)
    }
}

export default NewTweets;