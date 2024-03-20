import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";

export function KonyvekDelete() {
    const navigate = useNavigate();
    const id = useParams().konyvekId;
    const [konyv, setKonyv] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const res = await fetch(`https://localhost:7017/Konyv/${id}`);
                const konyv = await res.json();
                console.log(id)
                setKonyv(konyv);
            } catch (error) {
                console.log(error);
            } finally {
                setPending(false);
            }
        })();
    }, [id]);

    return (
        <div className='p-5 m-auto text-center content bg-lavender'>
            {isPending || !konyv.id ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Könyv törlése</h2>
                    <div className='card p-3'>
                        <div className='card-body'>
                            <h4>{konyv.nev}</h4>
                            <h5 className='card-title'>{konyv.kiadasEve}</h5>
                            <h5>{konyv.ertekeles}</h5>
                            <img src={konyv.kepneve}></img>
                        </div>
                        <form onSubmit={async (e) => {
                            try {
                                e.preventDefault();
                                await fetch(`https://localhost:7017/Konyv/${id}`, {
                                    headers: { "Content-Type": "application/json" },
                                    method: "DELETE",
                                });
                                navigate("/");
                            } catch (error) {
                                console.log(error);
                            };
                        }}>
                            <div>
                                <NavLink to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg>
                                </NavLink>
                                <button type="button" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>
</svg>
                Törlés
              </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            )} </div>
    );
}