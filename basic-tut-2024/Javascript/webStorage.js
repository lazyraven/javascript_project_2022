// Chcek output in application - session and local storage

// Storing data
                    localStorage.setItem('name', 'John Doe');
                    sessionStorage.setItem('sessionName', 'Jane Doe');

                    // Retrieving data
                    console.log(localStorage.getItem('name')); // John Doe
                    console.log(sessionStorage.getItem('sessionName')); // Jane Doe

                    // Removing data
                    // localStorage.removeItem('name');
                    // sessionStorage.removeItem('sessionName');

                    // // Clearing all data
                    // localStorage.clear();
                    // sessionStorage.clear();


                     let user = { name: "Nisha", age: 25 };

                    // localStorage and sessionStorage can only store strings
                    // To store objects, we need to convert them to strings using JSON.stringify()
                    // Storing the object as a string
                    // JSON.stringify() converts the object to a string 
                    // so that it can be stored in localStorage
                    // JSON.parse() converts the string back to an object
                    // so that it can be used as an object

                    localStorage.setItem("user", JSON.stringify(user));

                    // Retrieving and parsing the object

                    let data = JSON.parse(localStorage.getItem("user"));
                    console.log(data.name); // "Nisha"