import{Lekar} from "./lekar.js";
import { Raspored } from "./raspored.js";
export class Klinike{

  constructor(naziv,brojLekara,brojTermina)
  {
      this.naziv=naziv;
      this.brojLekara=brojLekara;
      this.brojTermina=brojTermina;
      this.kontejner = null;
      this.rasporedi=[];
  }
  dodajURaspored(rast){
      this.rasporedi.push(rast);
  }
  crtajRasporedKlinike(host){
      if(!host){
        throw new ExtensionScriptApis("roditeljski element ne postoji");
      }
      this.kontejner=document.createElement("div");
      this.kontejner.classList.add("kontejner");
      host.appendChild(this.kontejner);

      
      this.crtajFormu(this.kontejner);      
      this.crtajRaspored(this.kontejner);
      this.crtajPonovoRaspored(this.kontejner);        
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
        kontFroma.appendChild(tb);

        elLabela=document.createElement("label");
        elLabela.innerHTML="Prezime:";
        kontFroma.appendChild(elLabela);

        tb=document.createElement("input");
        tb.className="Prezime";
        kontFroma.appendChild(tb);

        elLabela=document.createElement("label");
        elLabela.innerHTML="JMBG:";
        kontFroma.appendChild(elLabela);

        tb=document.createElement("input");
        tb.className="JMBG";
        kontFroma.appendChild(tb);

        elLabela = document.createElement("h3");
        elLabela.innerHTML="Izaberite lekara";
        kontFroma.appendChild(elLabela);

       
        let opcija=null;
        let labela=null;
        let divRb=null;
        let doktori = ["dr.Jovan Jovanovic","dr.Marko Markovic","dr.Pera Peric"];

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
                  

            this.rasporedi[this.brojTermina+2+(this.brojTermina+1)*x+y].azurirajRaspored(name,lastName,matbr,imeDoktora);
            
        }
        
        const dugmePromeniLekara = document.createElement("button");
        dugmePromeniLekara.innerHTML="Promeni Izabranog Lekara!";
        kontFroma.appendChild(dugmePromeniLekara);
        dugmePromeniLekara.onclick=(ev)=>{
            alert("OVDE IDE NESTO STO CU KASNIJE");
        }

        const dugmeOtkazi = document.createElement("button");
        dugmeOtkazi.innerHTML="Otkazi!";
        kontFroma.appendChild(dugmeOtkazi);
        dugmeOtkazi.onclick=(ev)=>{
            alert("OVDE IDE NESTO STO CU KASNIJE");
        }      

    }   
    crtajPonovoRaspored(host)
    {
       
        let okviriRed=["Dani\\Termini","08:00h","09:00h","10:00h","11:00h","12:00h","13:00h","14:00h","15:00h"];
        let dani=["Ponedeljak","Utorak","Sreda","Cetvrtak","Petak"];
        for(let i=0;i<this.brojTermina+1;i++)
        {
            this.rasporedi[i].ponovoAzurirajRed(okviriRed[i]);
        }
        for(let i=0;i<5;i++)
        {
            this.rasporedi[(this.brojTermina+1)*(i+1)].ponovoAzurirajRed(dani[i]);
        }

    }
    crtajRaspored(host){      
      const kontRasporeda = document.createElement("div");
      kontRasporeda.className="kontRaspored";
      host.appendChild(kontRasporeda);
      let red;     
      let ras;    
      
      for(let i=0;i<6;i++)
      {
        red=document.createElement("div");
        red.className="red";
        kontRasporeda.appendChild(red);   
      

          

        for(let j=0;j<this.brojTermina+1;j++){
            
            
            ras=new Raspored(i,j,"",true);
            this.dodajURaspored(ras);
            ras.crtajRasp(red);
        }
        
         
      }
        
      
  }

}
