import React, { useRef, useState } from "react";
import Tile from "../tile/Tile";
import "./board.css";
import blackPiece from "../../assets/images/black.png"
import whitePiece from "../../assets/images/white.png"

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizantalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [
]
const initialBoardState = pieces
for (let i = 0; i < 8; i++) {
  initialBoardState.push({ image: blackPiece, x: i, y: 6 });
}
for (let i = 0; i < 8; i++) {
  initialBoardState.push({ image: blackPiece, x: i, y: 5 });
}
for (let i = 0; i < 8; i++) {
  initialBoardState.push({ image: whitePiece, x: i, y: 1 });
}
for (let i = 0; i < 8; i++) {
  initialBoardState.push({ image: whitePiece, x: i, y: 2 });
}

const Board = () => {
  const [activePiece, setActivePiece] = useState(null)
  const [pieces, setPieces] = useState(initialBoardState);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const boardRef = useRef(null);


  const grabPiece = (e) => {
    const element = e.target
    const board = boardRef.current
    if (element.classList.contains("checker-piece") && board) {
      const gridX = Math.floor((e.clientX - board.offsetLeft) / 100);
      const gridY = Math.abs(Math.ceil((e.clientY - board.offsetTop - 800) / 100));

      setGridX(gridX);
      setGridY(gridY);
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element)
    }
  }
  const moviePiece = (e) => {


    const board = boardRef.current

    if (activePiece && board) {
      const minX = board.offsetLeft - 25;
      const minY = board.offsetTop - 25;
      const maxX = board.offsetLeft + board.clientWidth - 75;
      const maxY = board.offsetTop + board.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`
      } else {
        activePiece.style.left = `${x}px`
      }


      if (y < minY) {
        activePiece.style.top = `${minY}px`
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`
      } else {
        activePiece.style.top = `${y}px`
      }

    }
  }


  const dropPiece = (e) => {
    const board = boardRef.current
    if (activePiece && board) {
      const x = Math.floor((e.clientX - board.offsetLeft) / 100);
      const y = Math.abs(Math.ceil((e.clientY - board.offsetTop - 800) / 100));
      console.log(x, y)
      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            p.x = x;
            p.y = y;

          }
          return p;
        });
        return pieces
      });

      setActivePiece(null)
    }
  }


  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizantalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;

        }
      });

      board.push(<Tile key={`${j},${i}`} image={image} number={number} />);

    }
  }

  return <div className="board"
    ref={boardRef}
    onMouseMove={(e) => moviePiece(e)}
    onMouseDown={(e) => grabPiece(e)}
    onMouseUp={(e) => dropPiece(e)}

  >{board}</div>;
};

export default Board;