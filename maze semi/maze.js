const maze = document.getElementById('maze');
const rows = 20; 
const columns = 20; 
const obstacles = [
    
  { x: 0, y: 1 },
  { x: 1, y: 2 },
  { x: 3, y: 0 },
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 4 },
  { x: 3, y: 6 },
  { x: 1, y: 1 },
  { x: 1, y:4  },
  { x: 1, y:5  },
  { x:1 , y:6  },
  { x: 1, y:8  },
  { x:1 , y:9  },
  { x: 1, y:10  },
  { x: 1, y: 11 },
  { x: 1, y: 13 },
  { x:1 , y: 14 },
  { x: 1, y:  15},
  { x: 1, y:16  },
  { x: 1, y:  17},
  { x:1 , y: 18 },
  { x: 0, y:  6},
  { x:0 , y: 11 },
  { x:2 , y:  6},
  { x:2 , y:  11},
  { x:2 , y:  18},
  { x: 3, y:8  },
  { x: 3, y:9  },
  { x: 3, y:11  },
  { x: 3, y: 12 },
  { x: 3, y: 14 },
  { x: 3, y: 15 },
  { x: 3, y:  16},
  { x: 3, y:18  },
  { x: 4, y:2  },
  { x: 4, y:4  },
  { x: 4, y: 6 },
  { x: 4, y: 9 },
  { x: 4, y: 11 },
  { x: 4, y:  16},
  { x: 4, y:18  },
  { x: 5, y:1  },
  { x: 5, y:6  },
  { x: 5, y: 9 },
  { x: 5, y:  11},
  { x: 5, y:  13},
  { x: 5, y:  18},
  { x: 6, y:  1},
  { x: 6, y:3  },
  { x: 6, y: 4 },
  { x: 6, y:  5},
  { x: 6, y:  6},
  { x: 6, y:  7},
  { x: 6, y:  9},
  { x: 6, y:11  },
  { x: 6, y: 12 },
  { x: 6, y:  13},
  { x: 6, y:  15},
  { x: 6, y: 16 },
  { x: 6, y:  18},
  { x: 7, y: 1 },
  { x: 7, y: 9 },
  { x: 7, y: 11 },
  { x: 7, y: 18 },
  { x: 8, y: 1 },
  { x: 8, y: 3 },
  { x: 8, y: 6 },
  { x: 8, y: 7 },
  { x: 8, y: 8 },
  { x: 8, y: 9 },
  { x: 8, y: 11 },
  { x: 8, y: 13 },
  { x: 8, y: 14 },
  { x: 8, y: 15 },
  { x: 8, y: 16 },
  { x: 8, y:  18},
  { x: 9, y: 3 },
  { x: 9, y: 6 },
  { x: 9, y: 11 },
  { x: 9, y:13  },
  { x: 9, y:  16},
  { x: 9, y:17  },
  { x: 10, y: 0 },
  { x: 10, y: 1 },
  { x: 10, y:3  },
  { x: 10, y:6  },
  { x: 10, y: 8 },
  { x: 10, y: 9 },
  { x: 10, y:10  },
  { x: 10, y: 11 },
  { x: 10, y:17  },
  { x: 10, y:19  },
  { x: 11, y: 1 },
  { x: 11, y: 3 },
  { x: 11, y: 6 },
  { x: 11, y: 9 },
  { x: 11, y:  11},
  { x: 11, y: 12 },
  { x: 11, y: 13 },
  { x: 11, y:14  },
  { x: 11, y:15  },
  { x: 11, y: 17 },
  { x: 11, y:19  },
  { x: 12, y: 6 },
  { x: 12, y: 9 },
  { x: 12, y:15  },
  { x: 12, y: 17 },
  { x: 12, y: 19 },
  { x: 13, y:1  },
  { x: 13, y: 2 },
  { x: 13, y: 3 },
  { x: 13, y: 4 },
  { x: 13, y: 5 },
  { x: 13, y: 6 },
  { x: 13, y: 9 },
  { x: 13, y: 13 },
  { x: 13, y: 15 },
  { x: 13, y: 17 },
  { x: 13, y: 19 },
  { x: 14, y:2  },
  { x: 14, y: 9 },
  { x: 14, y: 11 },
  { x: 14, y: 12 },
  { x: 14, y:  13},
  { x: 14, y: 15 },
  { x: 14, y: 17 },
  { x: 15, y: 0 },
  { x: 15, y: 2 },
  { x: 15, y: 4 },
  { x: 15, y: 5 },
  { x: 15, y: 6 },
  { x: 15, y: 7 },
  { x: 15, y: 8 },
  { x: 15, y: 9 },
  { x: 15, y: 13 },
  { x: 15, y:15  },
  { x: 15, y:17  },
  { x: 15, y: 18 },
  { x: 16, y:0  },
  { x: 16, y:2  },
  { x: 16, y:4  },
  { x: 16, y:11  },
  { x: 16, y:13  },
  { x: 16, y:  14},
  { x: 16, y:15  },
  { x: 16, y: 17 },
  { x: 17, y:2  },
  { x: 17, y: 4 },
  { x: 17, y: 5 },
  { x: 17, y:  6},
  { x: 17, y:  7},
  { x: 17, y: 8 },
  { x: 17, y: 9 },
  { x: 17, y: 11 },
  { x: 17, y: 17 },
  { x: 17, y: 19 },
  { x: 18, y: 1 },
  { x: 18, y: 2 },
  { x: 18, y: 11 },
  { x: 18, y: 12 },
  { x: 18, y: 13 },
  { x: 18, y: 14 },
  { x: 18, y:  15},
  { x: 18, y: 16 },
  { x: 18, y: 17 },
  { x: 18, y: 19 },
  { x: 19, y: 4 },
  { x: 19, y: 5 },
  { x: 19, y: 6 },
  { x: 19, y: 7 },
  { x: 19, y: 8 },
  { x: 19, y: 9 },
  { x: 19, y: 17 },
  { x: 5, y:4  },
  { x: 8, y:5  },
  { x: 10, y:4  },
  { x: 13, y:7  },
  { x: 12, y:11  },
  { x: 11, y: 2 },
  { x: 5, y: 14 },




  
  
];




for (let i = 0; i < rows * columns; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  
  
  const cellX = i % columns;
  const cellY = Math.floor(i / columns);
  if (obstacles.some(obstacle => obstacle.x === cellX && obstacle.y === cellY)) {
    cell.classList.add('obstacle'); 
  }
  
  maze.appendChild(cell);
}

const character = document.createElement('div');
character.classList.add('character');
maze.appendChild(character);

let currentX = 0; 
let currentY = 0; 


function updateCharacterPosition() {
  character.style.left = currentX * 52 + 'px';
  character.style.top = currentY * 52 + 'px';
}


updateCharacterPosition();


function moveCharacter(direction) {
  switch (direction) {
    case 'up':
      if (currentY > 0 && !isObstacle(currentX, currentY - 1)) {
        currentY--;
        updateCharacterPosition();
      }
      break;
    case 'down':
      if (currentY < 19 && !isObstacle(currentX, currentY + 1)) {
        currentY++;
        updateCharacterPosition();
      }
      break;
    case 'left':
      if (currentX > 0 && !isObstacle(currentX - 1, currentY)) {
        currentX--;
        updateCharacterPosition();
      }
      break;
    case 'right':
      if (currentX < 19 && !isObstacle(currentX + 1, currentY)) {
        currentX++;
        updateCharacterPosition();
      }
      break;
    default:
      break;
  }
}


function isObstacle(x, y) {
  return obstacles.some(obstacle => obstacle.x === x && obstacle.y === y);
}


document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      moveCharacter('up');
      break;
    case 'ArrowDown':
      moveCharacter('down');
      break;
    case 'ArrowLeft':
      moveCharacter('left');
      break;
    case 'ArrowRight':
      moveCharacter('right');
      break;
    default:
      break;
  }


  if (currentX === 4 && currentY === 1) {
    
    alert("The first digit is 7");
    
  }
  if (currentX === 5 && currentY === 5) {
    
    alert("The second digit is 5");
    
  }
  if (currentX === 0 && currentY === 10 ) {
    
    alert("The third digit is 0");
    
  }
  if (currentX === 15  && currentY === 14 ) {
    
    alert("The fourth digit is 8");
    
  }
  if (currentX === 16 && currentY === 5 ) {
    
    alert("The fifth digit is 9");
    
  }
  if (currentX === 19 && currentY === 19) {
    
    var code = prompt("enter the five secret digit code in order");
    if (code == 75089)
    {
      alert("AINT NO WAAYYY!!!!");
      window.location.href = "yey.html";
    }
    else{alert("Incorrect >:(  ,Please enter the secret code in order :D");}
    
  }
  
});