const cube = document.getElementById("cube");
const faceColors = {
  F: "green",
  B: "blue",
  U: "white",
  D: "yellow",
  L: "orange",
  R: "red"
};

function createFace(name, transform) {
  const face = document.createElement("div");
  face.classList.add("face");
  face.style.transform = transform;
  face.dataset.face = name;

  for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.style.backgroundColor = faceColors[name];
    face.appendChild(tile);
  }

  cube.appendChild(face);
}

function createCube() {
  cube.innerHTML = "";
  createFace("F", "translateZ(90px)");
  createFace("B", "rotateY(180deg) translateZ(90px)");
  createFace("U", "rotateX(90deg) translateZ(90px)");
  createFace("D", "rotateX(-90deg) translateZ(90px)");
  createFace("L", "rotateY(-90deg) translateZ(90px)");
  createFace("R", "rotateY(90deg) translateZ(90px)");
}

function rotateFace(face) {
  alert(`🔄 Rotation of ${face} not fully implemented yet.`);
  // Advanced logic can go here if you'd like to continue later!
}

function scramble() {
  const faces = ["U", "D", "L", "R", "F", "B"];
  for (let i = 0; i < 10; i++) {
    const rand = faces[Math.floor(Math.random() * faces.length)];
    rotateFace(rand);
  }
}

function resetCube() {
  createCube();
}

createCube();
