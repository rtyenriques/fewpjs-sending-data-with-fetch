// Add your code here
let userData = {
    name: "Ross",
    email: "rtyenriques@gmail.com"
}

let submitData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)
};

fetch("http://localhost:3000/users", submitData)
  .then(function(response) {
  return response.json(); 
  }) .then (function(object) {
      console.log(object)
  }) .catch(function(error) {
      alert("bad news");
      console.log(error.message);
  });