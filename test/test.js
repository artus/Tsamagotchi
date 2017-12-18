var assert = require('assert');
const { Tsamagotchi } = require("../Tsamagotchi");

describe("Tsamagotchi class", function() {
    describe("Tsamagotchi constructor", function() {
        
        it("Initialises a default Tsamagotchi instance when no parameters are supplied.", function() {
            var newTsamagotchi = new Tsamagotchi();
            
            assert.equal(newTsamagotchi.name, "Your new Tsamagotchi");
            assert.equal(newTsamagotchi.age, 0);
            assert.equal(newTsamagotchi.health, 100);
            assert.equal(newTsamagotchi.satiety, 100);
            assert.equal(newTsamagotchi.happiness, 100);
            assert.equal(newTsamagotchi.isAlive, true);
            assert.equal(newTsamagotchi.foodLimit, 100);
        });
        
        it("Initialises a Tsamagotchi with the correct name if a name has been supplied.", function() {
            var newTsamagotchi = new Tsamagotchi("John");
            
            assert.equal(newTsamagotchi.name, "John");
            assert.equal(newTsamagotchi.age, 0);
            assert.equal(newTsamagotchi.health, 100);
            assert.equal(newTsamagotchi.satiety, 100);
            assert.equal(newTsamagotchi.happiness, 100);
            assert.equal(newTsamagotchi.isAlive, true);
            assert.equal(newTsamagotchi.foodLimit, 100);
        });
        
        it("Initialises a Tsamagotchi with the correct values if all parameters are supplied.", function() {
            var newTsamagotchi = new Tsamagotchi("John", 1000);
            
            assert.equal(newTsamagotchi.name, "John");
            assert.equal(newTsamagotchi.age, 0);
            assert.equal(newTsamagotchi.health, 100);
            assert.equal(newTsamagotchi.satiety, 100);
            assert.equal(newTsamagotchi.happiness, 100);
            assert.equal(newTsamagotchi.isAlive, true);
            assert.equal(newTsamagotchi.foodLimit, 1000);
        });
    });
    
    describe("Tsamagotchi mature function.", function() {
        
        it("Increases the age of the Tsamagotchi with the amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.mature(1);
            
            assert.equal(newTsamagotchi.age, 1);
        });
        
        it("Digests the amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.mature(1);
            
            assert.equal(newTsamagotchi.satiety, 99);
        });
        
        it("Decreases the happiness of the Tsamagotchi with the amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.mature(1);
            
            assert.equal(newTsamagotchi.happiness, 99);
        });
    });
    
    describe("Tsamagotchi feed function.", function() {
        
        it("It increases satiety with given amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.mature(1);
            newTsamagotchi.feed(1);
            
            assert.equal(newTsamagotchi.satiety, 100);
        });
        
        it("If the amount surpasses the foodlimit, its health goes down.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.feed(1);
            
            assert.equal(newTsamagotchi.health, 99);
        });
    });
    
    describe("Tsamagotchi digest function.", function() {
        
        it("Decreases the satiety level of the Tsamagotchi with supplied amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.digest(1);
            
            assert.equal(newTsamagotchi.satiety, 99);
        });
        
        it("If the satiety level goes below zero, the Tsamagotchi loses health.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.digest(101);
            
            assert.equal(newTsamagotchi.health, 99);
        });
    });
    
    describe("Tsamagotchi heal function.", function() {
        it("Increases the health of the Tsamagotchi with supplied amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.heal(1);
            
            assert.equal(newTsamagotchi.health, 101);
        });
    });
    
    describe("Tsamagotchi love function.", function() {
        
        it("Increases the happiness level with the supplied amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.love(1);
            
            assert.equal(newTsamagotchi.happiness, 101);
        });
    });
    
    describe("Tsamagotchi decreaseHappiness function.", function() {
        
        it("Decreases happiness level with the supplied amount.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.decreaseHealth(1);
            
            assert.equal(newTsamagotchi.health, 99);
        });
        
        it("If the health reaches zero, the Tsamagotchi dies.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.decreaseHealth(100);
            
            assert.equal(newTsamagotchi.isAlive, false);
        });
    });
    
    describe("Tsamagotchi die function.", function() {
        
        it("Kills the Tsamagotchi and sets health to zero.", function() {
            var newTsamagotchi = new Tsamagotchi();
            newTsamagotchi.die()
            
            assert.equal(newTsamagotchi.isAlive, false);
            assert.equal(newTsamagotchi.health, 0);
        });
    });
});