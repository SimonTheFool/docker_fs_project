/* a lot of things need to be specified later, like the length of the fruit name, description length, 
* as well as the maximum number of limitOfFruitToBeStored.
* 1. length of fruit name
* 2. description length
* 3. specification of limitOfFruitToBeStored

I exclude the AggregateRoot part.
*/
interface FruitProps {
    fruit: string;
    description: string;
    limitOfFruitToBeStored: number;
}

