export class Raspored{
    constructor(i,j,tipBoja,jmbg,ime,prezime)
    {
       
        this.x=i;
        this.y=j;
        this.tipBoja=tipBoja;
        this.miniKontejner=null;
        this.jmbg=jmbg;
        this.ime = ime;
        this.prezime = prezime;
        
        
    }
   
    vratiBoju(){
        if(!this.tipBoja)
        return "#D6FFB7";
        else
        return this.tipBoja;
    
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
     
    crtajRasp(host){        
    
        this.miniKontejner=document.createElement("div");        
        this.miniKontejner.className="kol";
        this.miniKontejner.innerHTML="Slobodan termin";
        this.miniKontejner.style.backgroundColor=this.vratiBoju();
        host.appendChild(this.miniKontejner);
        
    }
    azurirajRaspored(name,lastName,matbr,imeDoktora){
        
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
        this.miniKontejner.style.backgroundColor="#BA274A";
        this.miniKontejner.innerHTML = name +" "+lastName + " ima zakazano kod: " + imeDoktora;
    }
    promeniLekaraa(name,lastName,matbr,imeDoktora){
        this.miniKontejner.innerHTML = name +" "+lastName + " ima zakazano kod: " + imeDoktora;
    }
    ponovoAzurirajRed(tekst)
    {
        this.miniKontejner.style.backgroundColor="#F5FF90";
        this.miniKontejner.innerHTML = tekst;

    }
    otkaziTermin(){
        this.miniKontejner.innerHTML="Slobodan termin";
        this.miniKontejner.style.backgroundColor="#D6FFB7"

    }
}