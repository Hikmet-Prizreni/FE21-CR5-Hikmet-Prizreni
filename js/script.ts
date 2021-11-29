
class Locations1 {
    constructor(public name:string, public city:string, public zip:number, public address:string, public image:string, public date:Date){}
    opendiv(){ 
        return `
        <div class="card shadow-lg bg-body rounded"><img src="${this.image}" class="card-img-top" alt="${this.name}" /> <h4 class="card-header text-center">${this.name}</h4> `
    }
    
    closediv() {
        return `<div class="card-body p-2"> <p class="card-text"><b>Address:</b>  ${this.address} , ${this.zip}  ${this.city}</p></div><div class="card-footer text-center"><p class="h6">Created on  ${this.date.toUTCString()}</p></div></div>`
    }

    display(){
        return this.opendiv() + this.closediv();
    }

}

class Locations2 extends Locations1 {
    constructor(public name:string, public city:string, public zip:number, public address:string, public image:string, public cuisine:string, public telefon:string, public web:string, public date:Date){
        super(name, city, zip, address, image, date)
        }
        div(){
            return `
                <p>${this.cuisine}</p><p class="card-text"><b>Telefon:</b> ${this.telefon}<br/><b>Website:</b> ${this.web}</p>`
        }

        display(){
            return super.opendiv() + this.div() + super.closediv();
        }
}

//Class Event
class Locations3 extends Locations1 {
    constructor(public name: string, public event:string, public city:string, public zip:number, public address:string, public image:string, public web:string, public day:string, public time:string, public price:number, public date:Date){
            super(name, city, zip, address, image, date);
        }
        div(){
            return `
              <h5 class="card-title">${this.event}</h5><p class="h5"> Concert On ${this.day} at ${this.time}</p><p><b>Website:</b> ${this.web}</p><p class="h5 text-end text-success"> Price:  € ${(this.price).toFixed(2)}</p>`
        }
        display(){
            return super.opendiv() + this.div() + super.closediv();
        }
}
    
const date1 = new Date(2021, 5, 20, 5, 33, 40);
const date2 = new Date(2020, 3, 12, 6, 22, 44);
const date3 = new Date(2022, 0, 31, 6, 12, 33);
const date4 = new Date(2020, 11, 3, 10, 30, 30);
const date5 = new Date(2021, 8, 1, 14, 20, 55);
const date6 = new Date(2019, 7, 5, 21, 45, 30);

let church = new Locations1("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "image/pic1.jpg", date1);
let zoo = new Locations1("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "image/pic2.jpg", date2);
let lemon = new Locations2("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "image/pic3.png", "Thai Restaurant", "+43(1)5812308", "lemonleaf.at", date3);
let sixta = new Locations2("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "image/pic4.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "sixta-restaurant.at", date4);
let kris = new Locations3("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "image/pic.5.jpg", "kriskristofferson.com", "Fr., 15.11.2021", "20:00", 58.50, date5);
let lenny = new Locations3("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "image/pic.6.jpg", "lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80, date6);


var travels : Array<any> = [church, zoo, lemon, sixta, kris, lenny];

for (let i:number = 0; i<travels.length; i++){
(document.getElementById("travels") as HTMLElement).innerHTML += travels[i].display();
}


function sortAscendent() {
    travels.sort((a, b) => a.date - b.date);
    (document.getElementById("travels")as HTMLElement).innerHTML = "";
    for (let i:number = 0; i<travels.length; i++) {
        (document.getElementById("travels")as HTMLElement).innerHTML += travels[i].display();
      }
  }
  
(document.getElementById("ascending") as HTMLElement).addEventListener("click", function() {
    sortAscendent();
    })

//Descending

function sortDescendent() {
    travels.sort((a, b) => b.date - a.date);
    (document.getElementById("travels")as HTMLElement).innerHTML = "";
    for (let i:number = 0; i<travels.length; i++) {
        (document.getElementById("travels")as HTMLElement).innerHTML += travels[i].display();
      }
  }
  
(document.getElementById("descending") as HTMLElement).addEventListener("click", function() {
    sortDescendent();
    })





