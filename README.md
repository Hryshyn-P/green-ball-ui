## To run the project:

1. npm i
2. Place your backend socket url into config.js
3. npm run dev

## Client app emits 2 events:

1. "set-username" event with a username string
2. "ball-clicked" event with a number of a ball clicked (0-8)

## Client app listens to the following events:

1. "game-message", receives an array of strings, which are then displayed in the message box. E.g. ["Message 1", "Message 2"]
2. "new-round", receives an object with 2 fields roundNumber (1-5) and greenBallNumber (0-8).
   E.g. {roundNumber: 1, greenBallNumber: 6}
3. "game-end", receives an array of message strings (statistics) to display in the message box
4. "hide-board", hides the boards. No data needed
