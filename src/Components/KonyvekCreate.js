import { useNavigate } from 'react-router-dom';

export function KonyvekCreate() {
    const navigate = useNavigate();

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Új Könyv</h2>
            <form
                onSubmit={(e) => {
                    e.persist();
                    e.preventDefault();
                    fetch("https://localhost:7017/Konyv", {
                        headers: { "Content-Type": "application/json" },
                        method: "POST",
                        body: JSON.stringify({
                            nev: e.target.elements.nev.value,
                            kiadasEve: e.target.elements.kiadasEve.value,
                            ertekeles: e.target.elements.ertekeles.value,
                            kepneve: e.target.elements.kepneve.value,
                        }),
                    })
                    .then(() => {
                        alert("Sikeres létrehozás");
                        navigate("/");
                    })
                    .catch(console.log);
                }}
            >
                <div className='form-group row pb-3'>
                    <label htmlFor="nev" className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type="text" id="nev" name="nev" className="form-control" autoComplete='nev' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kiadasEve" className='col-sm-3 col-form-label'> Kiadás Éve: </label>
                    <div>
                        <input type="number" id="kiadasEve" name="kiadasEve" className="form-control" autoComplete='kiadasEve' />
                    </div>
                </div> 
                <div className='form-group row pb-3'>
                    <label htmlFor="ertekeles" className='col-sm-3 col-form-label'> Értékelés: </label>
                    <div>
                        <input type="number" id="ertekeles" name="ertekeles" className="form-control" autoComplete='ertekeles' />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kepneve" className='col-sm-3 col-form-label'> Kép neve: </label>
                    <div>
                        <input type="text" id="kepneve" name="kepneve" className="form-control" autoComplete='kepneve' />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        </div>
    );
}