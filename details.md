We have a small challenge for you to check you skills in react.
Please do it on the weekend and send me the link to the github repo until monday.
it would be nice if we can then have a small talk about your code next week.

here is the challenge:

Create a react web app (would be nice if it's responsive) called coffee-challenge and push it to a public github repo.

Don't use a boilerplate for this challenge, because there is often a lot of unnecessary code. Webpack isn't necessary it's enough when it's a static html file with the react js code.

Please use the react-redux library and the styled-components library, you can also use other libraries if you want.

Also write some tests in the app. In our app we are using ava library to test.

create 2 views
* coffee game
* request and error handling

-coffee game
see coffee-game-mockup.jpg

-request and error handling
* write a react component which requests this endpoint by a press of a button http://httpbin.org/status/:code Returns given HTTP Status code.first button press should requesthttp://httpbin.org/status/200%60 second should request http://httpbin.org/status/400 and the next again 200 and so on...
* please handle the error if you get a 400 status code or something else
* in our app we are using axios to request data. But you can also use something different or appollo would also be nice.

Have fun :smiley:

![game](https://cdn.discordapp.com/attachments/378228358410010628/378506349082050561/coffee-game-mockup.jpg)
