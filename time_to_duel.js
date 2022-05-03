class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    
    attack (target) {
        // reduce target res by power
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            // if effect card targets res
            if(this.stat == 'res'){
                target.res += this.magnitude;
            }
            // if effect card targets power
            if(this.stat == 'power'){
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

// turn 1
// create red belt ninja instance
let rbn1 = new Unit("Red Belt Ninja", 3, 3, 4);
// create hard algorith instance
let ha1 = new Effect("Hard Algorithm", 2, "increases target's resilience by 3", 'res', 3);
// play it on red belt ninja
ha1.play(rbn1);

// turn 2
// create instance of black belt ninja
let bbn1 = new Unit("Black Belt Ninja", 4, 5, 4);
// create instance of unhandled promise rejection
let upr1 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", 'res', -2);
// play it on black belt ninja
upr1.play(bbn1);

// turn 3
// create instance of pair programming
let pp1 = new Effect("pair Programming", 3, "increase target's power by 2", 'power', 2);
// play it on red belt ninja
pp1.play(rbn1);
// red belt ninja attacks black belt ninja
rbn1.attack(bbn1);


console.log(rbn1);
console.log(bbn1);
