import React from 'react';

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        newTweet: ""
      }
    }

    onFormPost =(event)=>{
        event.preventDefault();

        let form = document.getElementById("inputForm");

        let newTweet = form.tweetContent.value;
        this.setState({newTweet: newTweet});

        this.props.onAddNewTweet(this.state.newTweet);

        form.tweetContent.value = "";
    }


    render() {
        return(
            <div id="sideMenu">
            <ul>
                <li>
                    <img id="avatar" src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/beck-hero-486799285.jpg?itok=ZQkQapBz" alt="avatar" />
                </li>
                <li id="username">JasonStevens80</li>
                <li>Edit Profile</li>
                <li>Friends</li>
                <li>Following</li>
                <br/>
                <form id="inputForm" onSubmit={this.onFormPost}>
                    <textarea id="tweetContent" name="tweetContent" placeholder="Tweet Something..." onChange={(event) => this.setState({newTweet: event.target.value})} />
                    <button id="submitButton" onClick={this.onFormPost}>Submit</button>
                </form>
            </ul>
            </div>
        )
    }
}

export default SideMenu;