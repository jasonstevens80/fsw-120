import React from 'react';

const Home = () => {
    return ( 
        <div>
            <div className="pt-3 hero-home hero">
                <h1>Home Page</h1>
            </div>
            <div className="container tc tb">
                <p>The Experts You've Trusted For Over 80 Years!</p>
                <img className="inline-block mr-1" src="https://www.residencestyle.com/wp-content/uploads/2020/03/Plumbing-Services.jpg"height="300px" />
                <img className="inline-block mr-1" src="https://www.mvplumbingandheating.co.uk/wp-content/uploads/2018/11/Plumbing.jpg" height="300px" />
                <img className="inline-block mr-1" src="https://www.plumbing-training.info/wp-content/uploads/2015/04/plumbing-qualifications.jpg" height="300px" />
            </div>
        </div>
    );
}

export default Home;