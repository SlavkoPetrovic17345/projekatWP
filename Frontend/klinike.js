export class Klinike{

  constructor(naziv,brojTermina)
  {
      this.naziv=naziv;
      this.brojTermina=brojTermina
      this.kontejner = null;
  }
  crtajRaspored(host){
      if(!host){
        throw new ExtensionScriptApis("roditeljski element ne postoji");
      }
      this.kontejner=document.createElement("div");
      this.kontejner.classList.add("kontejner");
      host.appendChild(this.kontejner);

      this.crtajFormu(this.kontejner);
        
    
        
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

        let doktori = ["Jovan Jovanovic","Marko Markovic","Pera Peric"];
        let boja=["green","red"];
        
        let opcija=null;
        let labela=null;
        let divRb=null;
        doktori.forEach((doktori,index)=>{
            divRb = document.createElement("div");
            opcija=document.createElement("input");
            opcija.type="radio";
            opcija.name=this.naziv;
            opcija.value=boja[index];

            labela = document.createElement("label");
            labela.innerHTML=doktori;


            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            kontFroma.appendChild(divRb);
        })

        elLabela = document.createElement("h3");
        elLabela.innerHTML="Izaberite tip intervencije";
        kontFroma.appendChild(elLabela);

        let tipIntervencije=["pregled","kontrola"];

        tipIntervencije.forEach((tip,index)=>{
            divRb = document.createElement("div");
            opcija=document.createElement("input");
            opcija.type="radio";
            opcija.name=this.naziv;
            

            labela = document.createElement("label");
            labela.innerHTML=tip;


            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            kontFroma.appendChild(divRb);
        })

        elLabela = document.createElement("h3");
        elLabela.innerHTML="Izaberite termin:";
        kontFroma.appendChild(elLabela);

        divRb = document.createElement("div");
        let selVreme = document.createElement("select");
        labela=document.createElement("label");
        labela.innerHTML="Termin:";
        divRb.appendChild(labela);
        divRb.appendChild(selVreme);

        for(let i =1;i <this.brojTermina+1;i++){
            opcija = document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            selVreme.appendChild(opcija);
        }

        kontFroma.appendChild(divRb);

        const dugme = document.createElement("button");
        dugme.innerHTML="Zakazi!";
        kontFroma.appendChild(dugme);
        dugme.onclick=(ev)=>{
            alert("OVDE IDE NESTO STO CU KASNIJE");
        }


        


        

    }
}