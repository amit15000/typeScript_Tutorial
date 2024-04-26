// type Direction = "up" | "down" | "left" | "right";

// enum Direction {
//   up,
//   down,
//   left,
//   right,
// }

//Initialize enum

// enum Direction {
//     up = 20,
//     down,
//     left = 50,
//     right,
// }

enum Direction {
  up = "UP",
  down = "Down",
  left = 7,
  right,
}
async function keyStroke(key: Direction) {
  console.log(key);
}

keyStroke(Direction.right);
