import Image from "next/image";
import TicTacToe from "@/components/tic-tac-toe";
export default function Home() {
  return  <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <TicTacToe />
</div>
}
