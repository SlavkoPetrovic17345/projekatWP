export class Raspored{
    constructor(i,j,slobodnoZauzeto,jmbg,ime,prezime,izabraniLekar)
    {
        this.x=i;
        this.y=j;
        this.slobodnoZauzeto=slobodnoZauzeto;
        this.miniKontejner=null;
        this.jmbg=jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.izabraniLekar=izabraniLekar;
    }
   
    vratiBoju(){
        if(!this.slobodnoZauzeto)
        return "#D6FFB7";
        else
        return this.slobodnoZauzeto;
    }
    vratiIme(){
        if(this.miniKontejner.innerHTML != "Slobodan termin")
        {
            return this.ime;
        }
    }
    vratiPrezime(){
        if(this.miniKontejner.innerHTML != "Slobodan termin")
        {           
            return this.prezime;
        }
    
    }
    vratiJMBG(){
        if(this.miniKontejner.innerHTML != "Slobodan termin")
        {           
            return this.jmbg;
        }
    
    }
    crtajOkvir(host,text){
        this.miniKontejner=document.createElement("div");        
        this.miniKontejner.className="kol";
        this.miniKontejner.innerHTML= text;
        this.miniKontejner.style.backgroundColor="#F5FF90";
        host.appendChild(this.miniKontejner);

    }
     
    crtajRasp(host){        
    
        this.miniKontejner=document.createElement("div");        
        this.miniKontejner.className="kol";
        this.miniKontejner.innerHTML="Slobodan termin";
        this.miniKontejner.style.backgroundColor=this.vratiBoju();
        host.appendChild(this.miniKontejner);
        
    }
    azurirajRaspored(name,lastName,matbr,imeDoktora,prezimeDoktora){
        
        if(this.miniKontejner.innerHTML != "Slobodan termin")
        {
            alert("Termin je vec zauzet, molimo izaberite neki drugi");
            return;
        }
        if(name == "" || lastName=="" || matbr=="" || matbr.length!=13)
        {
            alert("Proverite unete podatke");
            return;
        }
        this.ime= name;
        this.prezime = lastName;
        this.jmbg=matbr;
        this.izabraniLekar= imeDoktora + " "+ prezimeDoktora;
        this.miniKontejner.style.backgroundColor="#BA274A";
        this.miniKontejner.innerHTML = name +" "+lastName + " ima zakazano kod: dr." + imeDoktora +" "+prezimeDoktora;         
    }
    promeniLekaraa(imeDoktora,prezimeDoktora){
        this.izabraniLekar= imeDoktora + " "+ prezimeDoktora;
        this.miniKontejner.innerHTML = this.ime +" "+this.prezime + " ima zakazano kod dr." + imeDoktora +" "+prezimeDoktora;
    }
    otkaziTermin(){
        this.miniKontejner.innerHTML="Slobodan termin";
        this.miniKontejner.style.backgroundColor="#D6FFB7";
    }
}