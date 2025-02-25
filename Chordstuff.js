
function generateRandomList() {
    //This defines the function
        const randomList = [];
        //Creates an empty array to hold the random numbers
        
        for (let i = 0; i < 8; i++) {
        //Standard for loop, generates 8 numbers 
            const randomNumber = Math.floor(Math.random() * 3);
        
        //Generates a random float between 0 to 1, multiplying it by 3, and then rounding down.
            randomList.push(randomNumber);
        //Adds number to list
        }
        
        return randomList;
        //Returns complete list
    }
    const randomNumbers = generateRandomList();
    //Call the function
    
    console.log (randomNumbers);
    