import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>1 Difference between authorization and `authentication`</h2>
                <h3>Answer:Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.</h3>
            <h2>2 Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h3>Answer:For authentication,hosting, database etc.Google,Facebook,Apple, Github, Anonymous, Microsoft, Twitter, Yahoo</h3>
            <h2> 3 What other services does firebase provide other than authentication</h2>
                <h3>Answer:</h3>
                <h3>-Firebase database</h3>
                <h3>-Storage</h3>
                <h3>-Realtime Database</h3>
                <h3>-Hosting</h3>
                <h3>-Functions</h3>
        </div>
    );
};

export default Blog;