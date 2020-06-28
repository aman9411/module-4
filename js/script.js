
var names = ["Aman", "Praveen", "Jain","jeson","robert","Johnsnow","Alexa","jordan"];

console.log("here is the Array containing names are:- "+names)

console.log("    ")

console.log("Output:-")

console.log("    ")
for(var i=0; i<names.length; i++) {

	if(names[i][0] == "j" || names[i][0] == "J")
            {
	         console.log("Goodbye "+names[i]);
	        }
    else
            {
             console.log("Hello "+names[i]);
            }

}
