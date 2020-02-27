using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace moment_2.Models
{
    
    public class Bookings
    {
        public Bookings()
        {
        }
    
        public int Id { get; set; }
      
        public string Name { get; set; }
    
        public int Number { get; set; }
  
        public DateTime Date { get; set; }
  
        public string Time { get; set; }
        [Required]
        public string Email { get; set; }

        public int Table { get; set; }

    }
}

