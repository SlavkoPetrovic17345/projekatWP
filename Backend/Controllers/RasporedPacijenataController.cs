using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RasporedPacijenataController : ControllerBase
    {
        public RasporedPacijenataContext Context{get;set;}
       public RasporedPacijenataController(RasporedPacijenataContext context)
        {
            Context = context;
        }
        [Route("PreuzmiKlinike")]
        [HttpGet]
        public async Task<List<Klinike>> PreuzmiKlinike()
        {
            return await Context.Klinikee.Include(p=>p.Rasporedii).Include(k=>k.Lekari).ToListAsync();
        }
        [Route("PreuzmiLekareKlinike/{naziv}")]
        [HttpGet]
        public async Task<List<Lekar>> PreuzmiLekareKlinike(string naziv)
        {
            return await Context.Lekari.Include(k=>k.Klinike).Where(k=>k.Klinike.Naziv==naziv).ToListAsync();
        }               
        [Route("UpisiRaspored/{imeKlinike}/{Ime}/{Prezime}")]
        [HttpPost]
        public async Task UpisiRaspored(string imeKlinike,[FromBody] Rasporedi rasporedi,string Ime,string Prezime)
        {
            var kln = await Context.Klinikee.Where(l=>l.Naziv==imeKlinike).FirstAsync();
            Lekar lekar= await Context.Lekari.Where(l=>l.Ime==Ime).Where(l=>l.Prezime==Prezime).FirstAsync();
            rasporedi.Klinike = kln;
            rasporedi.Lekar=lekar;
            Context.Raspored.Add(rasporedi);
            await Context.SaveChangesAsync();
        }
        [Route("IzbrisiRaspored/{JMBG}")]
        [HttpDelete]
        public async Task IzbrisiRaspored(string JMBG)
        {
            var raspored = await Context.Raspored.Where(l=>l.JMBG==JMBG).FirstAsync();
            Context.Remove(raspored);
            await Context.SaveChangesAsync();
        }
        [Route("IzmeniRaspored/{JMBG}/{Ime}/{Prezime}")]
        [HttpPut]
        public async Task<bool> IzmeniRaspored(string JMBG,string Ime,string Prezime)
        {
            Lekar lekar= await Context.Lekari.Where(l=>l.Ime==Ime).Where(l=>l.Prezime==Prezime).FirstAsync();
            if(lekar==null)
            {
                return false;
            }
            Rasporedi rasporedi= await Context.Raspored.Where(l=>l.JMBG==JMBG).FirstAsync();
            if(rasporedi==null)
            {
                return false;
            }   
            rasporedi.Lekar=lekar;
            Context.Update<Rasporedi>(rasporedi);
            await Context.SaveChangesAsync();
            return true;              
        }
    }
}
