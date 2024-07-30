// components/TicTacToe.js
"use client"
import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">Tic Tac Toe</h1>
      <div className="text-2xl mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-4 w-64">
        {board.map((value, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center text-2xl border border-gray-400 cursor-pointer bg-blue-200 hover:bg-blue-300"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
