export class Tsamagotchi
{
    private name : string;
    private age : number;
    private birthdate : Date;
    private health : number;
    private satiety : number;
    private happiness : number;
    
    private isAlive : boolean;
    
    private foodLimit : number = 100;
    
    constructor(name : string = "Your new Tsamagotchi")
    {
        this.name = name;
        this.age = 0;
        this.birthdate = new Date();
        this.health = 100;
        this.satiety = 100;
        this.happiness = 100;
        
        this.isAlive = true;
    }
    
    /**
    * Feed the Tsamagotchi a certain amount of food. If the Tsamagotchi eats too much, its health will go down.
    *
    * @param {number} [amount=1] - The amount of food to feed the Tsamagotchi.
    *
    * @returns {number} The satiety status of the Tsamagotchi.
    */
    feed(amount : number = 1) : number
    {
        if (!this.isAlive) return this.satiety;
        
        this.satiety += amount;
        
        if (this.satiety > this.foodLimit)
        {
            this.decreaseHealth( this.satiety - this.foodLimit );
            this.satiety = this.foodLimit;
        }
        
        return this.satiety;
    }
    
    /**
    * Mature the Tsamagotchi by a certain amount.
    * 
    * @param {number} [amount=1] - The amount the Tsamagotchi needs to mature.
    *
    * @returns {number} The new age of the Tsamagotchi.
    */
    mature(amount : number = 1) : number
    {
        if (!this.isAlive) return this.health;
        
        if (this.isAlive)
        {
            this.age += amount;
            this.digest(amount);
            this.decreaseHappiness(amount);
        }
        return this.health
    }
    
    /**
    * Make the Tsamagotchi digest a certain amount of its satiety level. If the satiety level reaches zero or lower, the Tsamagotchi loses health.
    *
    * @param {number} [amount=1] The amount that needs to be digested.
    * @returns {number} The current satiety level of the Tsamagotchi.
    */
    digest(amount : number = 1)
    {
        if (!this.isAlive) return this.satiety;
        
        this.satiety -= amount;
        
        if (this.satiety <= 0)
        {
            this.decreaseHealth( Math.abs(this.satiety) + 1 );
            this.satiety = 0;
        }
        
        return this.satiety;
    }
    
    /**
    * Heal the Tsamagotchi by a certain amount.
    *
    * @param {number} [amount=1] - The amount of health that should be healed.
    * @returns {number} The new health status of the Tsamagotchi.
    */
    heal(amount : number = 1) : number
    {
        if (!this.isAlive) return this.health;
        
        this.health += amount;
        return this.health;
    }
    
    /**
    * Give the Tsamagotchi a certain amount of love.
    *
    * @param {number} [amount=1] - The amount of love to give.
    * @returns {number} The currenct happiness status of the Tsamagotchi.
    */
    love(amount : number = 1) : number
    {
        if (!this.isAlive) return this.happiness;
        
        this.happiness += amount;
        return this.happiness;
    }
    
    /**
    * Decrease the happiness of the Tsamagotchi. If its happiness reaches zero, it will lose health.
    *
    * @param {number} [amount=1] - The amount the happiness should be decreased with.
    * @returns {number} The currenct happiness level of the Tsamagotchi.
    */
    decreaseHappiness(amount : number = 1) : number
    {
        if (!this.isAlive) return this.happiness;
        
        this.happiness -= amount;
        if (this.happiness <= 0)
        {
            this.decreaseHealth( Math.abs(this.happiness) + 1 );
            this.happiness = 0;
        }
        
        return this.happiness;
    }
    
    /**
    * Decrease the health of the Tsamagotchi by a certain amount. If the health of the Tsamagotchi reaches zero, the Tsamagotchi dies.
    *
    * @param {number} [amount=1] - The amount to decrease the health with.
    * @returns {number} The currency health status of the Tsamagotchi.
    */
    decreaseHealth(amount : number = 1)
    {
        if (!this.isAlive) return this.health;
        
        this.health -= 1;
        if (this.health <= 0) this.die();
        return this.health;
    }
    
    /**
    * Make the Tsamagotchi die. Too bad, you tried.
    */
    die()
    {
        this.isAlive = false;
        this.health = 0;
    }
}