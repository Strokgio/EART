import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helpers";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function Board({ imgUrl }) {
  let navigate = useNavigate();
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log('is started:', isStarted)

  const showAlert=()=>{
    Swal.fire({
      title: 'Felicidades corazón!!🥳🎉🎉🎉 lograste resolver el Puzzle 💜',
      width: 600,
      padding: '1em',
      color: '#fff',
      background: '#201f20 ',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://c.tenor.com/GO77-LvOh9oAAAAi/cat-rainbow.gif")
        left top
        no-repeat
      `
    }).then(respuesta=>{
      if(respuesta){
        navigate("/loveu")
      }
    })
  }

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && showAlert()}
      {!isStarted ?
        (<button className="buttonP" onClick={() => handleStartClick()}>Iniciar el Puzzle</button>) :
        (<button className="buttonP" onClick={() => handleShuffleClick()}>Reiniciar el Puzzle</button>)}
    </>
  );
}

export default Board;
