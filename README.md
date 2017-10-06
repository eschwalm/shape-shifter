# Shape Shifter - A pattern matching puzzle game

## Background and Overview

[Live Demo](eschwalm.github.io/shape-shifter)

Shape Shifter is a simple yet stimulating puzzler inspired by the ancient Chinese game called Tangram.

The game is held within the shape of a square, and consists of seven pieces - five triangles, a square, a rhomboid - which may be arranged to form a variety of different shapes.

![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1507315446/shapeshifter_jy6aer.png "sample screenshot")

This was built only with ```HTML```, ```CSS```, and ```JavaScript```:

```HTML
  <div class="shape" id="sm-triangle2">
    <svg height="150" width="75" viewbox="0 0 75 150">
      <polygon points="75,0 75,150 0,75 75,0"
      fill="rgb(0, 64, 229)"/>
    </svg>
  </div>

  <div class="shape" id="rhomboid">
    <svg height="75" width="225" viewbox="0 0 225 75">
      <polygon points="0,75 150,75 225,0 75,0 0,75"
      fill="rgb(229, 0, 206)"/>
    </svg>
  </div>
```

Shapes were created as svg polygons and wrapped with a shape class that handled css binding for click and drag functionality and transformations to rotate.

## Gameplay

The player can select an image from the scroll menu and is shown a silhouette that must be recreated with all seven of the pieces to match identically.

If a player gets stuck, they can see the solution for the current puzzle:

![alt text](http://res.cloudinary.com/dhuab49yi/image/upload/v1507314928/shapeshifter-solution_yyt5tn.png "sample solution")

## Future Implementation

In the future I would like to include more puzzles and further improve the logic for shape functionality.
