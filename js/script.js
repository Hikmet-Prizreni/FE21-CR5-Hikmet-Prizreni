"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations1 = /** @class */ (function () {
    function Locations1(name, city, zip, address, image, date) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.image = image;
        this.date = date;
    }
    Locations1.prototype.opendiv = function () {
        return "\n        <div class=\"card shadow-lg bg-body rounded\"><img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\" /> <h4 class=\"card-header text-center\">" + this.name + "</h4> ";
    };
    Locations1.prototype.closediv = function () {
        return "<div class=\"card-body p-2\"> <p class=\"card-text\"><b>Address:</b>  " + this.address + " , " + this.zip + "  " + this.city + "</p></div><div class=\"card-footer text-center\"><p class=\"h6\">Created on  " + this.date.toUTCString() + "</p></div></div>";
    };
    Locations1.prototype.display = function () {
        return this.opendiv() + this.closediv();
    };
    return Locations1;
}());
var Locations2 = /** @class */ (function (_super) {
    __extends(Locations2, _super);
    function Locations2(name, city, zip, address, image, cuisine, telefon, web, date) {
        var _this = _super.call(this, name, city, zip, address, image, date) || this;
        _this.name = name;
        _this.city = city;
        _this.zip = zip;
        _this.address = address;
        _this.image = image;
        _this.cuisine = cuisine;
        _this.telefon = telefon;
        _this.web = web;
        _this.date = date;
        return _this;
    }
    Locations2.prototype.div = function () {
        return "\n                <p>" + this.cuisine + "</p><p class=\"card-text\"><b>Telefon:</b> " + this.telefon + "<br/><b>Website:</b> " + this.web + "</p>";
    };
    Locations2.prototype.display = function () {
        return _super.prototype.opendiv.call(this) + this.div() + _super.prototype.closediv.call(this);
    };
    return Locations2;
}(Locations1));
//Class Event
var Locations3 = /** @class */ (function (_super) {
    __extends(Locations3, _super);
    function Locations3(name, event, city, zip, address, image, web, day, time, price, date) {
        var _this = _super.call(this, name, city, zip, address, image, date) || this;
        _this.name = name;
        _this.event = event;
        _this.city = city;
        _this.zip = zip;
        _this.address = address;
        _this.image = image;
        _this.web = web;
        _this.day = day;
        _this.time = time;
        _this.price = price;
        _this.date = date;
        return _this;
    }
    Locations3.prototype.div = function () {
        return "\n              <h5 class=\"card-title\">" + this.event + "</h5><p class=\"h5\"> Concert On " + this.day + " at " + this.time + "</p><p><b>Website:</b> " + this.web + "</p><p class=\"h5 text-end text-success\"> Price:  \u20AC " + (this.price).toFixed(2) + "</p>";
    };
    Locations3.prototype.display = function () {
        return _super.prototype.opendiv.call(this) + this.div() + _super.prototype.closediv.call(this);
    };
    return Locations3;
}(Locations1));
var date1 = new Date(2021, 5, 20, 5, 33, 40);
var date2 = new Date(2020, 3, 12, 6, 22, 44);
var date3 = new Date(2022, 0, 31, 6, 12, 33);
var date4 = new Date(2020, 11, 3, 10, 30, 30);
var date5 = new Date(2021, 8, 1, 14, 20, 55);
var date6 = new Date(2019, 7, 5, 21, 45, 30);
var church = new Locations1("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "image/pic1.jpg", date1);
var zoo = new Locations1("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "image/pic2.jpg", date2);
var lemon = new Locations2("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "image/pic3.png", "Thai Restaurant", "+43(1)5812308", "lemonleaf.at", date3);
var sixta = new Locations2("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "image/pic4.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "sixta-restaurant.at", date4);
var kris = new Locations3("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "image/pic.5.jpg", "kriskristofferson.com", "Fr., 15.11.2021", "20:00", 58.50, date5);
var lenny = new Locations3("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "image/pic.6.jpg", "lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80, date6);
var travels = [church, zoo, lemon, sixta, kris, lenny];
for (var i = 0; i < travels.length; i++) {
    document.getElementById("travels").innerHTML += travels[i].display();
}
function sortAscendent() {
    travels.sort(function (a, b) { return a.date - b.date; });
    document.getElementById("travels").innerHTML = "";
    for (var i = 0; i < travels.length; i++) {
        document.getElementById("travels").innerHTML += travels[i].display();
    }
}
document.getElementById("ascending").addEventListener("click", function () {
    sortAscendent();
});
//Descending
function sortDescendent() {
    travels.sort(function (a, b) { return b.date - a.date; });
    document.getElementById("travels").innerHTML = "";
    for (var i = 0; i < travels.length; i++) {
        document.getElementById("travels").innerHTML += travels[i].display();
    }
}
document.getElementById("descending").addEventListener("click", function () {
    sortDescendent();
});
