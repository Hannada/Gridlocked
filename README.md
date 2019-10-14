# Gridlocked

Gridlocked is a grid based survival shooter that draws heavy influence from the Megaman Battle Network series. The player is capable of moving the character one square at a time to any square on the grid. As time goes on some squares may randomly brick out to make movement harder. The player must maneuver around these obstacles and projectiles from enemies on an opposing grid. Players can shoot enemies on the other side to rack up a higher score and increase their chance of surviving longer.

# Functionality and MVP

* Players can move, attack and pause. 
* All squares will be available in the initial state but will randomly block out after 15 seconds.
* There will never be more than 3 blocked out squares at a time. 
* Enemies will shoot slow moving projectiles that move horizontally across the grid. Enemy color will determine health and      bullet speed.

In addition this project will include:

* A production read me
* A modal for instructions

# Architecture and Technologies 

* Javascript for game logic 
* HTML5 for effects rendering
* Potentially CSS for styling 
* Canvas 

# Implementation Timeline 

* Day 1: Do all required setup inlcuding making an entry file, potentially setting up webpack. Try to locate neccessary assets for visual implementation and getting a good idea of general canvas use in conjuction with existing assets.

* Day 2: Start rendering the grid using a board.js file. Make sure understanding of canvas and other technologies involved is concrete. Take this time to reaccomdate for other tools as need. Craft out logic for player movement on the grid. Make sure HTML5 is properly displaying the moving character. Plot out the attack logic and animation.

* Day 3: Begin basic enemy model. Script out AI movement to be random as well as attacks. Make sure enemies are destroyed when attacked and that enemies still spawn on the board. Never flood the board over 3-4 enemies.

* Day 4: Work on board logic for limited player spaces as time goes on. Ensure that any placeholders for styling are replaced with actual sprite assets. Any unaccounted for debugging.

