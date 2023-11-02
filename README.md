# This is the folder of fs_project

## To start with
I'm not a professional backend engineer.<br>
This is my first backend app so far.<br>
I hope my understanding of DDD concept and implementation can help me pass the trial.<br>
### 2nd Nov, 2023
Nothing other than README.md is working.

## Built with
### Backend:
- Mongoose: The ORM for Node.js
- Nexus GraphQL: Handle mutations and queries

## DDD design

### Identify subdomain
#### `user` subdomain
 - `domain` layer: `user`(aggregate root),`userName`,`password`(value object), `UserLoggedIn`(domain event)
 - `application` layer: `getUserByUserName`
 - `adapter` layer:
 - `infrastructure` layer: Mongoose

Currently, I don't think I have enough time to write a lot of code about user.<br>
But DDD do need at least to subdomain. (To indicate that different group are working together.)<br>
However, I do not have enough time for this. So temperarily, this part will not be implemented.<br>

#### `Fruit` subdomain
  - `domain` layer: `fruit`(aggregate root), `fruitName`, `fruitDescription`(value object),`FruitCreated`(domain event)
  - `application` layer: 
  - `adapter` layre: `IFruitRepo`(repository interface adapter)
  - `infrastructure` layer:`MongooseFruitReppo`


### **mutations**
#### `storeFruitToFruitStorage(name: string, amount: int)`
| Variable | Type | Explanation |
| --- | :---: | :--- |
| name | string | The name of the fruit. |
| amount | number | The amount of fruit to put into the storage. |
##### requirements
1. Javascript identify every numbers as number, so I should use a `Number.isInteger()` to check if the input is an integer. And also use `amount > 0 ` to indicate that the system do not store negative amount of fruit into the storage.
2. The amount add with the amount existed overflow the limit.
3. The name does not exist inside the storage. (Should return something.)

#### `storeFruitToFruitStorage(name: string, amount: int)`

#### `removeFruitFromFruitStorage(name: string, amount: int)`

#### `createFruitForFruitStorage(name: string, description: string, limitOfFruitToBeStored: int)`

#### `updateFruitForFruitStorage(name: string, description: string, limitOfFruitToBeStored: int)`

#### `deleteFruitFromFruitStorage(name: string, forceDelete: boolean)`

### **Query:**

#### `findFruit(name: string)`

## Daily log

### Nov 2nd, 2023
Just receive the project<br>
Understanding DDD concept.<br>
Read document of docker, javascript, node.js, typescript as well as graphQL.<br>
#### TODO
1. Since I already understand what the first mutation would do. I should keep working on the rest.
2. Read DDD desgin and node.js material
3. CI/CD not involved except version control.
