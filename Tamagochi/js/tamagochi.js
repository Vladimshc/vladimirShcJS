/**
 * Created by wallee on 01.11.16.
 */

function Animal(firstNeme) {

    var timeTick = 10; // spped time, in seconds;
    var timeTickCycle = 1;

    var health = 20;
    var happiness = 40;

    var wantEat = false;
    var wantDrink = false;
    var wantPlay = false;
    var wantSleep = false;
    var scoot = false;

    Animal.life = function () {
        health--;
        happiness -= 2;
        if ((timeTickCycle % 8) === 3) wantEat = true;
        if ((timeTickCycle % 8) === 5) wantDrink = true;
        if ((timeTickCycle % 7) === 5) wantPlay = true;
        if ((timeTickCycle % 7) === 6) wantSleep = true;
        if (wantEat && wantDrink && wantPlay && wantSleep) scoot = true;
        console.log("You animals name is \'" + firstNeme + "\' " +
            "\n\r" +
            "\n\r'health' = " + health +
            "\n\r'happiness' = " + happiness +
            "\n\r'wantEat' = " + wantEat +
            "\n\r'wantDrink' = " + wantDrink +
            "\n\r'wantPlay' = " + wantPlay +
            "\n\r'wantSleep' = " + wantSleep +
            "\n\r" +
            "\n\r'timeTickCycle' = " + timeTickCycle
        );
    };

    Animal.die = function () {
        console.log("You animal is dead :(")
    };

    Animal.eat = function () {
        if (health < 100) {
            for (var i = health, j = 0; i < 100, j < 20; i++, j++) {
                health++;
                wantEat = false;
            }
        }
        else console.log("You'll have a lot of food - burst stomach");
        if (happiness < 100) {
            for (var m = happiness, n = 0; m < 100, n < 20; m++, n++) {
                happiness++;
                wantEat = false;
            }
        }
        else console.log("You'll have a lot of happiness");
    };

    Animal.drink = function () {
        wantDrink = false;
        health++;
        return console.log("You " + firstNeme + " 'Drink'" );
    };

    Animal.play = function () {
        wantPlay = false;
        health = health - 3;
        happiness = happiness + 2;
        return console.log("You " + firstNeme + " 'Play'" );

    };

    Animal.sleep = function () {
        wantSleep = false;
        happiness = 100;
        return console.log("You " + firstNeme + " 'Sleep'" );
    };

    Animal.scoot = function () {
        console.log("You do not watch your pet. He ran away")
    };

    Animal.printConsole = function () {
        console.clear();
        if (health > 0 && !scoot) {
            Animal.printConsole = Animal.life();
            if (wantEat) console.log("\t\r You must 'tamagochi.constructor.eat()'");
            if (wantDrink) console.log("\t\r You must 'tamagochi.constructor.drink()'");
            if (wantPlay) console.log("\t\r You must 'tamagochi.constructor.play()'");
            if (wantSleep) console.log("\t\r You must 'tamagochi.constructor.sleep()'");
            timeTickCycle++;
        }
        else if (scoot) {
            Animal.printConsole = Animal.scoot();
        }
        else {
            Animal.printConsole = Animal.die();
        }
    };

    setInterval(Animal.printConsole, timeTick * 1000);
}

var askName = prompt("What is you tamagoci name? If you press 'Cancel' - do not get animal:))");
if (askName != null) {
    var tamagochi = new Animal(askName);
    console.log("Please, wait one tick game")
} else console.log("No name, No Tamagochi :)");




