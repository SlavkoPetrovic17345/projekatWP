export class Klinike{

  constructor(naziv)
  {
      this.naziv=naziv;
  }
    crtajFormu(host){

        const kontFroma = document.createElement("div");
        kontFroma.className = "kontForma";
        host.appendChild(kontFroma);

        var elLabela = document.createElement("h3");
        elLabela.innerHTML="Unesite svoje podatke";
        kontFroma.appendChild(elLabela);
        console.log("sadasd");

    }
}