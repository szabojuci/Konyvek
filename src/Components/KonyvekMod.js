import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function KonyvekMod() {

    const param = useParams();
    const navigate = useNavigate();
    const id = param.konyvekId;
    const [, setKonyv] = useState([]);
    const [modnev, setModnev] = useState("");
    const [modkiadasEve, setModkiadasEve] = useState("");
    const [modertekeles, setModertekeles] = useState("");
    const [modkepneve, setModkepneve] = useState("");

    useEffect(() => {

        (async () => {
            try {
                const res = await fetch(`https://localhost:7017/Konyv/${id}`);
                const konyvData = await res.json();
                console.log(res)
                setKonyv(konyvData);
                setModnev(konyvData.nev);
                setModkiadasEve(konyvData.kiadasEve);
                setModertekeles(konyvData.ertekeles);
                setModkepneve(konyvData.kepneve);
            } catch (error) {
                console.log(error);   
            } 
        })();
    }, [id]);

    const modNev = (e) => {
        setModnev(e.target.value);
    }
    const modKiadasEve = (e) => {
        setModkiadasEve(e.target.value);
    }
    const modErtekeles = (e) => {
        setModertekeles(e.target.value);
    }
    const modKepneve = (e) => {
        setModkepneve(e.target.value);
    }

    return (
        <div className='p-5 content bg-lavender text-center'>
            <h2>Könyv módosítás</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const konyv = {
                        id:id,
                        nev: e.target.elements.nev.value,
                        kiadasEve: e.target.elements.kiadasEve.value,
                        ertekeles: e.target.elements.ertekeles.value,
                        kepneve: e.target.elements.kepneve.value,
                    };
                    console.log(konyv);
                    fetch(`https://localhost:7017/Konyv/${id}`, {
                        headers: { "Content-Type": "application/json" },    
                        method: "PUT",
                        body: JSON.stringify(konyv),
                        
                    })
                    .then(() => {
                        console.log(konyv)
                        navigate("/");
                    })
                    .catch(console.log);
                }}
            >
                <div className='form-group row pb-3'>
                    <label htmlFor="nev" className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type="text" id="nev" name="nev" className="form-control" autoComplete='nev' value={modnev} onChange={modNev} />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kiadasEve" className='col-sm-3 col-form-label'> Kiadás Éve: </label>
                    <div>
                        <input type="number" id="kiadasEve" name="kiadasEve" className="form-control" autoComplete='kiadasEve' value={modkiadasEve} onChange={modKiadasEve} />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="ertekeles" className='col-sm-3 col-form-label'> Értékelés: </label>
                    <div>
                        <input type="number" id="ertekeles" name="ertekeles" className="form-control" autoComplete='ertekeles' value={modertekeles} onChange={modErtekeles} />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kepneve" className='col-sm-3 col-form-label'> Kép neve: </label>
                    <div>
                        <input type="text" id="kepneve" name="kepneve" className="form-control" autoComplete='kepneve' value={modkepneve} onChange={modKepneve} />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        </div>
    );
}