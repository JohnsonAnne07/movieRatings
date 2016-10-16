/**
 *   @author Johnson, Anne (johnson.anne07@gmail.com)
 *   @version 0.0.0
 *   @summary Movie Rating Project 3|| created: 10.11.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieRating, numCounter, movieRatingTotal, averageMovieRating, displayAvgMovieRating;
let movieName;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse === 1) {
        setMovieName();
        setNumCounter();
        setMovieRating();
        setMovieRatingTotal();
        setAverageMovieRating();
        displayAvgMovieRatings();
        setContinueResponse();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setMovieName() {
    movieName = PROMPT.question(`\nWhat is the name of the movie?`);
}

function setMovieRating() {
    const MAX_RATING = 5,
        MIN_RATING = 0,
        MAX_TRIES = 3;
    let answered = false;
    let counter = 0;
    while (counter < MAX_TRIES && answered != true) {
        movieRating = Number(PROMPT.question(`\nPlease enter rating: `));
        if (movieRating < MIN_RATING || movieRating > MAX_RATING) {
            counter++;
        } else {
            counter++;
            answered = true;
        }
    }
}

function setMovieRatingTotal() {
    if (movieRatingTotal != null) {
        movieRatingTotal += movieRating;
    } else {
        movieRatingTotal = movieRating;
    }
}

function setNumCounter(){
    if (numCounter != null) {
        numCounter++;
    } else {
        numCounter = 1;
    }
}

function setAverageMovieRating() {
    averageMovieRating = movieRatingTotal / numCounter;
}

function displayAvgMovieRatings() {
    displayAvgMovieRating = console.log(`\nAverage rating for ${movieName} is: ${averageMovieRating}. `);
}

function printGoodbye() {
    console.log(`\tHave a great day! `);
}