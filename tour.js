console.log("it is working");
console.log("it is working");
var flag = -1;
const elem = document.getElementById("hamburger");
// if (elem.style.display==="none"){
//     const var2=document.querySelector("#midtop");
//     var2.style.display="block";
//     console.log("if statement is working");
// }
function clickmenu() {

    const menu = document.getElementById("hamburger").classList.toggle("icon")
    const menu1 = document.getElementById("ryttop").classList.toggle("icon1")
    const var1 = document.getElementById("midtop").classList.toggle("change")
    const var6 = document.getElementById("right").classList.toggle("menuright")    // const var2=document.querySelector("#midtop");
    // if (var2.style.display!="block"){
    //     var2.style.display="block";
    // }else{
    //     var2.style.display="none";
    // }
}


var flag = 0;
function imageslider() {
    // if (flag===3){
    //     flag=0;

    // }
    // console.log(flag);
    if (flag === 0) {

        var image = document.getElementById("header").classList.remove("header2");
        var image = document.getElementById("header").classList.add("header1");
        var container = document.getElementById("container").style.display = "none";
        var container = document.getElementById("container1").style.display = "flex";
        var container = document.getElementById("container2").style.display = "none";
        flag = flag + 1;
        flag2 = 2;
    }
    else if (flag === 1) {
        var image = document.getElementById("header").classList.remove("header");
        var image = document.getElementById("header").classList.remove("header1");
        var image = document.getElementById("header").classList.add("header2");
        var container = document.getElementById("container").style.display = "none";
        var container = document.getElementById("container2").style.display = "flex";
        var container = document.getElementById("container1").style.display = "none";
        flag = flag + 1;
        flag2 = 1;
        console.log("--------------" + flag);

    }
    else if (flag === 2) {
        flag2 = 0
        var image = document.getElementById("header").classList.remove("header1");
        var image = document.getElementById("header").classList.remove("header2");
        var image = document.getElementById("header").classList.add("header");
        var container = document.getElementById("container").style.display = "flex";
        var container = document.getElementById("container2").style.display = "none";
        var container = document.getElementById("container1").style.display = "none";
        flag = 0;
    }

}
var flag2 = 0;
function imageslider1() {
    // if (flag===3){
    //     flag=0;

    // }
    // console.log(flag);
    if (flag2 === 0) {

        var image = document.getElementById("header").classList.add("header2");
        var image = document.getElementById("header").classList.remove("header1");
        var image = document.getElementById("header").classList.remove("header");
        var container = document.getElementById("container").style.display = "none";
        var container = document.getElementById("container1").style.display = "none";
        var container = document.getElementById("container2").style.display = "flex";
        flag = 2;
        flag2 = flag2 + 1;
    }
    else if (flag2 === 1) {
        var image = document.getElementById("header").classList.remove("header");
        var image = document.getElementById("header").classList.remove("header2");
        var image = document.getElementById("header").classList.add("header1");
        var container = document.getElementById("container").style.display = "none";
        var container = document.getElementById("container2").style.display = "none";
        var container = document.getElementById("container1").style.display = "flex";
        flag2 = flag2 + 1;
        console.log("--------------" + flag);
        flag = 1;

    }
    else if (flag2 === 2) {

        var image = document.getElementById("header").classList.remove("header1");
        var image = document.getElementById("header").classList.remove("header2");
        var image = document.getElementById("header").classList.add("header");
        var container = document.getElementById("container").style.display = "flex";
        var container = document.getElementById("container2").style.display = "none";
        var container = document.getElementById("container1").style.display = "none";
        flag = 0;
        flag2 = 0
    }

}


// function searching(){
//     const sea=document.getElementById("closesearch")
//     const sea1=document.getElementById("search");
//     const sea2=document.getElementById("searchbar");
//     if (sea2.style.display!="block"){
//         sea2.style.display="none";
//     }
//     else{
//         sea2.style.display="block";
//     }

// }
var flag1 = 1
function searching() {
    flag1 = flag1 * -1;
    if (flag1 === -1) {
        var sea2 = document.getElementById("searchbar").classList.remove("sea")
    } else {
        var sea3 = document.getElementById("searchbar").classList.add("sea")
    }

}
// --------------------------------
function productslider() {
    var prod = document.getElementById("iconics").classList.remove("prodvisible1")
    var prod = document.getElementById("iconics").classList.add("prodvisible")
}
function productslider1() {
    var prod = document.getElementById("iconics").classList.remove("prodvisible")
    var prod = document.getElementById("iconics").classList.add("prodvisible1")
}
// -------------------------------
function productslider_1() {
    var prod = document.getElementById("iconics1").classList.remove("prodvisible1")
    var prod = document.getElementById("iconics1").classList.add("prodvisible")
}
function productslider1_1() {
    var prod = document.getElementById("iconics1").classList.remove("prodvisible")
    var prod = document.getElementById("iconics1").classList.add("prodvisible1")
}
// ---------------------------------------
function productslider_2() {
    var prod = document.getElementById("iconics2").classList.remove("prodvisible1")
    var prod = document.getElementById("iconics2").classList.add("prodvisible")
}
function productslider1_2() {
    var prod = document.getElementById("iconics2").classList.remove("prodvisible")
    var prod = document.getElementById("iconics2").classList.add("prodvisible1")
}
// ---------------------------------
function productslider_3() {
    var prod = document.getElementById("iconics3").classList.remove("prodvisible1")
    var prod = document.getElementById("iconics3").classList.add("prodvisible")
}
function productslider1_3() {
    var prod = document.getElementById("iconics3").classList.remove("prodvisible")
    var prod = document.getElementById("iconics3").classList.add("prodvisible1")
}
// ---------------------------------
function productslider_4() {
    var prod = document.getElementById("iconics4").classList.remove("prodvisible1")
    var prod = document.getElementById("iconics4").classList.add("prodvisible")
}
function productslider1_4() {
    var prod = document.getElementById("iconics4").classList.remove("prodvisible")
    var prod = document.getElementById("iconics4").classList.add("prodvisible1")
}
// -------------------------------
function productslider_5() {
    var prod = document.getElementById("iconics5").classList.remove("prodvisible1")
    var prod = document.getElementById("iconics5").classList.add("prodvisible")
}
function productslider1_5() {
    var prod = document.getElementById("iconics5").classList.remove("prodvisible")
    var prod = document.getElementById("iconics5").classList.add("prodvisible1")
}
// var a1=document.getElementById("proimage").addEventListener("onmousemove",function productslider(){
//     var prod=document.getElementById("iconics").classList.remove("prodvisible1")
//     var prod=document.getElementById("iconics").classList.add("prodvisible")
//     console.log("product slider is working");
// })

var dice = 1;
function boxslider() {
    if (dice === 1) {
        var af1 = document.getElementById("afreen1").classList.remove("mainboxclass1");
        var af1 = document.getElementById("afreen1").classList.add("mainboxclass");
        var af2 = document.getElementById("afreen2").style.order = "1";
        var af3 = document.getElementById("afreen3").style.order = "2";
        var af1 = document.getElementById("afreen4").classList.add("mainboxclass1");
        var af4 = document.getElementById("afreen4").style.order = "3";

        dice = dice + 1;
        dice2 = 6;
    }
    else if (dice === 2) {
        var af1 = document.getElementById("afreen1").classList.remove("mainboxclass1");
        var af1 = document.getElementById("afreen1").classList.add("mainboxclass");
        var af1 = document.getElementById("afreen2").classList.remove("mainboxclass1");
        var af8 = document.getElementById("afreen2").classList.add("mainboxclass");
        var af3 = document.getElementById("afreen3").style.order = "1";
        var af5 = document.getElementById("afreen4").style.order = "2";
        var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
        var af5 = document.getElementById("afreen5").classList.add("mainboxclass1")
        var af2 = document.getElementById("afreen5").style.order = "3";

        dice = dice + 1;
        dice2 = 5;
    }
    else if (dice === 3) {
        var af1 = document.getElementById("afreen3").classList.remove("mainboxclass1");
        var af3 = document.getElementById("afreen3").classList.add("mainboxclass");
        var af5 = document.getElementById("afreen4").style.order = "1";
        var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
        var af5 = document.getElementById("afreen5").classList.add("mainboxclass1")
        var af5 = document.getElementById("afreen5").style.order = "2";
        var af1 = document.getElementById("afreen6").classList.remove("mainboxclass");
        var af6 = document.getElementById("afreen6").classList.add("mainboxclass1")
        var af7 = document.getElementById("afreen6").style.order = "3";

        dice = dice + 1;
        dice2 = 4;

    }
    else if (dice === 4) {
        var af1 = document.getElementById("afreen4").classList.remove("mainboxclass1");
        var af3 = document.getElementById("afreen4").classList.add("mainboxclass");
        var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
        var af5 = document.getElementById("afreen5").classList.add("mainboxclass1")
        var af5 = document.getElementById("afreen5").style.order = "1";
        var af1 = document.getElementById("afreen6").classList.remove("mainboxclass1");
        var af6 = document.getElementById("afreen6").classList.add("mainboxclass1")
        var af7 = document.getElementById("afreen6").style.order = "2";
        var af7 = document.getElementById("afreen1").style.order = "3";
        var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
        var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
        dice = dice + 1;
        dice2 = 3;

    }
    else if (dice === 5) {
        var af5 = document.getElementById("afreen5").classList.remove("mainboxclass1")
        var af5 = document.getElementById("afreen5").classList.add("mainboxclass")
        var af1 = document.getElementById("afreen6").classList.remove("mainboxclass");
        var af6 = document.getElementById("afreen6").classList.add("mainboxclass1")
        var af7 = document.getElementById("afreen6").style.order = "1";
        var af7 = document.getElementById("afreen1").style.order = "2";
        var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
        var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
        var af1 = document.getElementById("afreen2").classList.remove("mainboxclass");
        var af8 = document.getElementById("afreen2").classList.add("mainboxclass1");
        var af7 = document.getElementById("afreen2").style.order = "3";
        var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
        dice = dice + 1;
        dice2 = 2;

    }
    else if (dice === 6) {
        var af7 = document.getElementById("afreen1").style.order = "1";
        var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
        var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
        var af1 = document.getElementById("afreen2").classList.remove("mainboxclass");
        var af8 = document.getElementById("afreen2").classList.add("mainboxclass1");
        var af7 = document.getElementById("afreen2").style.order = "2";
        var af1 = document.getElementById("afreen3").classList.remove("mainboxclass");
        var af8 = document.getElementById("afreen3").classList.add("mainboxclass1");
        var af7 = document.getElementById("afreen3").style.order = "3";
        var af3 = document.getElementById("afreen4").classList.remove("mainboxclass");
        var af7 = document.getElementById("afreen4").style.order = "4";
        var af1 = document.getElementById("afreen5").classList.remove("mainboxclass1");
        var af5 = document.getElementById("afreen5").classList.add("mainboxclass");
        var af5 = document.getElementById("afreen6").classList.remove("mainboxclass1")
        var af5 = document.getElementById("afreen6").classList.add("mainboxclass");
        dice = 1
        dice2 = 1;

    }

}
var dice2 = 1;
function boxslider1() {
    if (dice2 == 1) {
        var asd = document.getElementById("afreen1").classList.remove("mainboxclass1")
        var af1 = document.getElementById("afreen1").style.order = "2";
        var asd = document.getElementById("afreen2").classList.remove("mainboxclass1")

        var af2 = document.getElementById("afreen2").style.order = "3";
        var asd = document.getElementById("afreen3").classList.remove("mainboxclass1")
        var asd = document.getElementById("afreen3").classList.add("mainboxclass")

        var sa = document.getElementById("afreen6").classList.remove("mainboxclass")
        var af4 = document.getElementById("afreen6").classList.add("mainboxclass1")
        var af5 = document.getElementById("afreen6").style.order = "1";
        var sa = document.getElementById("afreen4").classList.remove("mainboxclass1")
        var af4 = document.getElementById("afreen4").classList.add("mainboxclass")
        dice = 5;
        dice2 = dice2 + 1;
    }
    else if (dice2 === 2) {
        var af4 = document.getElementById("afreen1").classList.add("mainboxclass1")
        var af1 = document.getElementById("afreen1").style.order = "3";
        var af4 = document.getElementById("afreen2").classList.add("mainboxclass")

        var sa = document.getElementById("afreen6").classList.remove("mainboxclass")
        var af4 = document.getElementById("afreen6").classList.add("mainboxclass1")
        var af5 = document.getElementById("afreen6").style.order = "2";
        var sa = document.getElementById("afreen5").classList.remove("mainboxclass")
        var af4 = document.getElementById("afreen5").classList.add("mainboxclass1")
        var af5 = document.getElementById("afreen5").style.order = "1";
        var a65 = document.getElementById("afreen4").classList.remove("mainboxclass1")
        var a65 = document.getElementById("afreen4").classList.add("mainboxclass")
        var sa = document.getElementById("afreen3").classList.remove("mainboxclass1")
        var a65 = document.getElementById("afreen3").classList.add("mainboxclass")
        dice2 = dice2 + 1;

    }
    else if (dice2 === 3) {
        var sa = document.getElementById("afreen1").classList.remove("mainboxclass1");
        var af2 = document.getElementById("afreen1").classList.add("mainboxclass");
        var sa = document.getElementById("afreen2").classList.remove("mainboxclass1");
        var af2 = document.getElementById("afreen2").classList.add("mainboxclass");
        var sa = document.getElementById("afreen6").classList.remove("mainboxclass");
        var af4 = document.getElementById("afreen6").classList.add("mainboxclass1");
        var af5 = document.getElementById("afreen6").style.order = "3";
        var sa = document.getElementById("afreen5").classList.remove("mainboxclass");
        var af4 = document.getElementById("afreen5").classList.add("mainboxclass1");
        var af5 = document.getElementById("afreen5").style.order = "2";
        var ds3 = document.getElementById("afreen4").style.order = "1";
        var asd = document.getElementById("afreen4").classList.remove("mainboxclass")
        var ds3 = document.getElementById("afreen4").classList.add("mainboxclass1")
        dice2 = dice2 + 1;
        dice = 4;
    }
    else if (dice2 == 4) {
        var as1 = document.getElementById("afreen1").classList.remove("mainboxclass1")
        var as1 = document.getElementById("afreen1").classList.add("mainboxclass")
        var ad1 = document.getElementById("afreen3").classList.add("mainboxclass1");
        var fe1 = document.getElementById("afreen3").style.order = "1";
        var af4 = document.getElementById("afreen6").classList.remove("mainboxclass1")
        var af4 = document.getElementById("afreen6").classList.add("mainboxclass")
        var af4 = document.getElementById("afreen5").classList.add("mainboxclass1")
        var af5 = document.getElementById("afreen5").style.order = "3";
        var ds3 = document.getElementById("afreen4").style.order = "2";
        var ds3 = document.getElementById("afreen4").classList.add("mainboxclass1")
        dice2 = dice2 + 1;
        dice = 3;

    }
    else if (dice2 == 5) {

        var af4 = document.getElementById("afreen6").classList.remove("mainboxclass1")
        var afe4 = document.getElementById("afreen6").classList.add("mainboxclass")
        var afw4 = document.getElementById("afreen5").classList.remove("mainboxclass1")
        var afw4 = document.getElementById("afreen5").classList.add("mainboxclass")
        var ds3 = document.getElementById("afreen4").style.order = "3";
        var ds3 = document.getElementById("afreen4").classList.add("mainboxclass1")
        var ad1 = document.getElementById("afreen3").classList.add("mainboxclass1");
        var fe1 = document.getElementById("afreen3").style.order = "2";
        var err = document.getElementById("afreen2").classList.remove("mainboxclass")
        var err = document.getElementById("afreen2").classList.add("mainboxclass1")
        var asd = document.getElementById("afreen2").style.order = "1"
        dice2 = dice2 + 1
        dice = 2
    }
    else if (dice2 == 6) {

        var asd = document.getElementById("afreen1").classList.remove("mainboxclass")
        var asd = document.getElementById("afreen1").classList.add("mainboxclass1")
        var dsw = document.getElementById("afreen1").style.order = "1"
        var err = document.getElementById("afreen2").classList.add("mainboxclass1")
        var asd = document.getElementById("afreen2").style.order = "2";
        var err = document.getElementById("afreen3").classList.add("mainboxclass1")
        var asd = document.getElementById("afreen3").style.order = "3";
        var err = document.getElementById("afreen4").classList.remove("mainboxclass1")
        var err = document.getElementById("afreen4").classList.add("mainboxclass")

        var err = document.getElementById("afreen5").classList.remove("mainboxclass1");
        var err = document.getElementById("afreen5").classList.add("mainboxclass");
        var err = document.getElementById("afreen6").classList.remove("mainboxclass1");
        var err = document.getElementById("afreen6").classList.add("mainboxclass")
        dice2 = 1;
        dice = 1;

    }
}
var dice = 1;
var dice2 = 1;
var dice3 = 1
function zara_left() {
    const wid = window.matchMedia("(max-width:885px)")
    if (wid.matches) {

        function boxslider_() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            if (dice3 === 1) {
                console.log("this is working321");
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen6").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen3").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen4").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen5").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass")
                var af2 = document.getElementById("afreen2").classList.add("mainboxclass1");
                var afe = document.getElementById("afreen2").style.order = "1";
                dice3 = dice3 + 1
                dice2 = 6
            }
            else if (dice3 === 2) {
                var afe = document.getElementById("afreen3").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen3").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen3").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1");
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1");
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1");
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1");
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1");
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice3 = dice3 + 1;
                dice2 = 5;
            }
            else if (dice3 === 3) {
                var afe = document.getElementById("afreen4").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen4").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen4").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice3 = dice3 + 1;
                dice2 = 4;
            }
            else if (dice3 === 4) {
                var afe = document.getElementById("afreen5").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen5").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen5").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice3 = dice3 + 1;
                dice2 = 3;
            }
            else if (dice3 === 5) {
                var afe = document.getElementById("afreen6").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen6").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen6").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                dice3 = dice3 + 1;
                dice2 = 2;
            }
            else if (dice3 === 6) {
                var afe = document.getElementById("afreen1").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen1").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen1").style.order = "1";
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice3 = 1;
                dice2 = 1;
            }
        }
        boxslider_()
    }
    else {
        function boxslider1() {
            if (dice2 == 1) {
                var asd = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var af1 = document.getElementById("afreen1").style.order = "2";
                var asd = document.getElementById("afreen2").classList.remove("mainboxclass1")

                var af2 = document.getElementById("afreen2").style.order = "3";
                var asd = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var asd = document.getElementById("afreen3").classList.add("mainboxclass")

                var sa = document.getElementById("afreen6").classList.remove("mainboxclass")
                var af4 = document.getElementById("afreen6").classList.add("mainboxclass1")
                var af5 = document.getElementById("afreen6").style.order = "1";
                var sa = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var af4 = document.getElementById("afreen4").classList.add("mainboxclass")
                dice = 5;
                dice2 = dice2 + 1;
            }
            else if (dice2 === 2) {
                var af4 = document.getElementById("afreen1").classList.add("mainboxclass1")
                var af1 = document.getElementById("afreen1").style.order = "3";
                var af4 = document.getElementById("afreen2").classList.add("mainboxclass")

                var sa = document.getElementById("afreen6").classList.remove("mainboxclass")
                var af4 = document.getElementById("afreen6").classList.add("mainboxclass1")
                var af5 = document.getElementById("afreen6").style.order = "2";
                var sa = document.getElementById("afreen5").classList.remove("mainboxclass")
                var af4 = document.getElementById("afreen5").classList.add("mainboxclass1")
                var af5 = document.getElementById("afreen5").style.order = "1";
                var a65 = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var a65 = document.getElementById("afreen4").classList.add("mainboxclass")
                var sa = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var a65 = document.getElementById("afreen3").classList.add("mainboxclass")
                dice2 = dice2 + 1;

            }
            else if (dice2 === 3) {
                var sa = document.getElementById("afreen1").classList.remove("mainboxclass1");
                var af2 = document.getElementById("afreen1").classList.add("mainboxclass");
                var sa = document.getElementById("afreen2").classList.remove("mainboxclass1");
                var af2 = document.getElementById("afreen2").classList.add("mainboxclass");
                var sa = document.getElementById("afreen6").classList.remove("mainboxclass");
                var af4 = document.getElementById("afreen6").classList.add("mainboxclass1");
                var af5 = document.getElementById("afreen6").style.order = "3";
                var sa = document.getElementById("afreen5").classList.remove("mainboxclass");
                var af4 = document.getElementById("afreen5").classList.add("mainboxclass1");
                var af5 = document.getElementById("afreen5").style.order = "2";
                var ds3 = document.getElementById("afreen4").style.order = "1";
                var asd = document.getElementById("afreen4").classList.remove("mainboxclass")
                var ds3 = document.getElementById("afreen4").classList.add("mainboxclass1")
                dice2 = dice2 + 1;
                dice = 4;
            }
            else if (dice2 == 4) {
                var as1 = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var as1 = document.getElementById("afreen1").classList.add("mainboxclass")
                var ad1 = document.getElementById("afreen3").classList.add("mainboxclass1");
                var fe1 = document.getElementById("afreen3").style.order = "1";
                var af4 = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var af4 = document.getElementById("afreen6").classList.add("mainboxclass")
                var af4 = document.getElementById("afreen5").classList.add("mainboxclass1")
                var af5 = document.getElementById("afreen5").style.order = "3";
                var ds3 = document.getElementById("afreen4").style.order = "2";
                var ds3 = document.getElementById("afreen4").classList.add("mainboxclass1")
                dice2 = dice2 + 1;
                dice = 3;

            }
            else if (dice2 == 5) {

                var af4 = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe4 = document.getElementById("afreen6").classList.add("mainboxclass")
                var afw4 = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afw4 = document.getElementById("afreen5").classList.add("mainboxclass")
                var ds3 = document.getElementById("afreen4").style.order = "3";
                var ds3 = document.getElementById("afreen4").classList.add("mainboxclass1")
                var ad1 = document.getElementById("afreen3").classList.add("mainboxclass1");
                var fe1 = document.getElementById("afreen3").style.order = "2";
                var err = document.getElementById("afreen2").classList.remove("mainboxclass")
                var err = document.getElementById("afreen2").classList.add("mainboxclass1")
                var asd = document.getElementById("afreen2").style.order = "1"
                dice2 = dice2 + 1
                dice = 2
            }
            else if (dice2 == 6) {

                var asd = document.getElementById("afreen1").classList.remove("mainboxclass")
                var asd = document.getElementById("afreen1").classList.add("mainboxclass1")
                var dsw = document.getElementById("afreen1").style.order = "1"
                var err = document.getElementById("afreen2").classList.add("mainboxclass1")
                var asd = document.getElementById("afreen2").style.order = "2";
                var err = document.getElementById("afreen3").classList.add("mainboxclass1")
                var asd = document.getElementById("afreen3").style.order = "3";
                var err = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var err = document.getElementById("afreen4").classList.add("mainboxclass")

                var err = document.getElementById("afreen5").classList.remove("mainboxclass1");
                var err = document.getElementById("afreen5").classList.add("mainboxclass");
                var err = document.getElementById("afreen6").classList.remove("mainboxclass1");
                var err = document.getElementById("afreen6").classList.add("mainboxclass")
                dice2 = 1;
                dice = 1;

            }
        }
        boxslider1();
    }

}
function zara_right() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        console.log("if part is working and its console");

        function boxslider() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            if (dice2 === 1) {
                console.log("this is working321");
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen2").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen3").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen4").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen5").classList.add("mainboxclass");
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass")
                var af2 = document.getElementById("afreen6").classList.add("mainboxclass1");
                var afe = document.getElementById("afreen6").style.order = "1";
                dice2 = dice2 + 1
                dice3 = 6
            }
            else if (dice2 === 2) {
                var afe = document.getElementById("afreen5").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen5").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen5").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice2 = dice2 + 1;
                dice3 = 5;
            }
            else if (dice2 === 3) {
                var afe = document.getElementById("afreen4").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen4").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen4").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice2 = dice2 + 1;
                dice3 = 4
            }
            else if (dice2 === 4) {
                var afe = document.getElementById("afreen3").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen3").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen3").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice2 = dice2 + 1;
                dice3 = 3;
            }
            else if (dice2 === 5) {
                var afe = document.getElementById("afreen2").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen2").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen2").style.order = "1";
                var afr = document.getElementById("afreen1").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen1").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice2 = dice2 + 1;
                dice3 = 2;
            }
            else if (dice2 === 6) {
                var afe = document.getElementById("afreen1").classList.remove("mainboxclass");
                var afe3 = document.getElementById("afreen1").classList.add("mainboxclass1");
                var df3 = document.getElementById("afreen1").style.order = "1";
                var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen2").classList.add("mainboxclass");
                var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen5").classList.add("mainboxclass");
                var afe = document.getElementById("afreen3").classList.add("mainboxclass");
                var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen4").classList.add("mainboxclass");
                var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
                var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var afe = document.getElementById("afreen6").classList.add("mainboxclass");
                dice2 = 1;
                dice3 = 1;
            }
        }
        boxslider()
    }


    else {
        console.log("Else part is working");
        function boxslider_1() {
            if (dice === 1) {
                var af1 = document.getElementById("afreen1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass");
                var af2 = document.getElementById("afreen2").style.order = "1";
                var af3 = document.getElementById("afreen3").style.order = "2";
                var af1 = document.getElementById("afreen4").classList.add("mainboxclass1");
                var af4 = document.getElementById("afreen4").style.order = "3";

                dice = dice + 1;
                dice2 = 6;
            }
            else if (dice === 2) {
                var af1 = document.getElementById("afreen1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen2").classList.remove("mainboxclass1");
                var af8 = document.getElementById("afreen2").classList.add("mainboxclass");
                var af3 = document.getElementById("afreen3").style.order = "1";
                var af5 = document.getElementById("afreen4").style.order = "2";
                var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
                var af5 = document.getElementById("afreen5").classList.add("mainboxclass1")
                var af2 = document.getElementById("afreen5").style.order = "3";

                dice = dice + 1;
                dice2 = 5;
            }
            else if (dice === 3) {
                var af1 = document.getElementById("afreen3").classList.remove("mainboxclass1");
                var af3 = document.getElementById("afreen3").classList.add("mainboxclass");
                var af5 = document.getElementById("afreen4").style.order = "1";
                var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
                var af5 = document.getElementById("afreen5").classList.add("mainboxclass1")
                var af5 = document.getElementById("afreen5").style.order = "2";
                var af1 = document.getElementById("afreen6").classList.remove("mainboxclass");
                var af6 = document.getElementById("afreen6").classList.add("mainboxclass1")
                var af7 = document.getElementById("afreen6").style.order = "3";

                dice = dice + 1;
                dice2 = 4;
            }
            else if (dice === 4) {
                var af1 = document.getElementById("afreen4").classList.remove("mainboxclass1");
                var af3 = document.getElementById("afreen4").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
                var af5 = document.getElementById("afreen5").classList.add("mainboxclass1")
                var af5 = document.getElementById("afreen5").style.order = "1";
                var af1 = document.getElementById("afreen6").classList.remove("mainboxclass1");
                var af6 = document.getElementById("afreen6").classList.add("mainboxclass1")
                var af7 = document.getElementById("afreen6").style.order = "2";
                var af7 = document.getElementById("afreen1").style.order = "3";
                var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
                dice = dice + 1;
                dice2 = 3;

            }
            else if (dice === 5) {
                var af5 = document.getElementById("afreen5").classList.remove("mainboxclass1")
                var af5 = document.getElementById("afreen5").classList.add("mainboxclass")
                var af1 = document.getElementById("afreen6").classList.remove("mainboxclass");
                var af6 = document.getElementById("afreen6").classList.add("mainboxclass1")
                var af7 = document.getElementById("afreen6").style.order = "1";
                var af7 = document.getElementById("afreen1").style.order = "2";
                var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
                var af1 = document.getElementById("afreen2").classList.remove("mainboxclass");
                var af8 = document.getElementById("afreen2").classList.add("mainboxclass1");
                var af7 = document.getElementById("afreen2").style.order = "3";
                var af1 = document.getElementById("afreen5").classList.remove("mainboxclass");
                dice = dice + 1;
                dice2 = 2;

            }
            else if (dice === 6) {
                var af7 = document.getElementById("afreen1").style.order = "1";
                var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
                var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
                var af1 = document.getElementById("afreen2").classList.remove("mainboxclass");
                var af8 = document.getElementById("afreen2").classList.add("mainboxclass1");
                var af7 = document.getElementById("afreen2").style.order = "2";
                var af1 = document.getElementById("afreen3").classList.remove("mainboxclass");
                var af8 = document.getElementById("afreen3").classList.add("mainboxclass1");
                var af7 = document.getElementById("afreen3").style.order = "3";
                var af3 = document.getElementById("afreen4").classList.remove("mainboxclass1");
                var af3 = document.getElementById("afreen4").classList.add("mainboxclass");
                var af1 = document.getElementById("afreen5").classList.remove("mainboxclass1");
                var af5 = document.getElementById("afreen5").classList.add("mainboxclass");
                var af5 = document.getElementById("afreen6").classList.remove("mainboxclass1")
                var af5 = document.getElementById("afreen6").classList.add("mainboxclass");
                dice = 1
                dice2 = 1;
            }
        }
        boxslider_1()
    }
}
var reload = 1;
var reload1;
var time = setInterval(widthadjusting, .10);
function widthadjusting() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        // window.location.reload("true")
        // console.log("width -------- if part is working");
        // reload=0;
        if (reload === 1) {

            var afe = document.getElementById("afreen1").classList.remove("mainboxclass");
            var afe3 = document.getElementById("afreen1").classList.add("mainboxclass1");
            var df3 = document.getElementById("afreen1").style.order = "1";
            var afr = document.getElementById("afreen2").classList.remove("mainboxclass1")
            var afe = document.getElementById("afreen2").classList.add("mainboxclass");
            var afr = document.getElementById("afreen5").classList.remove("mainboxclass1")
            var afe = document.getElementById("afreen5").classList.add("mainboxclass");
            var afe = document.getElementById("afreen3").classList.add("mainboxclass");
            var afr = document.getElementById("afreen3").classList.remove("mainboxclass1")
            var afe = document.getElementById("afreen4").classList.add("mainboxclass");
            var afr = document.getElementById("afreen4").classList.remove("mainboxclass1")
            var afr = document.getElementById("afreen6").classList.remove("mainboxclass1")
            var afe = document.getElementById("afreen6").classList.add("mainboxclass");
            reload = 0;
            reload1 = 1;
            // console.log("the reload is " + reload);
        }
        
    }

    else {
        // boxslider1();
        // console.log("Else log value is " + reload);
        reload = 1
        if (reload1 === 1) {
            reload1=0
            var af7 = document.getElementById("afreen1").style.order = "1";
            var af1 = document.getElementById("afreen1").classList.remove("mainboxclass");
            var af1 = document.getElementById("afreen1").classList.add("mainboxclass1");
            var af1 = document.getElementById("afreen2").classList.remove("mainboxclass");
            var af8 = document.getElementById("afreen2").classList.add("mainboxclass1");
            var af7 = document.getElementById("afreen2").style.order = "2";
            var af1 = document.getElementById("afreen3").classList.remove("mainboxclass");
            var af8 = document.getElementById("afreen3").classList.add("mainboxclass1");
            var af7 = document.getElementById("afreen3").style.order = "3";
            var af3 = document.getElementById("afreen4").classList.remove("mainboxclass1");
            var af3 = document.getElementById("afreen4").classList.add("mainboxclass");
            var af1 = document.getElementById("afreen5").classList.remove("mainboxclass1");
            var af5 = document.getElementById("afreen5").classList.add("mainboxclass");
            var af5 = document.getElementById("afreen6").classList.remove("mainboxclass1")
            var af5 = document.getElementById("afreen6").classList.add("mainboxclass");

        }


    }
}
function packagefun(){
    var qwe=document.getElementById("packbox1").classList.add("mouse1")
    var wq=document.getElementById("packhead1").classList.remove("packboxhead")
    var wq=document.getElementById("packhead1").classList.add("packboxhead1")
    var wd=document.getElementById("pack1").classList.add("expl1")
    var wd=document.getElementById("toh1").classList.add("tohpara");
}
function packagefun1(){
    
    var wq=document.getElementById("packhead1").classList.remove("packboxhead1")
    var wq=document.getElementById("packhead1").classList.add("packboxhead")
    var qwe=document.getElementById("packbox1").classList.remove("mouse1")
    var wd=document.getElementById("pack1").classList.remove("expl1")
    var wd=document.getElementById("toh1").classList.remove ("tohpara");
}
// -------------------------------
function packagefun_1(){
    var qwe=document.getElementById("packbox2").classList.add("mouse1")
    var wq=document.getElementById("packhead2").classList.remove("packboxhead")
    var wq=document.getElementById("packhead2").classList.add("packboxhead1")
    var wd=document.getElementById("pack2").classList.add("expl1")
    var wd=document.getElementById("toh2").classList.add("tohpara");
}
function packagefun1_1(){
    var wq=document.getElementById("packhead2").classList.remove("packboxhead1")
    var wq=document.getElementById("packhead2").classList.add("packboxhead")
    var qwe=document.getElementById("packbox2").classList.remove("mouse1")
    var wd=document.getElementById("pack2").classList.remove("expl1")
    var wd=document.getElementById("toh2").classList.remove ("tohpara");

}
// -------------------------------
function packagefun_2(){
    var qwe=document.getElementById("packbox3").classList.add("mouse1")
    var wq=document.getElementById("packhead3").classList.remove("packboxhead")
    var wq=document.getElementById("packhead3").classList.add("packboxhead1")
    var wd=document.getElementById("pack3").classList.add("expl1")
    var wd=document.getElementById("toh3").classList.add("tohpara");
}
function packagefun1_2(){
    var wq=document.getElementById("packhead3").classList.remove("packboxhead1")
    var wq=document.getElementById("packhead3").classList.add("packboxhead")
    var qwe=document.getElementById("packbox3").classList.remove("mouse1")
    var wd=document.getElementById("pack3").classList.remove("expl1")
    var wd=document.getElementById("toh3").classList.remove ("tohpara");

}
// -------------------------------
function packagefun_3(){
    var qwe=document.getElementById("packbox4").classList.add("mouse1")
    var wq=document.getElementById("packhead4").classList.remove("packboxhead")
    var wq=document.getElementById("packhead4").classList.add("packboxhead1")
    var wd=document.getElementById("pack4").classList.add("expl1")
    var wd=document.getElementById("toh4").classList.add("tohpara");
}
function packagefun1_3(){

    var wq=document.getElementById("packhead4").classList.remove("packboxhead1")
    var wq=document.getElementById("packhead4").classList.add("packboxhead")
    var qwe=document.getElementById("packbox4").classList.remove("mouse1")
    var wd=document.getElementById("pack4").classList.remove("expl1")
    var wd=document.getElementById("toh4").classList.remove ("tohpara");
}
// -------------------------------
function packagefun_4(){
    var qwe=document.getElementById("packbox5").classList.add("mouse1")
    var wq=document.getElementById("packhead5").classList.remove("packboxhead")
    var wq=document.getElementById("packhead5").classList.add("packboxhead1")
    var wd=document.getElementById("pack5").classList.add("expl1")
    var wd=document.getElementById("toh5").classList.add("tohpara");
}
function packagefun1_4(){
    var wq=document.getElementById("packhead5").classList.remove("packboxhead1")
    var wq=document.getElementById("packhead5").classList.add("packboxhead")
    var qwe=document.getElementById("packbox5").classList.remove("mouse1")
    var wd=document.getElementById("pack5").classList.remove("expl1")
    var wd=document.getElementById("toh5").classList.remove ("tohpara");
}
// -------------------------------
function packagefun_5(){
    var qwe=document.getElementById("packbox6").classList.add("mouse1")
    var wq=document.getElementById("packhead6").classList.remove("packboxhead")
    var wq=document.getElementById("packhead6").classList.add("packboxhead1")
    var wd=document.getElementById("pack6").classList.add("expl1")
    var wd=document.getElementById("toh6").classList.add("tohpara");
}
function packagefun1_5(){
    var wq=document.getElementById("packhead6").classList.remove("packboxhead1")
    var wq=document.getElementById("packhead6").classList.add("packboxhead")
    var qwe=document.getElementById("packbox6").classList.remove("mouse1")
    var wd=document.getElementById("pack6").classList.remove("expl1")
    var wd=document.getElementById("toh6").classList.remove ("tohpara");

}
// -------------------------------
var reload_1 = 1;
var reload1_1;
var time = setInterval(widthadjusting1, .10);
function widthadjusting1() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        // window.location.reload("true")
        // console.log("width -------- if part is working");
        // reload=0;
        if (reload_1 === 1) {

            var afe = document.getElementById("client1").classList.remove("mainboxclass");
            var afe3 = document.getElementById("client1").classList.add("mainboxclass1");
            var df3 = document.getElementById("client1").style.order = "1";
            var afr = document.getElementById("client2").classList.remove("mainboxclass1")
            var afe = document.getElementById("client2").classList.add("mainboxclass");
            var afr = document.getElementById("client5").classList.remove("mainboxclass1")
            var afe = document.getElementById("client5").classList.add("mainboxclass");
            var afe = document.getElementById("client3").classList.add("mainboxclass");
            var afr = document.getElementById("client3").classList.remove("mainboxclass1")
            var afe = document.getElementById("client4").classList.add("mainboxclass");
            var afr = document.getElementById("client4").classList.remove("mainboxclass1")
            space=1;
            reload_1 = 0;
            reload1_1 = 1;
            // console.log("the reload is " + reload);
        }
        
    }

    else {
        // boxslider1();
        // console.log("Else log value is " + reload);
        reload_1 = 1
        if (reload1_1 === 1) {
            reload1_1=0
            var af7 = document.getElementById("client1").style.order = "1";
            var af1 = document.getElementById("client1").classList.remove("mainboxclass");
            var af1 = document.getElementById("client1").classList.add("mainboxclass1");
            var af1 = document.getElementById("client2").classList.remove("mainboxclass");
            var af8 = document.getElementById("client2").classList.add("mainboxclass1");
            var af7 = document.getElementById("client2").style.order = "2";
            var af1 = document.getElementById("client3").classList.add("mainboxclass");
            var af8 = document.getElementById("client3").classList.remove("mainboxclass1");
            var af3 = document.getElementById("client4").classList.remove("mainboxclass1");
            var af3 = document.getElementById("client4").classList.add("mainboxclass");
            var af1 = document.getElementById("client5").classList.remove("mainboxclass1");
            var af5 = document.getElementById("client5").classList.add("mainboxclass");
        }


    }
}
var space=1;
var space1=1;
function review_right() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        console.log("if part is working and its console");

        function reviewslider() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            if (space === 1) {
                console.log("this is working321");
                var afe = document.getElementById("client5").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client5").classList.add("mainboxclass1");
                var df3 = document.getElementById("client5").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1")
                //
                // var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                // var af1 = document.getElementById("client1").classList.add("mainboxclass");
                // var af1 = document.getElementById("client2").style.order="1";
                // var af1 = document.getElementById("client2").classList.add("mainboxclass1");
                // var af1 = document.getElementById("client3").classList.add("mainboxclass");
                // var af1 = document.getElementById("client4").classList.add("mainboxclass");
                // var af1 = document.getElementById("client5").classList.add("mainboxclass");
                space = space + 1
                space3 = 5
            }
            else if (space === 2) {
                var afe = document.getElementById("client4").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client4").classList.add("mainboxclass1");
                var df3 = document.getElementById("client4").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afr = document.getElementById("client5").classList.remove("mainboxclass1")

                space = space + 1;
                space3 = 4;
            }
            else if (space === 3) {
                var afe = document.getElementById("client3").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client3").classList.add("mainboxclass1");
                var df3 = document.getElementById("client3").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1")
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afr = document.getElementById("client5").classList.remove("mainboxclass1");

                space = space + 1;
                space3 = 3;
            }
            else if (space === 4) {
                var afe = document.getElementById("client2").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client2").classList.add("mainboxclass1");
                var df3 = document.getElementById("client2").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client5").classList.remove("mainboxclass1")
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1")
                space = space + 1;
                space3 = 2;
            }
            else if (space === 5) {
                var afe = document.getElementById("client1").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client1").classList.add("mainboxclass1");
                var df3 = document.getElementById("client1").style.order = "1";
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afr = document.getElementById("client5").classList.remove("mainboxclass1")
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1")
                space =  1;
                space3 = 1;
            }
        }
        reviewslider()
    }


    else {
        console.log("Else part is working");
        function boxslider_1() {
            if (space1 ==1){
                var af1 = document.getElementById("client1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("client1").classList.add("mainboxclass");
                var af1 = document.getElementById("client2").classList.add("mainboxclass1");
                var af1 = document.getElementById("client2").classList.remove("mainboxclass");
                var af2 = document.getElementById("client2").style.order = "1";
                var af3 = document.getElementById("client3").style.order = "2";
                var af1 = document.getElementById("client3").classList.add("mainboxclass1");
                var af1 = document.getElementById("client3").classList.remove("mainboxclass");
                var af1 = document.getElementById("client4").classList.add("mainboxclass");
                space1 =space1 + 1;
                space2 = 5;
            }
            else if (space1 === 2) {
                // var af1 = document.getElementById("client3").classList.add("mainboxclass1");
                // var af1 = document.getElementById("client3").classList.remove("mainboxclass");
                var af1 = document.getElementById("client1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("client1").classList.add("mainboxclass");
                var af1 = document.getElementById("client2").classList.remove("mainboxclass1");
                var af8 = document.getElementById("client2").classList.add("mainboxclass");
                var af3 = document.getElementById("client3").style.order = "1";
                var af5 = document.getElementById("client4").style.order = "2";
                var af1 = document.getElementById("client4").classList.add("mainboxclass1");
                var af1 = document.getElementById("client4").classList.remove("mainboxclass");
                var af1 = document.getElementById("client5").classList.remove("mainboxclass1");
                var af5 = document.getElementById("client5").classList.add("mainboxclass")
                space1=space1 + 1;
                space2 = 4;
            }
            else if (space1 === 3) {
                var af1 = document.getElementById("client3").classList.remove("mainboxclass1");
                var af3 = document.getElementById("client3").classList.add("mainboxclass");
                var af5 = document.getElementById("client4").style.order = "1";
                var af1 = document.getElementById("client5").classList.remove("mainboxclass");
                var af5 = document.getElementById("client5").classList.add("mainboxclass1")
                var af5 = document.getElementById("client5").style.order = "2";
                space1 =space1 + 1;
                space2 = 3;
            }
            else if (space1 === 4) {
                var af1 = document.getElementById("client4").classList.remove("mainboxclass1");
                var af3 = document.getElementById("client4").classList.add("mainboxclass");
                var af1 = document.getElementById("client5").classList.remove("mainboxclass");
                var af5 = document.getElementById("client5").classList.add("mainboxclass1")
                var af5 = document.getElementById("client5").style.order = "1";
                var af7 = document.getElementById("client1").style.order = "2";
                var af1 = document.getElementById("client1").classList.remove("mainboxclass");
                var af1 = document.getElementById("client1").classList.add("mainboxclass1");
                space1 =space1 + 1;
                space2 = 2;

            }
            else if (space1 === 5) {
                var af5 = document.getElementById("client5").classList.remove("mainboxclass1")
                var af5 = document.getElementById("client5").classList.add("mainboxclass")
                var af7 = document.getElementById("client1").style.order = "1";
                var af1 = document.getElementById("client1").classList.remove("mainboxclass");
                var af1 = document.getElementById("client1").classList.add("mainboxclass1");
                var af1 = document.getElementById("client2").classList.remove("mainboxclass");
                var af8 = document.getElementById("client2").classList.add("mainboxclass1");
                var af7 = document.getElementById("client2").style.order = "2";
                var af1 = document.getElementById("client5").classList.remove("mainboxclass");
                space1 =1;
                space2 = 1;

            }
            
        }
        boxslider_1()
    }
}

var space3=1;
var space2=1;
function reviews_left() {
    const wid = window.matchMedia("(max-width:885px)")
    if (wid.matches) {

        function b1oxslider_() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            if (space3 === 1) {
                console.log("this is working321");
                var afr = document.getElementById("client2").classList.remove("mainboxclass");
                var af2 = document.getElementById("client2").classList.add("mainboxclass1");
                var afe = document.getElementById("client2").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var af1 = document.getElementById("client1").classList.add("mainboxclass");
                var af1 = document.getElementById("client3").classList.add("mainboxclass");
                var af1 = document.getElementById("client4").classList.add("mainboxclass");
                var af1 = document.getElementById("client5").classList.add("mainboxclass");
                space3 = space3 + 1
                space = 5;
                
            }
            else if (space3 === 2) {
                console.log("the value of space3" +space3);
                var afe = document.getElementById("client3").classList.remove("mainboxclass");
                var df3 = document.getElementById("client3").style.order = "1";
                var afe3 = document.getElementById("client3").classList.add("mainboxclass1");
                var afr = document.getElementById("client1").classList.remove("mainboxclass1");
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client2").classList.remove("mainboxclass1");
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afr = document.getElementById("client5").classList.remove("mainboxclass1");
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1");
                space3 = space3 + 1;
                space = 4;
            }
            else if (space3 === 3) {
                var afe = document.getElementById("client4").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client4").classList.add("mainboxclass1");
                var df3 = document.getElementById("client4").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afr = document.getElementById("client5").classList.remove("mainboxclass1")
                space3 = space3 + 1;
                space = 3;
            }
            else if (space3 === 4) {
                var afe = document.getElementById("client5").classList.remove("mainboxclass");
                var afe3 = document.getElementById("client5").classList.add("mainboxclass1");
                var df3 = document.getElementById("client5").style.order = "1";
                var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                var afe = document.getElementById("client1").classList.add("mainboxclass");
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1")
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                space3 = space3 + 1;
                space = 2;
            }
            else if (space3 === 5) {
                
                var afr = document.getElementById("client1").classList.remove("mainboxclass")
                var afe = document.getElementById("client1").classList.add("mainboxclass1");
                var atn = document.getElementById("client1").style.order="1";
                var afr = document.getElementById("client5").classList.remove("mainboxclass1")
                var afe = document.getElementById("client5").classList.add("mainboxclass");
                var afe = document.getElementById("client3").classList.add("mainboxclass");
                var afr = document.getElementById("client3").classList.remove("mainboxclass1")
                var afe = document.getElementById("client4").classList.add("mainboxclass");
                var afr = document.getElementById("client4").classList.remove("mainboxclass1")
                var afr = document.getElementById("client2").classList.remove("mainboxclass1")
                var afe = document.getElementById("client2").classList.add("mainboxclass");
                space3=1;
                space = 1;
            }
        }
        b1oxslider_()
    }
    else {
        function box1slider1() {
            if (space2 == 1) {
                var sa = document.getElementById("client5").classList.remove("mainboxclass")
                var af4 = document.getElementById("client5").classList.add("mainboxclass1")
                var af5 = document.getElementById("client5").style.order = "1";
                var asd = document.getElementById("client1").classList.remove("mainboxclass")
                var asd = document.getElementById("client1").classList.add("mainboxclass1")
                var af1 = document.getElementById("client1").style.order = "2";
                var asd = document.getElementById("client2").classList.remove("mainboxclass1")
                var asd = document.getElementById("client2").classList.add("mainboxclass")
                var asd = document.getElementById("client3").classList.remove("mainboxclass1")
                var asd = document.getElementById("client3").classList.add("mainboxclass")
                var sa = document.getElementById("client4").classList.remove("mainboxclass1")
                var af4 = document.getElementById("client4").classList.add("mainboxclass")
                space2 = space2 + 1; 
                space1 = 5;
            }
            else if (space2 === 2) {
                var a65 = document.getElementById("client4").classList.remove("mainboxclass")
                var a65 = document.getElementById("client4").classList.add("mainboxclass1")
                var af1 = document.getElementById("client4").style.order = "1";
                var sa = document.getElementById("client5").classList.remove("mainboxclass")
                var af4 = document.getElementById("client5").classList.add("mainboxclass1")
                var af5 = document.getElementById("client5").style.order = "2";
                var af4 = document.getElementById("client1").classList.remove("mainboxclass1")
                var af4 = document.getElementById("client1").classList.add("mainboxclass")
                var af4 = document.getElementById("client2").classList.add("mainboxclass")
                var sa = document.getElementById("client3").classList.remove("mainboxclass1")
                var a65 = document.getElementById("client3").classList.add("mainboxclass")
                space2 = space2 + 1;
                space1=4;
            }
            else if (space2 === 3) {
                var ds3 = document.getElementById("client4").style.order = "2";
                var asd = document.getElementById("client4").classList.remove("mainboxclass")
                var ds3 = document.getElementById("client4").classList.add("mainboxclass1")
                var ds3 = document.getElementById("client3").style.order = "1";
                var asd = document.getElementById("client3").classList.remove("mainboxclass")
                var ds3 = document.getElementById("client3").classList.add("mainboxclass1")
                var sa = document.getElementById("client1").classList.remove("mainboxclass1");
                var af2 = document.getElementById("client1").classList.add("mainboxclass");
                var sa = document.getElementById("client2").classList.remove("mainboxclass1");
                var af2 = document.getElementById("client2").classList.add("mainboxclass");
                var sa = document.getElementById("client5").classList.remove("mainboxclass1");
                var af4 = document.getElementById("client5").classList.add("mainboxclass");
                space2 = space2 + 1;
                space1 =3 
            }
            else if (space2 == 4) {
                var as1 = document.getElementById("client2").classList.remove("mainboxclass")
                var ad1 = document.getElementById("client2").classList.add("mainboxclass1");
                var fe1 = document.getElementById("client2").style.order = "1";
                var as1 = document.getElementById("client1").classList.remove("mainboxclass1")
                var as1 = document.getElementById("client1").classList.add("mainboxclass")
                var ad1 = document.getElementById("client3").classList.add("mainboxclass1");
                var fe1 = document.getElementById("client3").style.order = "2";
                var ds3 = document.getElementById("client4").classList.remove("mainboxclass1")
                var ds3 = document.getElementById("client4").classList.add("mainboxclass")
                var af4 = document.getElementById("client5").classList.remove("mainboxclass1")
                var ds3 = document.getElementById("client5").classList.add("mainboxclass")
                space2 = space2 + 1;
                space1= 2

            }
            else if (space2 == 5) {
                var ds3 = document.getElementById("client1").style.order = "1";
                var ds3 = document.getElementById("client1").classList.add("mainboxclass1")
                var af4 = document.getElementById("client1").classList.remove("mainboxclass")
                var err = document.getElementById("client2").classList.remove("mainboxclass")
                var err = document.getElementById("client2").classList.add("mainboxclass1")
                var asd = document.getElementById("client2").style.order = "2"
                var af4 = document.getElementById("client5").classList.remove("mainboxclass1")
                var af4 = document.getElementById("client5").classList.add("mainboxclass")
                var af4 = document.getElementById("client4").classList.remove("mainboxclass1")
                var af4 = document.getElementById("client3").classList.remove("mainboxclass1")
                var ad1 = document.getElementById("client3").classList.add("mainboxclass");
                var ad1 = document.getElementById("client4").classList.add("mainboxclass");
                space2 = 1
                space1 = 1
            }
        }
        box1slider1();
    }
}
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

var reload_2 = 1;
var reload1_2;
var time = setInterval(widthadjusting2, .10);
function widthadjusting2() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        // window.location.reload("true")
        // console.log("width -------- if part is working");
        // reload=0;
        if (reload_2 === 1) {

            var afe = document.getElementById("postbox1").classList.remove("mainboxclass");
            var afe = document.getElementById("postbox1").classList.add("mainboxclass1");
            var dfa = document.getElementById("postbox1").style.order = "1";
            var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
            var afe = document.getElementById("postbox2").classList.add("mainboxclass");
            var afr = document.getElementById("postbox5").classList.remove("mainboxclass1")
            var afe = document.getElementById("postbox5").classList.add("mainboxclass");
            var afe = document.getElementById("postbox3").classList.add("mainboxclass");
            var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
            var afe = document.getElementById("postbox4").classList.add("mainboxclass");
            var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
            space=1;
            reload_2 = 0;
            reload1_2 = 1;
            // console.log("the reload is " + reload);
        }
        
    }

    else {
        // boxslider1();
        // console.log("Else log value is " + reload);
        reload_2 = 1
        if (reload1_2 === 1) {
            reload1_2=0
            var af7 = document.getElementById("postbox1").style.order = "1";
            var af1 = document.getElementById("postbox1").classList.remove("mainboxclass");
            var af1 = document.getElementById("postbox1").classList.add("mainboxclass1");
            var af1 = document.getElementById("postbox2").classList.remove("mainboxclass");
            var af8 = document.getElementById("postbox2").classList.add("mainboxclass1");
            var af7 = document.getElementById("postbox2").style.order = "2";
            var af1 = document.getElementById("postbox3").classList.add("mainboxclass");
            var af8 = document.getElementById("postbox3").classList.remove("mainboxclass1");
            var af3 = document.getElementById("postbox4").classList.remove("mainboxclass1");
            var af3 = document.getElementById("postbox4").classList.add("mainboxclass");
            var af1 = document.getElementById("postbox5").classList.remove("mainboxclass1");
            var af5 = document.getElementById("postbox5").classList.add("mainboxclass");
        }


    }
}
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
var closer3=1;
var closer2=1;
function post_left() {
    const wid = window.matchMedia("(max-width:885px)")
    if (wid.matches) {

        function b1oxslider_() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            if (closer3 === 1) {
                console.log("this is working321");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass");
                var af2 = document.getElementById("postbox2").classList.add("mainboxclass1");
                var afe = document.getElementById("postbox2").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var af1 = document.getElementById("postbox1").classList.add("mainboxclass");
                var af1 = document.getElementById("postbox3").classList.add("mainboxclass");
                var af1 = document.getElementById("postbox4").classList.add("mainboxclass");
                var af1 = document.getElementById("postbox5").classList.add("mainboxclass");
                closer3 = closer3 + 1
                closer = 5;
                
            }
            else if (closer3 === 2) {
                console.log("the value of space3" +space3);
                var afe = document.getElementById("postbox3").classList.remove("mainboxclass");
                var df3 = document.getElementById("postbox3").style.order = "1";
                var af3 = document.getElementById("postbox3").classList.add("mainboxclass1");
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1");
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1");
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1");
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1");
                closer3 = closer3 + 1;
                closer = 4;
            }
            else if (closer3 === 3) {
                var afe = document.getElementById("postbox4").classList.remove("mainboxclass");
                var afe = document.getElementById("postbox4").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox4").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1")
                closer3 = closer3 + 1;
                closer = 3;
            }
            else if (closer3 === 4) {
                var afe = document.getElementById("postbox5").classList.remove("mainboxclass");
                var fe3 = document.getElementById("postbox5").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox5").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                closer3 = closer3 + 1;
                closer = 2;
            }
            else if (closer3 === 5) {
                
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass1");
                var atn = document.getElementById("postbox1").style.order="1";
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                closer3=1;
                closer = 1;
            }
        }
        b1oxslider_()
    }
    else {
        function box1slider1() {
            if (closer2 == 1) {
                var sa1 = document.getElementById("postbox5").classList.remove("mainboxclass")
                var af4 = document.getElementById("postbox5").classList.add("mainboxclass1")
                var af5 = document.getElementById("postbox5").style.order = "1";
                var asd = document.getElementById("postbox1").classList.remove("mainboxclass")
                var asd = document.getElementById("postbox1").classList.add("mainboxclass1")
                var af1 = document.getElementById("postbox1").style.order = "2";
                var asd = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var asd = document.getElementById("postbox2").classList.add("mainboxclass")
                var asd = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var asd = document.getElementById("postbox3").classList.add("mainboxclass")
                var sa5 = document.getElementById("postbox4").classList.remove("mainboxclass1")
                var af4 = document.getElementById("postbox4").classList.add("mainboxclass")
                closer2 = closer2 + 1; 
                closer1 = 5;
            }
            else if (closer2 === 2) {
                var a65 = document.getElementById("postbox4").classList.remove("mainboxclass")
                var a65 = document.getElementById("postbox4").classList.add("mainboxclass1")
                var af1 = document.getElementById("postbox4").style.order = "1";
                var saj = document.getElementById("postbox5").classList.remove("mainboxclass")
                var af4 = document.getElementById("postbox5").classList.add("mainboxclass1")
                var af5 = document.getElementById("postbox5").style.order = "2";
                var af4 = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var af4 = document.getElementById("postbox1").classList.add("mainboxclass")
                var af4 = document.getElementById("postbox2").classList.add("mainboxclass")
                var sak = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var a65 = document.getElementById("postbox3").classList.add("mainboxclass")
                closer2 = closer2 + 1;
                closer1=4;
            }
            else if (closer2 === 3) {
                var ds3 = document.getElementById("postbox4").style.order = "2";
                var asd = document.getElementById("postbox4").classList.remove("mainboxclass")
                var ds3 = document.getElementById("postbox4").classList.add("mainboxclass1")
                var ds3 = document.getElementById("postbox3").style.order = "1";
                var asd = document.getElementById("postbox3").classList.remove("mainboxclass")
                var ds3 = document.getElementById("postbox3").classList.add("mainboxclass1")
                var sa  = document.getElementById("postbox1").classList.remove("mainboxclass1");
                var af2 = document.getElementById("postbox1").classList.add("mainboxclass");
                var sa  = document.getElementById("postbox2").classList.remove("mainboxclass1");
                var af2 = document.getElementById("postbox2").classList.add("mainboxclass");
                var sa  = document.getElementById("postbox5").classList.remove("mainboxclass1");
                var af4 = document.getElementById("postbox5").classList.add("mainboxclass");
                closer2  = closer2 + 1;
                closer1 =3 
            }
            else if (closer2 == 4) {
                var as1 = document.getElementById("postbox2").classList.remove("mainboxclass")
                var ad1 = document.getElementById("postbox2").classList.add("mainboxclass1");
                var fe1 = document.getElementById("postbox2").style.order = "1";
                var as1 = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var as1 = document.getElementById("postbox1").classList.add("mainboxclass")
                var ad1 = document.getElementById("postbox3").classList.add("mainboxclass1");
                var fe1 = document.getElementById("postbox3").style.order = "2";
                var ds3 = document.getElementById("postbox4").classList.remove("mainboxclass1")
                var ds3 = document.getElementById("postbox4").classList.add("mainboxclass")
                var af4 = document.getElementById("postbox5").classList.remove("mainboxclass1")
                var ds3 = document.getElementById("postbox5").classList.add("mainboxclass")
                closer2 = closer2 + 1;
                closer1= 2

            }
            else if (closer2 == 5) {
                var ds3 = document.getElementById("postbox1").style.order = "1";
                var ds3 = document.getElementById("postbox1").classList.add("mainboxclass1")
                var af4 = document.getElementById("postbox1").classList.remove("mainboxclass")
                var err = document.getElementById("postbox2").classList.remove("mainboxclass")
                var err = document.getElementById("postbox2").classList.add("mainboxclass1")
                var asd = document.getElementById("postbox2").style.order = "2"
                var af4 = document.getElementById("postbox5").classList.remove("mainboxclass1")
                var af4 = document.getElementById("postbox5").classList.add("mainboxclass")
                var af4 = document.getElementById("postbox4").classList.remove("mainboxclass1")
                var af4 = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var ad1 = document.getElementById("postbox3").classList.add("mainboxclass");
                var ad1 = document.getElementById("postbox4").classList.add("mainboxclass");
                closer2 = 1
                closer1 = 1
            }
        }
        box1slider1();
    }
}

var closer=1;
var closer1=1;
function post_right() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        console.log("if part is working and its console");

        function reviewslider() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            if (closer === 1) {
                console.log("this is working321");
                var afe = document.getElementById("postbox5").classList.remove("mainboxclass");
                var afe = document.getElementById("postbox5").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox5").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
                //
                // var afr = document.getElementById("client1").classList.remove("mainboxclass1")
                // var af1 = document.getElementById("client1").classList.add("mainboxclass");
                // var af1 = document.getElementById("client2").style.order="1";
                // var af1 = document.getElementById("client2").classList.add("mainboxclass1");
                // var af1 = document.getElementById("client3").classList.add("mainboxclass");
                // var af1 = document.getElementById("client4").classList.add("mainboxclass");
                // var af1 = document.getElementById("client5").classList.add("mainboxclass");
                closer =closer + 1
                closer3 = 5
            }
            else if (closer === 2) {
                var afe = document.getElementById("postbox4").classList.remove("mainboxclass");
                var afe = document.getElementById("postbox4").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox4").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1")

            closer =closer + 1;
                closer3 = 4;
            }
            else if (closer === 3) {
                var afe = document.getElementById("postbox3").classList.remove("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox3").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1");

                closer=closer + 1;
                closer3 = 3;
            }
            else if (closer=== 4) {
                var afe = document.getElementById("postbox2").classList.remove("mainboxclass");
                var afe = document.getElementById("postbox2").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox2").style.order = "1";
                var afr = document.getElementById("postbox1").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox1").classList.add("mainboxclass");
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
                closer=closer + 1;
                closer3 = 2;
            }
            else if (closer=== 5) {
                var afe = document.getElementById("postbox1").classList.remove("mainboxclass");
                var af3 = document.getElementById("postbox1").classList.add("mainboxclass1");
                var df3 = document.getElementById("postbox1").style.order = "1";
                var afr = document.getElementById("postbox2").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox2").classList.add("mainboxclass");
                var afr = document.getElementById("postbox5").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox5").classList.add("mainboxclass");
                var afe = document.getElementById("postbox3").classList.add("mainboxclass");
                var afr = document.getElementById("postbox3").classList.remove("mainboxclass1")
                var afe = document.getElementById("postbox4").classList.add("mainboxclass");
                var afr = document.getElementById("postbox4").classList.remove("mainboxclass1")
                closer=  1;
                closer3 = 1;
            }
        }
        reviewslider()
    }


    else {
        console.log("Else part is working");
        function boxslider_1() {
            if (closer1 ==1){
                var af1 = document.getElementById("postbox1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("postbox1").classList.add("mainboxclass");
                var af1 = document.getElementById("postbox2").classList.add("mainboxclass1");
                var af1 = document.getElementById("postbox2").classList.remove("mainboxclass");
                var af2 = document.getElementById("postbox2").style.order = "1";
                var af3 = document.getElementById("postbox3").style.order = "2";
                var af1 = document.getElementById("postbox3").classList.add("mainboxclass1");
                var af1 = document.getElementById("postbox3").classList.remove("mainboxclass");
                var af1 = document.getElementById("postbox4").classList.add("mainboxclass");
                closer1 =closer1 + 1;
                closer2 = 5;
            }
            else if (closer1 === 2) {
                // var af1 = document.getElementById("client3").classList.add("mainboxclass1");
                // var af1 = document.getElementById("client3").classList.remove("mainboxclass");
                var af1 = document.getElementById("postbox1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("postbox1").classList.add("mainboxclass");
                var af1 = document.getElementById("postbox2").classList.remove("mainboxclass1");
                var af8 = document.getElementById("postbox2").classList.add("mainboxclass");
                var af3 = document.getElementById("postbox3").style.order = "1";
                var af5 = document.getElementById("postbox4").style.order = "2";
                var af1 = document.getElementById("postbox4").classList.add("mainboxclass1");
                var af1 = document.getElementById("postbox4").classList.remove("mainboxclass");
                var af1 = document.getElementById("postbox5").classList.remove("mainboxclass1");
                var af5 = document.getElementById("postbox5").classList.add("mainboxclass")
                
                closer1 =closer1 + 1;
                closer2 = 4;
            }
            else if (closer1 === 3) {
                var af1 = document.getElementById("postbox3").classList.remove("mainboxclass1");
                var af3 = document.getElementById("postbox3").classList.add("mainboxclass");
                var af5 = document.getElementById("postbox4").style.order = "1";
                var af1 = document.getElementById("postbox5").classList.remove("mainboxclass");
                var af5 = document.getElementById("postbox5").classList.add("mainboxclass1")
                var af5 = document.getElementById("postbox5").style.order = "2";
                closer1 =closer1 + 1;
                closer2 = 3;
            }
            else if (closer1 === 4) {
                var af1 = document.getElementById("postbox4").classList.remove("mainboxclass1");
                var af3 = document.getElementById("postbox4").classList.add("mainboxclass");
                var af1 = document.getElementById("postbox5").classList.remove("mainboxclass");
                var af5 = document.getElementById("postbox5").classList.add("mainboxclass1")
                var af5 = document.getElementById("postbox5").style.order = "1";
                var af7 = document.getElementById("postbox1").style.order = "2";
                var af1 = document.getElementById("postbox1").classList.remove("mainboxclass");
                var af1 = document.getElementById("postbox1").classList.add("mainboxclass1");
                closer1 =closer1 + 1;
                closer2 = 2;

            }
            else if (closer1 === 5) {
                var af7 = document.getElementById("postbox1").style.order = "1";
                var af1 = document.getElementById("postbox1").classList.remove("mainboxclass");
                var af1 = document.getElementById("postbox1").classList.add("mainboxclass1");
                var af1 = document.getElementById("postbox2").classList.remove("mainboxclass");
                var af8 = document.getElementById("postbox2").classList.add("mainboxclass1");
                var af7 = document.getElementById("postbox2").style.order = "2";
                var af5 = document.getElementById("postbox5").classList.remove("mainboxclass1")
                var af5 = document.getElementById("postbox5").classList.add("mainboxclass")
                var af1 = document.getElementById("postbox5").classList.remove("mainboxclass");
                closer1 =1;
                closer2 = 1;

            }
            
        }
        boxslider_1()
    }
}
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
var likevariable1=1;
var likevariable2=1;
var likevariable3=1;
var likevariable4=1;
var likevariable5=1;
function likeclick1(){
    console.log("function is working");
    if (likevariable1===1){
        var t1=document.getElementById("likeimg1").style.display="none";
        var t2=document.getElementById("likepic1").style.display="inline";
        var t3=document.getElementById("like1").innerHTML;
        var t4=t3-1;
        t4=t4+2
        var t3=document.getElementById("like1").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable1 = 0;
    }
    else if (likevariable1===0){
        var t1=document.getElementById("likeimg1").style.display="inline";
        var t2=document.getElementById("likepic1").style.display="none";
        var t3=document.getElementById("like1").innerHTML;
        var t4=t3-1;
        var t3=document.getElementById("like1").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable1 = 1
    }
    
}
function likeclick2(){
    console.log("function is working");
    if (likevariable2===1){
        var t1=document.getElementById("likeimg2").style.display="none";
        var t2=document.getElementById("likepic2").style.display="inline";
        var t3=document.getElementById("like2").innerHTML;
        var t4=t3-1;
        t4=t4+2
        var t3=document.getElementById("like2").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable2 = 0;
    }
    else if (likevariable2===0){
        var t1=document.getElementById("likeimg2").style.display="inline";
        var t2=document.getElementById("likepic2").style.display="none";
        var t3=document.getElementById("like2").innerHTML;
        var t4=t3-1;
        var t3=document.getElementById("like2").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable2 = 1
    }
}
function likeclick3(){
    console.log("function is working");
    if (likevariable3===1){
        var t1=document.getElementById("likeimg3").style.display="none";
        var t2=document.getElementById("likepic3").style.display="inline";
        var t3=document.getElementById("like3").innerHTML;
        var t4=t3-1;
        t4=t4+2
        var t3=document.getElementById("like3").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable3 = 0;
    }
    else if (likevariable3===0){
        var t1=document.getElementById("likeimg3").style.display="inline";
        var t2=document.getElementById("likepic3").style.display="none";
        var t3=document.getElementById("like3").innerHTML;
        var t4=t3-1;
        var t3=document.getElementById("like3").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable3 = 1
    }
}
function likeclick4(){
    console.log("function is working");
    if (likevariable4===1){
        var t1=document.getElementById("likeimg4").style.display="none";
        var t2=document.getElementById("likepic4").style.display="inline";
        var t3=document.getElementById("like4").innerHTML;
        var t4=t3-1;
        t4=t4+2
        var t3=document.getElementById("like4").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable4 = 0;
    }
    else if (likevariable4===0){
        var t1=document.getElementById("likeimg4").style.display="inline";
        var t2=document.getElementById("likepic4").style.display="none";
        var t3=document.getElementById("like4").innerHTML;
        var t4=t3-1;
        var t3=document.getElementById("like4").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable4 = 1;
    }
}
function likeclick5(){
    console.log("function is working");
    if (likevariable5===1){
        var t1=document.getElementById("likeimg5").style.display="none";
        var t2=document.getElementById("likepic5").style.display="inline";
        var t3=document.getElementById("like5").innerHTML;
        var t4=t3-1;
        t4=t4+2
        var t3=document.getElementById("like5").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable5 = 0;
    }
    else if (likevariable5===0){
        var t1=document.getElementById("likeimg5").style.display="inline";
        var t2=document.getElementById("likepic5").style.display="none";
        var t3=document.getElementById("like5").innerHTML;
        var t4=t3-1;
        var t3=document.getElementById("like5").innerHTML=t4;
        console.log("the value of t4 is "+t4);
        likevariable5 = 1
    }
}

// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

var reload_3 = 1;
var reload1_3;
var time = setInterval(widthadjusting3, .10);
function widthadjusting3() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        if (reload_3 === 1) {
            console.log("taki taki");
            var afe = document.getElementById("serverimg4").classList.remove("mainboxclass");
            var afe = document.getElementById("serverimg4").classList.add("mainboxclass1");
            var dfa = document.getElementById("serverimg4").style.order = "1";
            var afr = document.getElementById("serverimg2").classList.remove("mainboxclass1")
            var afe = document.getElementById("serverimg2").classList.add("mainboxclass");
            var afe = document.getElementById("serverimg3").classList.add("mainboxclass");
            var afr = document.getElementById("serverimg3").classList.remove("mainboxclass1")
            var afe = document.getElementById("serverimg1").classList.add("mainboxclass");
            var afr = document.getElementById("serverimg1").classList.remove("mainboxclass1")
            reload_3 = 0;
            reload1_3 = 1;
        
        }
        
    }

    else {
        reload_3 = 1
        if (reload1_3 === 1) {
            console.log(" ----------------------------------");
            reload1_3=0
            var af7 = document.getElementById("serverimg1").style.order = "1";
            var af1 = document.getElementById("serverimg1").classList.remove("mainboxclass");
            var af1 = document.getElementById("serverimg1").classList.add("mainboxclass1");
            var af1 = document.getElementById("serverimg2").classList.remove("mainboxclass");
            var af8 = document.getElementById("serverimg2").classList.add("mainboxclass1");
            var af7 = document.getElementById("serverimg2").style.order = "2";
            var af8 = document.getElementById("serverimg3").classList.remove("mainboxclass1");
            var af1 = document.getElementById("serverimg3").classList.add("mainboxclass");
            var af3 = document.getElementById("serverimg4").classList.remove("mainboxclass1");
            var af3 = document.getElementById("serverimg4").classList.add("mainboxclass")
        }


    }
}
var serve=1
function server(){

} 
var oser=2;
var ser1=1;
var time4= setInterval(server_moving,1000)
function server_moving() {
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        console.log("if part is working and its console");

        function reviewslider() {
            //less than (matlab naya code isme daalna hai)
            console.log("This is working123");
            
            if (oser === 2) {
                var afe = document.getElementById("serverimg4").classList.remove("mainboxclass");
                var afe = document.getElementById("serverimg4").classList.add("mainboxclass1");
                var df3 = document.getElementById("serverimg4").style.order = "1";
                var afr = document.getElementById("serverimg1").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg1").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg2").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg2").classList.add("mainboxclass");
                var afe = document.getElementById("serverimg3").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg3").classList.remove("mainboxclass1")


                oser =oser + 1;
                oser3 = 4;
            }
            else if (oser === 3) {
                var afe = document.getElementById("serverimg3").classList.remove("mainboxclass");
                var afe = document.getElementById("serverimg3").classList.add("mainboxclass1");
                var df3 = document.getElementById("serverimg3").style.order = "1";
                var afr = document.getElementById("serverimg1").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg1").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg2").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg2").classList.add("mainboxclass");
                var afe = document.getElementById("serverimg4").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg4").classList.remove("mainboxclass1")
                

                oser=oser + 1;
                oser3 = 3;
            }
            else if (oser=== 4) {
                var afe = document.getElementById("serverimg2").classList.remove("mainboxclass");
                var afe = document.getElementById("serverimg2").classList.add("mainboxclass1");
                var df3 = document.getElementById("serverimg2").style.order = "1";
                var afr = document.getElementById("serverimg1").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg1").classList.add("mainboxclass");
                var afe = document.getElementById("serverimg3").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg3").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg4").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg4").classList.remove("mainboxclass1")
                oser=oser + 1;
                oser3 = 2;
            }
            else if (oser=== 5) {
                var afe = document.getElementById("serverimg1").classList.remove("mainboxclass");
                var af3 = document.getElementById("serverimg1").classList.add("mainboxclass1");
                var df3 = document.getElementById("serverimg1").style.order = "1";
                var afr = document.getElementById("serverimg2").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg2").classList.add("mainboxclass");
                var afe = document.getElementById("serverimg3").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg3").classList.remove("mainboxclass1")
                var afe = document.getElementById("serverimg4").classList.add("mainboxclass");
                var afr = document.getElementById("serverimg4").classList.remove("mainboxclass1")
                oser=  2;
                oser3 = 1;
            }
        }
        reviewslider()
    }


    else {
        console.log("Else part is working");
        function boxslider_1() {
            if (ser1 ==1){
                var af1 = document.getElementById("serverimg1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("serverimg1").classList.add("mainboxclass");
                var af1 = document.getElementById("serverimg2").classList.remove("mainboxclass");
                var af1 = document.getElementById("serverimg2").classList.add("mainboxclass1");
                var af2 = document.getElementById("serverimg2").style.order = "1";
                var af1 = document.getElementById("serverimg3").classList.remove("mainboxclass");
                var af1 = document.getElementById("serverimg3").classList.add("mainboxclass1");
                var af3 = document.getElementById("serverimg3").style.order = "2";
                var af1 = document.getElementById("serverimg4").classList.add("mainboxclass");
                ser1 =ser1 + 1;
                closer2 = 5;
            }
            else if (ser1 === 2) {
                // var af1 = document.getElementById("client3").classList.add("mainboxclass1");
                // var af1 = document.getElementById("client3").classList.remove("mainboxclass");
                var af1 = document.getElementById("serverimg1").classList.remove("mainboxclass1");
                var af1 = document.getElementById("serverimg1").classList.add("mainboxclass");
                var af1 = document.getElementById("serverimg2").classList.remove("mainboxclass1");
                var af8 = document.getElementById("serverimg2").classList.add("mainboxclass");
                var af3 = document.getElementById("serverimg3").style.order = "1";
                var af1 = document.getElementById("serverimg4").classList.add("mainboxclass1");
                var af1 = document.getElementById("serverimg4").classList.remove("mainboxclass");
                var af5 = document.getElementById("serverimg4").style.order = "2";
                
                
                ser1 =ser1 + 1;
                closer2 = 4;
            }
            else if (ser1 === 3) {
                var af1 = document.getElementById("serverimg3").classList.remove("mainboxclass1");
                var af3 = document.getElementById("serverimg3").classList.add("mainboxclass");
                var af5 = document.getElementById("serverimg4").style.order = "1";
                var af1 = document.getElementById("serverimg1").classList.remove("mainboxclass");
                var af5 = document.getElementById("serverimg1").classList.add("mainboxclass1")
                var af5 = document.getElementById("serverimg1").style.order = "2";
                ser1 =ser1 + 1;
                closer2 = 3;
            }
            else if (ser1 === 4) {
                var af5 = document.getElementById("serverimg4").classList.remove("mainboxclass1")
                var af7 = document.getElementById("serverimg1").style.order = "1";
                var af1 = document.getElementById("serverimg1").classList.remove("mainboxclass");
                var af1 = document.getElementById("serverimg1").classList.add("mainboxclass1");
                var af1 = document.getElementById("serverimg2").classList.remove("mainboxclass");
                var af8 = document.getElementById("serverimg2").classList.add("mainboxclass1");
                var af7 = document.getElementById("serverimg2").style.order = "2";
                ser1 =1;
                closer2 = 1;

            }
            
        }
        boxslider_1()
    }
}
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
function home(){
    window.scrollTo(0,0)   
}
function about(){
    window.scrollTo(0,570)   
}
function shop(){
    const wid = window.matchMedia("(max-width:885px)");
    if (wid.matches) {
        window.scrollTo(0,2700)   
    }
    else{
        window.scrollTo(0,1600)   
    }
}
function packages(){
    const wid = window.matchMedia("(max-width:885px)");
    const wid1 =window.matchMedia("(max-width:400px)")

    if (wid1.matches){
        console.log("-----------------------");
        window.scrollTo(0,3600)   
    }
    else  if (wid.matches) {
        window.scrollTo(0,3400)   
    }
    
    else{
        window.scrollTo(0,2400)
    }
}
function reviews(){
    window.scrollTo(0,3800)
}
function blogs(){
    window.scrollTo(0,4350)
}

