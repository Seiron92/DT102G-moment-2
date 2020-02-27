using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using moment_2.Models;
using Newtonsoft.Json;

namespace moment_2.Controllers
{
    public class BookingController : Controller
    {
        // GET: Booking
        public ActionResult Index()
        {
            var JsonStr = System.IO.File.ReadAllText("bookings.json");
            var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

            return View(JsonObj);
        }
        public ActionResult Rebook()
        {
            var JsonStr = System.IO.File.ReadAllText("bookings.json");
            var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

            return View(JsonObj);
        }
 
        [HttpGet]
        public ActionResult Seebookings()
        {
            // GET SESSION VARIABLE
            string iKnowOutPut = HttpContext.Session.GetString("bb");
            ViewBag.error = iKnowOutPut;


            return View();
        }
        public ActionResult Cancel()
        {
            var JsonStr = System.IO.File.ReadAllText("bookings.json");
            var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

            return View(JsonObj);
        }


        // GET: Booking/Create
        public ActionResult BokaBord()
        {
            // READ FROM "booking.json" FILE
            var JsonStr = System.IO.File.ReadAllText("bookings.json");
            var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

            return View(JsonObj);

        }

        public ActionResult BokaBord2()
        {
         
            // READ FROM "booking.json" FILE
           
               var JsonStr = System.IO.File.ReadAllText("bookings.json");
              var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

               return View(JsonObj);
            


        }
        // POST: Booking/BokaBord
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult BokaBord(IFormCollection collection)
            
        {

            try
            {
                // Convert date input to correct datatype (DateTime)
                string inDate = collection["Date"];
                DateTime outDate = Convert.ToDateTime(inDate);

                // Read existing json data
                var jsonData = System.IO.File.ReadAllText("bookings.json");
                // De-serialize to object or create new list
                var book = JsonConvert.DeserializeObject<List<Bookings>>(jsonData)?? new List<Bookings>();

                // Add 1 to id.
                int newId = Convert.ToInt32(collection["Id"]) + 1;
                // Add booking
                book.Add(new Bookings()
                {
                    
                Id = newId,
                    Name = collection["Name"],
                    Table = Convert.ToInt32(collection["Table"]),
                    Number = Convert.ToInt32(collection["Number"]),
                    Email = collection["Email"],
                    Date = outDate,
                    Time = collection["Time"]

                }) ;
        

                // Update json data string
                jsonData = JsonConvert.SerializeObject(book);
                System.IO.File.WriteAllText("bookings.json", jsonData);

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                var JsonStr = System.IO.File.ReadAllText("bookings.json");
                var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

                return View(JsonObj);

            }
        }
        /**************************************/
        // DISPLAY BOOKINGS IF MODEL EMAIL == VIEWBAG.EMAIL
        // THIS METHOD CREATE A VIEWBAG OF THE INPUT FROM THE FORM

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult BokaBord2(IFormCollection collection, Bookings model)

        {
            if (ModelState.IsValid)
            {
                try
                {
                   
                    // Create ViewBag from input
                    ViewBag.Email = collection["Email"];

                    var JsonStr = System.IO.File.ReadAllText("bookings.json");
                    var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

                    return View(JsonObj);
                }
                catch
                {
                
                    return RedirectToAction(nameof(Seebookings));
                }
            }
            else
            {
                // SET
                string iKnow = "Du måste fylla i en epostadress!";
                HttpContext.Session.SetString("bb", iKnow);
           
              // ViewBag.error = "Du måste fylla i en epostadress!";
                return RedirectToAction(nameof(Seebookings));
            }

        
        }


        // GET: Booking/Edit/5
        public ActionResult Edit(int id)
        {
            var JsonStr = System.IO.File.ReadAllText("bookings.json");
            var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

            return View(JsonObj);

        }

        // POST: Booking/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
       

            try
            {

                // Get Id from hidden inputfield
               int id2 = Convert.ToInt32(collection["Id"]);
                // Convert date input to correct datatype (DateTime)
                string inDate = collection["Date"];
                DateTime outDate = Convert.ToDateTime(inDate);

                var json = System.IO.File.ReadAllText("bookings.json");

                List<Bookings> list = JsonConvert.DeserializeObject<List<Bookings>>(json);

                Bookings update = list.FirstOrDefault(x => x.Id == id2);
                
                if (update != null)
                {
                   
                    update.Table = Convert.ToInt32(collection["Table"]);
                    update.Number = Convert.ToInt32(collection["Number"]);
                    update.Date = outDate;
                    update.Time = collection["Time"];

                    string output = Newtonsoft.Json.JsonConvert.SerializeObject(list, Newtonsoft.Json.Formatting.Indented);
                    System.IO.File.WriteAllText("bookings.json", output);

                }

                var JsonStr = System.IO.File.ReadAllText("bookings.json");
                var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

                return RedirectToAction(nameof(Rebook));
            }
            catch
            {
                var JsonStr = System.IO.File.ReadAllText("bookings.json");
                var JsonObj = JsonConvert.DeserializeObject<IEnumerable<Bookings>>(JsonStr);

                return View(JsonObj);

            }
        }

        // GET: Booking/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Booking/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                int id2 = Convert.ToInt32(collection["Id"]);

                var json = System.IO.File.ReadAllText("bookings.json");

                List<Bookings> list = JsonConvert.DeserializeObject<List<Bookings>>(json);
             
                Bookings booking = list.FirstOrDefault(x => x.Id == id2);
               if(booking != null)
                {
                    list.Remove(booking);


                    string output = Newtonsoft.Json.JsonConvert.SerializeObject(list, Newtonsoft.Json.Formatting.Indented);
                    System.IO.File.WriteAllText("bookings.json", output);


                }
                return RedirectToAction(nameof(Cancel));
            }
            catch
            {
                return View();
            }
        }
    }
}