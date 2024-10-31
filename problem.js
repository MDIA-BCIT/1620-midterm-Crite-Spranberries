/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/



function checkPassword(password, userInput){
    
    let flagForOptimal;                                                                             // Checks if the passwords are "forgot" or "reset" to account for telling the user the password name is not ideal
    if ((password == "forgot") || (password =="reset")) {
        flagForOptimal = false;
    } else flagForOptimal = true;


    if (password.length < 5){                                                                       // Checks if password is too short
        console.log("Your password is too short!");
    } else if ((flagForOptimal == false) && (userInput == password)){                               // Checks if input is valid + if its labelled as "reset" or "forgot"
        console.log("Access Granted!");
        console.log("This password you set should not be used because it glitches the system");
    } else if (userInput == password){                                                              // Checks if password is valid
        console.log("Access Granted!");
    } else if (userInput == "forgot"){                                                              // Provides user with hint if user inputs "forgot"
        console.log(`Here is a hint! The password starts with: "${password.charAt(0)}".`);             
    } else if (userInput == "reset"){                                                               // Prompts user with text if user inputs "reset"
        console.log("Let's reset your account")
    }   else if (userInput != password){                                                            // Checks if input is invalid
        console.log("Access Denied!");
    }
}


// checkPassword([password], [input]);

checkPassword("potatoes", "potatoes");




// // Sample password variable bank I used for preset word testing
// let chosenWord0 = "reset";                  //To establish "reset" as password
// let chosenWord1 = "forgot";                 //To establish "forgot" as password
// let chosenWord2 = "xXxcodem4ster1010xXx";   //To establish the "correct" password
// let chosenWord3 = "smol";                   //To establish small invalid password(>5) size

// // Input variable. Change this accordingly! 
// let input = "xXxcodem4ster1010xXx";

// // Password variable. Change this accordingly! 
// let setPassword = chosenWord2;

// // Calls the function. These are preset variables that can be swapped above, but typing in
// // straight strings also works!