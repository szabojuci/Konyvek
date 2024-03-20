import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
export function KonyvekSingle() {

    const param = useParams();
    const id = param.konyvekId;
    const [konyv, setKonyv] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`https://localhost:7017/Konyv/${id}`)
        const konyv =await res.json();
        setKonyv(konyv);
        } catch(error) {
            console.log(error);
        }
        finally{
            setPending(false);
        }
    })();
 }, [id]);
 return (
   <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !konyv.id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                    <div className='card-body'>
                    <h4>Könyv neve: {konyv.nev}</h4>
                    <h5 className='card-title'>Kiadás éve: {konyv.kiadasEve}</h5>
                    <h5>Értékelés: {konyv.ertekeles}</h5>
                       <NavLink  to={"/"}>
                        
                        <img src={konyv.kepneve}></img>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    ); 
}