#GymBump

https://gymbump.herokuapp.com/#/

GymBump is a full-stack web application that began as an original idea. It combined my experiences as a former personal trainer and current Crossfitter with my technical ability as a software developer.

GymBump is a growing project with new features on the way. It was designed to give its users a central hub to log workouts and receive workout analysis. The workout analytics are intended to help a user create a balanced exercise plan that promotes optimal progress.

GymBump utilizes Ruby on Rails v5.1.3 on the back-end, a PostgreSQL database, and React.js with a Redux architectural framework on the front-end. Chart.js was used to create visual representations of user workout data in a straightforward format.

##Features & Implementation

###Workout Log

The workout log was intended to be simple. It’s the core component of this application. It contains the data necessary for exercise analytics and provides a user with a polished form to upload workouts.

I have used other fitness applications that did not allow for a good user experience when it came to inputting workout information. In fact many offered a text box to upload workouts which easily became disorganized and didn’t provide the functionality to analyze inputs.

Exercise selection was made easy with an autocomplete feature that watches a users key strokes and offers exercise suggestions depending on the characters they begin to type.

The steps to create a workout were carefully selected. This was done by rendering different React components depending on which stage of a workout entry a user was on; Naming, selecting an exercise, setting results for a particular exercise.
Once an exercise is selected, a user can add as many set results for that particular exercise without needing to go through the process of selecting the exercise over and over again. If a user did 5 sets of bench press, they only need to select bench press once. This was done by storing a selected exercise in my state.

###Performance Tracker

The performance tracker organizes a user’s weight lifting results. It offers a search containing all of the weight lifting exercises a user has performed. After selecting an exercise a detailed view appears containing the results for the selected exercise. It displays the data as a line graph with exercise performance on the Y axis. The X axis is labeled starting at 1. The X access grows in order of set results containing the selected exercise. If the line trends upward, you’re making progress.  

###Exercise Breakdown

Exercise breakdown categorizes exercises by area trained; upper body, lower body, fully body, cardio, core. The data is presented to a user as a pie chart. It is based off of all of the exercises a user has inputted into their workout entries. Its intent is to give users a clear picture on what they’ve been working on and leave room to see where improvements can be made.

###Leaderboard

The leaderboard is a fun feature that allows users to compare their weight lifting exercise results to users using the web application. It’s an area to gain perspective and inspire motivation to improve. The leaderboard only contains exercises in the category of weight lifting and that user’s have performed. What fun would it be to see results that don’t contain any results?

The leaderboard was one of the more difficult components to build because it required the organization of a lot of data.

* I needed the users.
* I needed to find all of the exercises users performed
* I needed to find the each user’s max on the particular exercise.
* I needed to sort the lifts from greatest to least.
* I needed to store the results under keys of exercise names to allow a user to choose which exercise leaderboard they wanted to view.

###Exercise Trends

Exercise trends are found on the leaderboard. It’s a simple feature that shows what exercises people are doing the most of and changes each time any user inputs an exercise.

##Future Directions for the Project

In addition to the features already implemented on GymBump, these are some additions that I plan to implement in order for it to grow in the direction I desire:

###Detailed Workout Analysis

I will be implementing an entire page dedicated to the smart analysis of a user’s workout inputs. It will be largely based on their progress for particular exercises and will compare that progress to their training volume and intensity.

I’d also like to add features that provide workout analysis for exercises in categories other than weight lifting. This would include cardiovascular and plyometric exercises.

###Leaderboard Additions

I’d like to implement the leaderboard so it includes workouts in other categories including the standard Crossfit workouts as well as cardiovascular workouts.

###Tracked Goals & Smart Suggestions

I’d like to take the analytics from each user's workout log and offer them suggestions on what they can be doing to improve. A simple example; if a person is struggling to increase their Squat and 80% of their exercises fall in the upper body category, that would set off a red flag and prompt a suggestion to rethink their exercise selections.
