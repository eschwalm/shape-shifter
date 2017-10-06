# Shape Shifter - A pattern matching puzzle game
================================================

## Background and Overview

Shape Shifter is a simple yet stimulating puzzler inspired by the ancient Chinese game called Tangram.

The game is held within the shape of a square, and consists of seven pieces - five triangles, a square, a rhomboid - which may be arranged to form a variety of different shapes.

The player is shown a silhouette of an image that must be recreated with all seven of the pieces to match identically.

## Functionality & MVP

In Shape Shifter, users will be able to:

* Solve puzzles by arranging pieces to match the given picture.
* Select from a list of pictures or choose a random picture to solve.
* Reset the board for a clean slate.
* See a solution for the current picture if they get stuck.


* An about modal describing the game with controls to rotate or flip shapes.
* A details modal for a brief history/context blurb of the game.

## Wireframes

This app will consist of a single screen with a main board area for users to place pieces, with the store of pieces located directly underneath.
Users will be able to grab shapes from the store and flip/rotate them before placing onto the board.

The left side will be the navigation control for the collection of puzzles. An image of the currently active puzzle will be on top.

![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1506931941/shapeshifter_oz4e8t.png "Wireframe")

## Architecture and Technologies

Technologies used:
* Vanilla JavaScript for overall structure and game logic.
* ```paper.js``` for creating shapes and the board
* Webpack to bundle scripts

The game files will consist of:
* ```board.js``` handle rendering and updating the current grid
* ```shapes.js``` hold the information and dimensions of each usable shape
* ```puzzles.js``` hold the solution coordinates and silhouette for each puzzle as well as keep track of which puzzles have been completed

## Implementation Timeline

### Over the weekend:
* Look into ```paper.js``` usage and Implementation

### Day 1: File structure setup, node modules, webpack, ```webpack.config.js```, ```package.json```, learn basics of ```paper.js```.
* Get all basic file structures setup
* Create a basic layout for the app
* learn enough ```paper.js``` to create a grid

### Day 2: Dedicate this day to learning ```paper.js``` in order to handle shape creation and functionality
* Create all of the shape pieces and logic (dimensions and count)
* Get the shapes to rotate and flip
* Be able to snap the shapes onto the board

### Day 3: Start creating the logic and display for puzzles
* Show the collection of available puzzles to select from
* Display the current puzzle as a mini "grid" above
* Have the board be able to know the pieces it holds and their dimensions

### Day 4: Create puzzles and flesh out user interface
* Make sure all of the controls feels smooth and responsive
* Be able to transition between puzzles and keep track of which have been completed
* Create as many puzzles as possible

## Bonus Features

* Implement a timed challenge mode
* User persistence for remembering which puzzles they completed
* Create a leaderboard
