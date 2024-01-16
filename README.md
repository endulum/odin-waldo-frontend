## Where's Waldo?
Imitation of the classic *Where's Waldo?* game.

[Section](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app)

### Todo
- [x] Basic page layout with scrollable box containing image and sticky headers/footers
- [x] Correctly get the coordinates of a click on an image no matter its size
- [x] Visible box around click coordinates, that moves with each click
- [ ] 

### Considering
- Store coordinates as state and show them on the footer
- Dropdown of characters and button in the footer to "check work" when locating a character
- Blur mapbox before starting? 
  - Dialog modal on startup to confirm starting the game
  - On start, record time since start and show it on the header
- More than one map
  - Dialog modal that offers a map selection and changes the map
  - Keep track of which maps have been cleared (local storage)