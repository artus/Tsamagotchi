export class Tsamagotchi
{
    public name : string;
    
    private _age : number;
    private _birthdate : Date;
    private _health : number;
    private _satiety : number;
    private _happiness : number;
    
    private _isAlive : boolean;
    
    private _foodLimit : number;
    
    /**
    * Create a Tsamagotchi instance.
    *
    * @class
    *
    * @param {string} [name="Your new Tsamagotchi"] - The name of your Tsamagotchi.
    * @param {number} [foodLimit=100] - The amount of food your Tsamagotchi can consume.
    */
    constructor(name : string = "Your new Tsamagotchi", foodLimit : number = 100)
    {
        this.name = name;
        this._age = 0;
        this._birthdate = new Date();
        this._health = 100;
        this._satiety = 100;
        this._happiness = 100;
        
        this._isAlive = true;
        
        this._foodLimit = foodLimit;
    }
    
    /**
    * Get the age of the Tsamagotchi.
    *
    * @returns {number} The age of the Tsamagotchi.
    */
    get age() : number
    {
        return this._age;
    }
    
    /**
    * Get the birthdate of the Tsamagotchi.
    *
    * @returns {Date} The birthdate of the Tsamagotchi.
    */
    get birthdate() : Date
    {
        return this._birthdate;
    }

    /**
    * Get the health of the Tsamagotchi.
    *
    * @returns {number} The health of the Tsamagotchi.
    */
    get health() : number
    {
        return this._health;
    }
    
    /**
    * Get the satiety level of the Tsamagotchi.
    *
    * @return {number} The satiety level of the Tsamagotchi.
    */
    get satiety() : number
    {
        return this._satiety;
    }
    
    /**
    * Get the happiness level of the Tsamagotchi.
    *
    * @returns {number} The happiness level of the Tsamagotchi.
    */
    get happiness() : number
    {
        return this._happiness;
    }
    
    /**
    * Check if the Tsamagotchi is still alive.
    *
    * @returns {boolean} Wether the Tsamagotchi is still alive or not.
    */
    get isAlive() : boolean
    {
        return this._isAlive;
    }
    
    /**
    * Get the food limit of the Tsamagotchi.
    *
    * @returns {number} The amount of food the Tsamagotchi can consume.
    */
    get foodLimit() : number
    {
        return this._foodLimit;
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
        
        this._satiety += amount;
        
        if (this.satiety > this.foodLimit)
        {
            this.decreaseHealth( this.satiety - this.foodLimit );
            this._satiety = this.foodLimit;
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
            this._age += amount;
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
        
        this._satiety -= amount;
        
        if (this.satiety < 0)
        {
            this.decreaseHealth( Math.abs(this.satiety) );
            this._satiety = 0;
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
        
        this._health += amount;
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
        
        this._happiness += amount;
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
        
        this._happiness -= amount;
        if (this.happiness <= 0)
        {
            this.decreaseHealth( Math.abs(this.happiness) + 1 );
            this._happiness = 0;
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
        
        this._health -= 1;
        if (this.health <= 0) this.die();
        return this.health;
    }
    
    /**
    * Make the Tsamagotchi die. Too bad, you tried.
    */
    die()
    {
        this._isAlive = false;
        this._health = 0;
    }
}