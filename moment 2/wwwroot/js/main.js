

//DISPLAY SVG AFTER FORM ARE FILLED
var name = document.getElementById("names");
var number = document.getElementById("number");
var date = document.getElementById("date");
var time = document.getElementById("time");
var email = document.getElementById("email");
var svg = document.getElementById("hmm");
var conti = document.getElementById("conti");
var italic = document.getElementById("italic");
var bookings = document.getElementById("bookings");
var submit = document.getElementById("submit");
var hide = document.getElementById("hide");
var conf = document.getElementById("conf");
var conf2 = document.getElementById("conf2");
var bokaBord = document.getElementById("bokaBord2");
var hideSubmit = document.getElementById("hideSubmit");
var hidd = document.getElementsByClassName("hidd");
var scrollTo = document.getElementById("scrollTo");

// UPDATE
var name2 = document.getElementById("names2");
var number2 = document.getElementById("number2");
var date2 = document.getElementById("date2");
var time2 = document.getElementById("time2");
var email2 = document.getElementById("email2");
var conti2 = document.getElementById("conti2");
var italic2 = document.getElementById("italic2");
var submit2 = document.getElementById("submit2");

/* GETTING THE TABLES */
var table1 = document.getElementById("Table1");
var table2 = document.getElementById("Table2");
var table3 = document.getElementById("Tabe3");
var table4 = document.getElementById("Table4");
var table5 = document.getElementById("Table5");
var table6 = document.getElementById("Table6");
var table7 = document.getElementById("Table7");
var table8 = document.getElementById("Table8");
var table9 = document.getElementById("Table9");
var table10 = document.getElementById("Table10");
var table11 = document.getElementById("Table11");
var tab = 1;



// GET CURRENT DATE AND TIME
var today = new Date();
var month = today.getMonth() + 1;

if (month <= 9) {
    month = "0" + month;
}
var dateToday = today.getFullYear() + '-' + (month) + '-' + today.getDate();
var timeToday = today.getHours() + ":" + today.getMinutes();

$('#form input').on('input', function () {
    hide.style.display = "none";
    conf.style.display = "none";

    if (name.value != "" && number.value != "" && number.value >= 1 && date.value != "" && time.value != "" && email.value != "") {

        italic.style.display = "none";
        conti.style.display = "block";

        conti.onclick = function () {
        
            // KONTROLLERA ANTAL PERSONER 
            if (number.value >= 9) {
                alert("För sällskap 9 personer eller fler, vänligen kontakta oss")
            } else {
                // OM DAGEN VARIT
                if (dateToday > date.value) {
                    alert("Dagen har redan varit");
                }
                // OM VALD BOKNINGSDAG ÄR SAMMA SOM DAGENS DATUM
                else if (dateToday === date.value) {
                    // OM VALD TID REDAN VARIT
                    if (timeToday >= time.value) {
                        alert("Tiden har redan varit");
                    } else {
                        // OM VALD TID ÄR INOM ÖPPETTIDER
                        if (time.value >= "14:00" && time.value <= "22:00") {
                            svg.style.display = "block";
                           // bookings.style.display = "none";
                            for (var i = 0; i < hidd.length; i++) {
                                hidd[i].style.display = "none";
                            }

                            // OM ANTAL PERSONER ÄR 1-2
                            if (number.value >= 1 && number.value <= 2) {
                                // BORD 8,9,10,11 VISAS
                                table1.style.display = "none";
                                table2.style.display = "none";
                                table3.style.display = "none";
                                table4.style.display = "none";
                                table5.style.display = "none";
                                table6.style.display = "none";
                                table7.style.display = "none";
                            
                            }     // OM ANTAL PERSONER ÄR  3-4
                            else if (number.value >= 3 && number.value <= 4) {
                                table5.style.display = "none";
                                table8.style.display = "none";
                                table9.style.display = "none";
                                table10.style.display = "none";
                                table11.style.display = "none";
                           
                            }      // OM ANTAL PERSONER ÄR 5+
                            else {
                                table1.style.display = "none";
                                table2.style.display = "none";
                                table3.style.display = "none";
                                table4.style.display = "none";
                                table6.style.display = "none";
                                table7.style.display = "none";
                                table8.style.display = "none";
                                table9.style.display = "none";
                                table10.style.display = "none";
                                table11.style.display = "none";
                                
                            }

                        } else {
                            alert("Bord kan bokas mellan 14-22");
                        }

                    }
                } else {
                    // OM VALD TID ÄR INOM ÖPPETTIDER
                    if (time.value >= "14:00" && time.value <= "22:00") {
                        svg.style.display = "block";
                        //  bookings.style.display = "none";
                        for (var i = 0; i < hidd.length; i++) {
                            hidd[i].style.display = "none";
                        }
                        // OM ANTAL PERSONER ÄR 1-2
                        if (number.value >= 1 && number.value <= 2) {
                            // BORD 8,9,10,11 VISAS
                            table1.style.display = "none";
                            table2.style.display = "none";
                            table3.style.display = "none";
                            table4.style.display = "none";
                            table5.style.display = "none";
                            table6.style.display = "none";
                            table7.style.display = "none";
                   
                        }     // OM ANTAL PERSONER ÄR  3-4
                        else if (number.value >= 3 && number.value <= 4) {
                            table5.style.display = "none";
                            table8.style.display = "none";
                            table9.style.display = "none";
                            table10.style.display = "none";
                            table11.style.display = "none";
                        
                        }      // OM ANTAL PERSONER ÄR 5+
                        else {
                            table1.style.display = "none";
                            table2.style.display = "none";
                            table3.style.display = "none";
                            table4.style.display = "none";
                            table6.style.display = "none";
                            table7.style.display = "none";
                            table8.style.display = "none";
                            table9.style.display = "none";
                            table10.style.display = "none";
                            table11.style.display = "none";
                    
                        }
                    } else {
                        alert("Bord kan bokas mellan 14-22");
                    }
                }
            }

        }

    }

});

// FOR UPDATE 
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab4 = document.getElementById("tab4");
var tab5 = document.getElementById("tab5");
var tab6 = document.getElementById("tab6");
var tab7 = document.getElementById("tab7");
var tab8 = document.getElementById("tab8");
var tab9 = document.getElementById("tab9");
var tab10 = document.getElementById("tab10");
var tab11 = document.getElementById("tab11");

var submit2 = document.getElementById("submit2");
var newTable = document.getElementById("table2");

//TABLE ON CLICK

table1.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "1";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 1;
    taab.value = 1;
    //submit.style.display = "block";

}


table2.onclick = function () {
    hideSubmit.style.display = "block";
    table1.style.opacity = "0.2";
    table2.style.opacity = "1";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 2;
    taab.value = 2;
    //  submit.style.display = "block";

}

table3.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "1";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 3;
    taab.value = 3;
    // submit.style.display = "block";
  
}

table4.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "1";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 4;
    taab.value = 4;
    //  submit.style.display = "block";


}

table5.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "1";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 5;
    taab.value = 5;
    // submit.style.display = "block";

}

table6.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "1";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 6;
    taab.value = 6;
    //  submit.style.display = "block";

}

table7.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "1";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 7;
    taab.value = 7;
    // submit.style.display = "block";

}

table8.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "1";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 8;
    taab.value = 8;
    //  submit.style.display = "block";

}

table9.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "1";
    table10.style.opacity = "0.2";
    table11.style.opacity = "0.2";
    tab = 9;
    taab.value = 9;
    // submit.style.display = "block";

}

table10.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "1";
    table11.style.opacity = "0.2";
    tab = 10;
    taab.value = 10;
    //  submit.style.display = "block";

}
table11.onclick = function () {
    hideSubmit.style.display = "block";
    scrollTo.scrollIntoView();
    table1.style.opacity = "0.2";
    table2.style.opacity = "0.2";
    table3.style.opacity = "0.2";
    table4.style.opacity = "0.2";
    table5.style.opacity = "0.2";
    table6.style.opacity = "0.2";
    table7.style.opacity = "0.2";
    table8.style.opacity = "0.2";
    table9.style.opacity = "0.2";
    table10.style.opacity = "0.2";
    table11.style.opacity = "1";
    tab = 11;
    taab.value = 11;
    // submit.style.display = "block";

}

// CONNECT TO WEBSERVICE
const urlGet = "http://guarded-castle-72495.herokuapp.com/api/booking";
const urlAdd = "~/bookings.json";
var hideThis = document.getElementById("hideThis");
var form = document.getElementById("form");
var taab = document.getElementById("taab");


var confDel = document.getElementById("confDel");
confDel.style.display = "none";
var yes = document.getElementById("yes");
var no = document.getElementById("no");
// DISPLAY "DINA BOKNINGAR"


$(document).ready(function () {
    if (window.location.href.indexOf("dinaBokningar") > -1) {
        document.getElementById("scrollTo").scrollIntoView();
        hide.style.display = "block";
        conf.style.display = "block";


    }
})

// UPPDATERA
$(document).ready(function () {
    if (window.location.href.indexOf("Edit") > -1) {
        document.getElementById("scrollTo").scrollIntoView();

        var form2 = document.getElementById("hideThis2");
      
        bokaBord.style.display = "none";
        form2.scrollIntoView();
        hideThis.style.display = "none";
        form.style.display = "none";

        var update = document.getElementById("update");
        update.style.display = "block";

        update.style.display = "block";

        $('#form2 input').on('input', function () {
        
            hide.style.display = "none";

            // OM ANTAL PERSONER ÄR 1-2
            if (number2.value >= 1 && number2.value <= 2) {
                // BORD 8,9,10,11 VISAS
                tab1.style.display = "none";
                tab2.style.display = "none";
                tab3.style.display = "none";
                tab4.style.display = "none";
                tab5.style.display = "none";
                tab6.style.display = "none";
                tab7.style.display = "none";
            }     // OM ANTAL PERSONER ÄR  3-4
            else if (number2.value >= 3 && number2.value <= 4) {
                tab5.style.display = "none";
                tab8.style.display = "none";
                tab9.style.display = "none";
                tab10.style.display = "none";
                tab11.style.display = "none";
            }      // OM ANTAL PERSONER ÄR 5+
            else {
                tab1.style.display = "none";
                tab2.style.display = "none";
                tab3.style.display = "none";
                tab4.style.display = "none";
                tab6.style.display = "none";
                tab7.style.display = "none";
                tab8.style.display = "none";
                tab9.style.display = "none";
                tab10.style.display = "none";
                tab11.style.display = "none";
            }

            if (number2.value >= 1 && date2.value != "" && time2.value != "") {
                italic.style.display = "none";
                conti.style.display = "none";


                submit2.onclick = function () {

                    // KONTROLLERA ANTAL PERSONER 
                    if (number2.value >= 9) {
                        alert("För sällskap 9 personer eller fler, vänligen kontakta oss")
                    } else {
                        // OM DAGEN VARIT
                        if (dateToday > date2.value) {
                            alert("Dagen har redan varit");
                        }
                        // OM VALD BOKNINGSDAG ÄR SAMMA SOM DAGENS DATUM
                        else if (dateToday == date2.value) {
                            // OM VALD TID REDAN VARIT
                            if (timeToday >= time2.value) {
                                alert("Tiden har redan varit");
                            } else {
                                // OM VALD TID ÄR INOM ÖPPETTIDER
                                if (time2.value >= "14:00" && time2.value <= "22:00") {

                                    bookings.style.display = "none";
                                    update.innerHTML = `
               <div id="bookings" data-aos="fade-right"> <div class="block">
 <h3>Din bokning är ombokad</h3>
 <div class="dateNTime">Datum: ${date2.value}, klockan: ${time2.value}</div>
 <div class="nameNTable">Bord: ${newTable.value}<br> Bokningsnummer: ${s2}</div><br>

               </div></div>
               `
                                } else {
                                    alert("Bord kan bokas mellan 14-22");
                                }

                            }
                        } else {
                            // OM VALD TID ÄR INOM ÖPPETTIDER
                            if (time2.value >= "14:00" && time2.value <= "22:00") {

                                bookings.style.display = "none";
                                `  <div id="bookings" data-aos="fade-right"> <div class="block">
                                <h3>Din bokning är ombokad</h3>
                                <div class="dateNTime">Datum: ${date2.value}, klockan: ${time2.value}</div>
                                <div class="nameNTable">Bord: ${newTable.value}<br> Bokningsnummer: ${s2}</div><br>

            </div></div>
            `
                            } else {
                                alert("Bord kan bokas mellan 14-22");
                            }
                        }
                    }
                }
            }
        });
    }
})
                        



var dinaBokningar = document.getElementById("dinaBokningar");


var bokbord = document.getElementById("bokbord");
bokbord.onclick = function () {

    bokaBord.style.display = "block";

}

