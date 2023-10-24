import './Board.css'
import { getCharacter } from './helper'

const Board = () => {

    const getClassName = (i,j) => {
        let c = 'tile'
        c+=(i+j) %2 === 0 ? ' tile--light' : ' tile--dark'
        return c
    }

    const ranks = Array(8).fill().map((x,i) => 8-i)
    const files = Array(8).fill().map((x,i) => getCharacter(i))


    return <><div className='board'></div>

        <div className='tiles'>
            {ranks.map((rank,i) => 
                files.map((file,j) =>
                    <div key = {file+'-'+rank} className={getClassName(i,j)}>{rank}{file}</div>
                
                )
            
            )}
        </div>
        </>
}

export default Board