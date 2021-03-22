import { Raspored } from "./raspored.js";
export class Klinike{

  constructor(naziv,brojLekara,brojTermina,lekari)
  {
      this.naziv=naziv;
      this.brojLekara=brojLekara;
      this.brojTermina=brojTermina;
      this.kontejner = null;
      this.rasporedi=[];
      this.lekari=[];
  }

  dodajURaspored(rast){
      this.rasporedi.push(rast);
  }
  dodajLekareKlinike(drI,drP)
  {
    this.lekari.push(drI+" "+drP);

  }
  crtajRasporedKlinike(host){
      if(!host){
        throw new ExtensionScriptApis("roditeljski element ne postoji");
      }
      this.nazivKlinike=document.createElement("h1");
      this.nazivKlinike.classList.add("naziv");
      this.nazivKlinike.innerHTML=this.naziv;
      host.appendChild(this.nazivKlinike);
      
      this.kontejner=document.createElement("div");
      this.kontejner.classList.add("kontejner");
      host.appendChild(this.kontejner);

      this.crtajFormu(this.kontejner);
      this.crtajRaspored(this.kontejner);   
           
           
  }
    crtajFormu(host){

        const kontFroma = document.createElement("div");
        kontFroma.className = "kontForma";
        host.appendChild(kontFroma);

        var elLabela = document.createElement("h3");
        elLabela.innerHTML="Unesite svoje podatke";
        kontFroma.appendChild(elLabela);
        
        elLabela=document.createElement("label");
        elLabela.innerHTML="Ime:";
        kontFroma.appendChild(elLabela);

        let tb=document.createElement("input");
        tb.className="Ime";
        tb.type="text";
        kontFroma.appendChild(tb);

        elLabela=document.createElement("label");
        elLabela.innerHTML="Prezime:";
        kontFroma.appendChild(elLabela);

        tb=document.createElement("input");
        tb.className="Prezime";
        tb.type="text";
        kontFroma.appendChild(tb);

        elLabela=document.createElement("label");
        elLabela.innerHTML="JMBG:";
        kontFroma.appendChild(elLabela);

        tb=document.createElement("input");
        tb.className="JMBG";
        tb.type="text";
        kontFroma.appendChild(tb);

        elLabela = document.createElement("h3");
        elLabela.innerHTML="Izaberite lekara";
        kontFroma.appendChild(elLabela);

       
        let opcija=null;
        let labela=null;
        let divRb=null;        
        let doktori = this.lekari;
       

        divRb = document.createElement("div");
        let selDoktor = document.createElement("select");
        labela=document.createElement("label");
        labela.innerHTML="Lekar:";
        divRb.appendChild(labela);       
        divRb.appendChild(selDoktor);

        for(let i=0;i<this.brojLekara;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=doktori[i];
            opcija.value= i;
            selDoktor.appendChild(opcija);

        }        
        kontFroma.appendChild(divRb); 
               


        elLabela = document.createElement("h3");
        elLabela.innerHTML="Izaberite termin:";
        kontFroma.appendChild(elLabela);

        divRb = document.createElement("div");
        let selVreme = document.createElement("select");
        labela=document.createElement("label");
        labela.innerHTML="Termin:";
        divRb.appendChild(labela);
        divRb.appendChild(selVreme);

        let termin=["08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"];
        
        for(let i =0;i <this.brojTermina;i++){
            opcija = document.createElement("option");
            opcija.innerHTML=termin[i];
            opcija.value=i;
            selVreme.appendChild(opcija);           
        }

        kontFroma.appendChild(divRb);

        let dani=["Ponedeljak","Utorak","Sreda","Cetvrtak","Petak"];

        divRb = document.createElement("div");
        let selDan = document.createElement("select");
        labela = document.createElement("label");
        labela.innerHTML="Dan:";
        divRb.appendChild(labela);
        divRb.appendChild(selDan);

        for(let i=0;i<dani.length;i++){
            opcija=document.createElement("option");
            opcija.innerHTML=dani[i];
            opcija.value= i;
            selDan.appendChild(opcija);
        }

        kontFroma.appendChild(divRb);           

        const dugmeZakazi = document.createElement("button");
        dugmeZakazi.innerHTML="Zakazi!";
        kontFroma.appendChild(dugmeZakazi);
        dugmeZakazi.onclick=(ev)=>{
            const name = this.kontejner.querySelector(".Ime").value;
            const lastName = this.kontejner.querySelector(".Prezime").value;
            const matbr = this.kontejner.querySelector(".JMBG").value;

            let doca =selDoktor.value;
            let x=parseInt(selDan.value);
            let y=parseInt(selVreme.value);
            let imeDoktora = doktori[doca]; 

            var imePrezime = imeDoktora.split(" ");
                       
            var pacijent =this.rasporedi[this.brojTermina+2+(this.brojTermina+1)*x+y];
            if(pacijent.vratiIme() == null && pacijent.vratiPrezime() == null && pacijent.vratiJMBG() == null)
            {
                fetch("https://localhost:5001/RasporedPacijenata/UpisiRaspored/"+this.naziv+"/"+imePrezime[0]+"/"+imePrezime[1], {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ime: name,
                        prezime:lastName,
                        jmbg:matbr,
                        x:pacijent.x,
                        y:pacijent.y
                    }),
                }).then(resp => {
                    if(resp.ok) {                        
                        pacijent.azurirajRaspored(name,lastName,matbr,imePrezime[0],imePrezime[1]);                       
                    }
                }) 
            }  
        }
        
        const dugmePromeniLekara = document.createElement("button");
        dugmePromeniLekara.innerHTML="Promeni Izabranog Lekara!";
        kontFroma.appendChild(dugmePromeniLekara);
        dugmePromeniLekara.onclick=(ev)=>{
            const name = this.kontejner.querySelector(".Ime").value;
            const lastName = this.kontejner.querySelector(".Prezime").value;
            const matbr = this.kontejner.querySelector(".JMBG").value;

            let doca =selDoktor.value;
            let x=parseInt(selDan.value);
            let y=parseInt(selVreme.value);
            var imeDoktora = doktori[doca]; 

            var imePrezime = imeDoktora.split(" ");
                       
            var pacijent =this.rasporedi[this.brojTermina+2+(this.brojTermina+1)*x+y];
            if(pacijent.vratiIme() == name && pacijent.vratiPrezime() == lastName && pacijent.vratiJMBG() == matbr)
            {
                fetch("https://localhost:5001/RasporedPacijenata/IzmeniRaspored/"+matbr+"/"+imePrezime[0]+"/"+imePrezime[1], {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                     }).then(p => { 
                        if (p.ok) {                  
                            pacijent.promeniLekaraa(imePrezime[0],imePrezime[1]);
                        }         
                        else {
                            alert("Greska Prilikom Izmene U Bazu!");
                        }
                    })  
            }  
            else
            {
                alert("Greska!Proveriti unete podatke!");
            }    
        }

        const dugmeOtkazi = document.createElement("button");
        dugmeOtkazi.innerHTML="Otkazi!";
        kontFroma.appendChild(dugmeOtkazi);
        dugmeOtkazi.onclick=(ev)=>{
            const name = this.kontejner.querySelector(".Ime").value;
            const lastName = this.kontejner.querySelector(".Prezime").value;
            const matbr = this.kontejner.querySelector(".JMBG").value;

            let doca =selDoktor.value;
            let x=parseInt(selDan.value);
            let y=parseInt(selVreme.value);
            var pacijent =this.rasporedi[this.brojTermina+2+(this.brojTermina+1)*x+y];
            if(pacijent.vratiIme() == name && pacijent.vratiPrezime() == lastName && pacijent.vratiJMBG() == matbr )
            {
                fetch("https://localhost:5001/RasporedPacijenata/IzbrisiRaspored/" + matbr,{
                    method: "DELETE",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }).then(p=>{
                    if(p.ok)
                    {
                        pacijent.otkaziTermin();
                    }
                    else{
                        alert("Greska Prilikom Brisanja");
                    }
                });
            }
            else
            {
                alert("Greska!Proveriti unete podatke!");
            }
        }
    }   
    crtajRaspored(host){      
      let okviriRed=["Dani\\Termini","08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"];
      let dani=["Ponedeljak","Utorak","Sreda","Cetvrtak","Petak"];
      const kontRasporeda = document.createElement("div");
      kontRasporeda.className="kontRaspored";
      host.appendChild(kontRasporeda);
      let red;     
      let ras;    
      
      for(let i=0;i<6;i++){
        red=document.createElement("div");
        red.className="red";
        kontRasporeda.appendChild(red);
        

        for(let j=0;j<this.brojTermina+1;j++){
            if(i==0)
            {
                ras=new Raspored(i,j);
                this.dodajURaspored(ras);
                ras.crtajOkvir(red,okviriRed[j]);                

            }    
            else if(j==0)
            {
                ras=new Raspored(i,j);
                this.dodajURaspored(ras);
                ras.crtajOkvir(red,dani[i-1]);                

            }        
            else 
            {
                ras=new Raspored(i,j);
                this.dodajURaspored(ras);
                ras.crtajRasp(red);

            }            
        }
      }
    }
}
