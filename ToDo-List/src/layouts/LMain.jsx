import Menu from "../components/Menu";

export default function LMain({children}){
    return(
        <div style={{
            width:'100%',
            maxWidth:800,
            margin: '0 auto',
            backgroundColor:'#ccc',
            padding: 10,
            borderRadius:5,
 
        }}>
            <nav style={{
                marginBottom:20,
                display:'flex',
                justifyContent:'center'
            }}>
                <Menu />
            </nav>
            <div>
                {children}
            </div>
            
        </div>
    )
}