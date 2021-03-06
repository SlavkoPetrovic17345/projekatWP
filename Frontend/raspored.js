export class Raspored{
    constructor(i,j,tipBoja,jmbg)
    {
       
        this.x=i;
        this.y=j;
        this.tipBoja=tipBoja;
        this.miniKontejner=null;
        
    }
   
    vratiBoju(){
        if(!this.tipBoja)
        return "lime";
        else
        return this.tipBoja;
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
        
        this.miniKontejner.style.backgroundColor="red";
        this.miniKontejner.innerHTML = name +" "+lastName + " ima zakazano kod: " + imeDoktora;
    }
    ponovoAzurirajRed(tekst)
    {
        this.miniKontejner.style.backgroundColor="yellow";
        this.miniKontejner.innerHTML = tekst;

    }
}