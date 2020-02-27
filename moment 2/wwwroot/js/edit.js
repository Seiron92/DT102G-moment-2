

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
            hideSubmit.style.display = "block";
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
                            bookings.style.display = "none";

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
                        bookings.style.display = "none";
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


// CONNECT TO WEBSERVICE
const urlGet = "http://guarded-castle-72495.herokuapp.com/api/booking";
const urlAdd = "~/bookings.json";
var hideThis = document.getElementById("hideThis");
var form = document.getElementById("form");
var taab = document.getElementById("taab");



var yes = document.getElementById("yes");
var no = document.getElementById("no");
// DISPLAY "DINA BOKNINGAR"


$(document).ready(function () {
    if (window.location.href.indexOf("dinaBokningar") > -1) {
        document.getElementById("scrollTo").scrollIntoView();
        hide.style.display = "block";


    }
})

// UPPDATERA
$(document).ready(function () {
    if (window.location.href.indexOf("Edit") > -1) {
        document.getElementById("scrollTo").scrollIntoView();

        var form2 = document.getElementById("hideThis2");

       
        form2.scrollIntoView();




        var update = document.getElementById("update");
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

// Take id from url place in hidden input box
var url = window.location.href;
var lastPart = url.split("/").pop();

document.getElementById("id");
id.value = lastPart;


