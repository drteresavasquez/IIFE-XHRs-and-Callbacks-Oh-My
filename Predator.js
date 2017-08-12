console.log("predator.js, Yo!");
//Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

{
    var carnivores = [];
    var herbivores = [];
    
    var Predator = (function () {
       
    return {
        loadCarnivores: function(callbackToInvoke){
        var loader = new XMLHttpRequest();
        loader.open("GET", "data/carnivores.json");
        loader.send();

        loader.addEventListener("load", loaderComplete);
        loader.addEventListener("error", loaderFailed);

        function loaderComplete(event){
            if (event.target.status === 200) {
            console.log("The data has loaded");
            carnivores = JSON.parse(event.target.responseText);
            callbackToInvoke(carnivores);
            console.log("dataLoad", dataLoad);
            }else {
                console.log("Check the spelling of your file");
            }
        };
    }
        
        function loaderFailed(event){
            console.log("oops the data failed");
        };         


    loadHerbivores: function(callback){
        loader = new XMLHttpRequest();
        loader.open("GET", "data/herbivore.json");
        loader.send();

        loader.addEventListener("load", loaderComplete);
        loader.addEventListener("error", loaderFailed);

        function loaderComplete(event){
            console.log("event", event);
            if (event.target.status === 200) {
            console.log("The data has loaded");
            let dataLoad = JSON.parse(event.target.responseText);
            console.log("dataLoad", dataLoad);
            }else {
                console.log("Check the spelling of your file");
            }
        };
        
        function loaderFailed(event){
            console.log("oops the data failed");
        };
    }

}
// var Predator = (function () {
   
  
//     return {
//       loadCarnivores: function (callbackToInvoke) {
//         var loader = new XMLHttpRequest();
  
//         loader.addEventListener("load", function () {
//           // Set the value of the private array
//           carnivores = JSON.parse(this.responseText);
  
//           // Invoke the callback function so that the caller knows
//           // that the process is complete. Make sure to pass the 
//           // carnivore array as an argument.
  
//         });
//       }
//     }
//   })();