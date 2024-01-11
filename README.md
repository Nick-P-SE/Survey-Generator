# Survey Generator
This website allows you to create surveys (formally quizzes) that other people can participate in. It allows the user to see statistics on each answer and has private and public surveys. 

**Link to project:** https://surveygenerator.up.railway.app/

![Home Page Img](https://user-images.githubusercontent.com/101064471/219450244-18f183d8-dbcb-485f-b616-fb0a6fb88e20.PNG)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, EJS, MongoDB, Express, TailwindCSS, DaisyUI, Mongoose, Passport

This site was originally built with the idea that it could be used for the type of surveys you would see used in psychology. It allows for users to create an account and has both public and private surveys tied to their accounts. There is a public survey feed consisting of all of the public surveys and on the user profile they can see all the surveys that they have created, whether public or private. Users can like anyone's surveys so they appear higher on the public feed as well as delete their own surveys.

The site uses Passport for user authentication, Mongoose as the connection to MongoDB, EJS as the templating language, Express as the framework used. TailwindCSS and DaisyUI were used as building blocks for the layout and design (as basic as it might be). Site is currently hosted on Railway, though that may change in the future.

## Optimizations/Future Plans

There are a lot of planned features and future optimizations to be made here. First, the entire site could be remade in react rather than EJS so that some features such as the liking a survey feature could work without a page reload. Adding Google Authentication is the next step as it should not require too much work. Adding more types of questions (such as true/false, increasing/decreasing the available answers, etc.) is a must if the site ever becomes actually useful. I also understand that I am not a designer, so coming up with a layout that looked decent took a LONG time. 

