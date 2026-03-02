//клас square
class Square {
    constructor(a) {
        this.a = a; 
    }

    static help() {
        console.log("Квадрат: чотирикутник, у якого всі сторони рівні та всі кути прямі."); 
    }

    length() {
        console.log("Периметр квадрата: " + (4 * this.a)); 
    }

    square() {
        console.log("Площа квадрата: " + (this.a ** 2));
    }

    info() {
        console.log(`Квадрат: Сторони: a=${this.a}; Кути: 90°; Периметр: ${4 * this.a}; Площа: ${this.a ** 2}`); 
    }
}

//клас rectangle
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b; 
    }

    static help() {
        console.log("Прямокутник: чотирикутник, у якого протилежні сторони рівні, а кути 90°."); 
    }

    length() {
        console.log("Периметр прямокутника: " + (2 * (this.a + this.b))); 
    }

    square() {
        console.log("Площа прямокутника: " + (this.a * this.b)); 
    }

    info() {
        console.log(`Прямокутник: Сторони: a=${this.a}, b=${this.b}; Кути: 90°; Периметр: ${2 * (this.a + this.b)}; Площа: ${this.a * this.b}`);
    }
}

// клас rhombus
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta; 
    }

    static help() {
        console.log("Ромб: паралелограм, у якого всі сторони рівні."); 
    }

    length() {
        console.log("Периметр ромба: " + (4 * this.a));
    }

    square() {
        // площа cторону та синус кута 
        let s = this.a * this.a * Math.sin(this.alpha * Math.PI / 180);
        console.log("Площа ромба: " + s.toFixed(2)); 
    }

    info() {
        console.log(`Ромб: Сторони: a=${this.a}; Кути: alpha=${this.alpha}, beta=${this.beta}; Периметр: ${4 * this.a}`); 
    }
}

// клас parallelogram на основі rectangle
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha; 
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм: чотирикутник, у якого протилежні сторони попарно паралельні."); 
    }

    square() {
        let s = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log("Площа паралелограма: " + s.toFixed(2));
    }
}

Object.defineProperty(Rhombus.prototype, 'sideA', {
    get: function() { return this.a; },
    set: function(val) { this.a = val; }
});
