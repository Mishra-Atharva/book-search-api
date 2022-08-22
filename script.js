// CHECKING JAVASCRIPT
console.log("working!")

// FUNCTION TO GET INFORMATION ABOUT THE BOOK
function getBooks(){
    
    // RESETS THE DIV TO EMPTY
    document.getElementById("display").innerHTML="";

    // LOOKING FOR WHAT USER HAS SEARCHED FOR
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("looking").value)

    // CONVERTING RESPONSE FROM STRING TO DICTIONARY
    .then(a => a.json())

    // GETTING THE FIRST 10 RESULT OF THE BOOK SEARCH AND GETTING INFORMATION SUCH AS THE AUTHOR'S NAME AND THE IAMGE OF THE COVER OF THE BOOK THEN UPDATING THE "display" DIV
    .then(response => {
        for(var i = 0; i <= 10; i++){
            if (i >= 1){
                alert(i)
                var new_div = document.createElement("div");
                new_div.id = "display"+i;
                var implement = document.getElementsByClassName("main_container");
                implement.appendChild("new_div");
                document.getElementById("display"+i).innerHTML += "<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br> <img src='https://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0] + "-S.jpg'/> <br>";
            }
            document.getElementById("display1").innerHTML += "<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br> <img src='https://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0] + "-S.jpg'/> <br>";
        }
    });
}
