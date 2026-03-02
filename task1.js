// створ. car1 через new Object() 
var car1 = new Object();
car1.color = "Red";
car1.maxSpeed = 220; 
car1.driver = {
    name: "Твоє Ім'я та Прізвище", 
    category: "B", 
    "personal limitations": "No driving at night" 
};
car1.tuning = true; 
car1["number of accidents"] = 0; 

// drive для car1 
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive(); 

var car2 = {
    color: "Blue", 
    maxSpeed: 190, 
    driver: {
        name: "Твоє Ім'я та Прізвище", 
        category: "B", 
        "personal limitations": null 
    },
    tuning: false, 
    "number of accidents": 2 
};

car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive(); 

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned"); 
        } else {
            var msg = "Driver " + this.driver.name; 
            msg += this.driver.nightDriving ? " drives at night" : " does not drive at night"; 
            msg += " and has " + this.driver.experience + " years of experience."; 
            console.log(msg);
        }
    };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

var truck1 = new Truck("Pink", 5000, 80, "BMW", "M8");
var truck2 = new Truck("Black", 4500, 85, "Ford", "Focus");

truck1.AssignDriver("Марина Сінева", true, 10);
truck2.AssignDriver("Марко Дем'янів", false, 5);

truck1.trip();
truck2.trip();
