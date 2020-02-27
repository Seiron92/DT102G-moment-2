using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using moment_2.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace moment_2.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/

        // FOR INDEX
        public IActionResult Index()
        {
            return View();
        }

        // FOR "Kontakt"
        public IActionResult Kontakt()
        {
            return View();
        }

  

    
    
    }
}
