export default function Logo(){
  return (
    <div className="flex flex-start  items-center h-12 w-auto">
        {<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 400 80">
            <g>
                <line x1="70" y1="55" x2="330" y2="55" stroke="#C71585" stroke-width="2" />
                
                <text x="50%" y="40%" 
                    dominant-baseline="middle" 
                    text-anchor="middle" 
                    font-family="'Gill Sans', 'Gill Sans MT', Calibri, sans-serif" 
                    font-weight="300" 
                    font-size="36" 
                    letter-spacing="10"
                    fill="#555555">
                SADAF
                </text>
            </g>
        </svg>}
    </div>
  )
}