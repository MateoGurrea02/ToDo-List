import { Link } from "react-router-dom"

export default function Menu(){
    return(
      <div>
        <button>
            <Link to='/'> Home</Link>
        </button>
        <button> 
            <Link to='/contact'>Contact</Link>
        </button>
        <button> 
            <Link to='/products'>Products</Link>
        </button>
        <button> 
            <Link to='/protected'>Protected</Link>
        </button>
        <button> 
            <Link to='/ia'>IA Not Exist</Link>
        </button>

      </div>
    )
  }
  