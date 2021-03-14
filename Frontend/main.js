import { Klinike } from "./klinike.js";


fetch("https://localhost:5001/RasporedPacijenata/PreuzmiKlinike").then(p=>
{
    p.json().then(data =>
        {
            data.forEach(klinike => {
                const k1 = new Klinike();
                klinike.lekari.forEach(lek=>{
                   k1.dodajLekareKlinike(lek.ime,lek.prezime);                    
                });
                k1.naziv=klinike.naziv;
                k1.brojLekara=klinike.brojLekara;
                k1.brojTermina=klinike.brojTermina;

                k1.crtajRasporedKlinike(document.body);    

                klinike.rasporedii.forEach(ras=>{                    
                    k1.rasporedi[klinike.brojTermina+2+(klinike.brojTermina+1)*(ras.x-1)+(ras.y-1)]
                    .azurirajRaspored(ras.ime,ras.prezime,ras.jmbg,ras.lekar.ime,ras.lekar.prezime);
                });
               
                
                
            });
        });
});





//const Klinika1 = new Klinike("Dom Zdravlja",3,8);
//Klinika1.crtajRasporedKlinike(document.body);

//const Klinika11 = new Klinike("Opsta Bolnica",3,4);
//Klinika11.crtajRasporedKlinike(document.body);