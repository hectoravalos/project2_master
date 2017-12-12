//flexible attributes
let students = document.getElementsByClassName("student-item"); //Gets the number of students based on the class "student-item"
let studentsPerPage = 10; //How many students that are expected per site, added this so we can easy change number of students shown later on.
let pages = Math.ceil(students.length / studentsPerPage); // Math to calculate how many pages we need.

//creating the new div on the page
const page = document.querySelector(".page"); //target where we want it (class page)
const newDiv = document.createElement("div"); // create a div element
newDiv.className = "pagination"; //give the dive the className pagination
const newUl = document.createElement("ul"); //create a new ul element
newDiv.appendChild(newUl); //combined ul with newDiv
page.appendChild(newDiv); //combined newDiv with page so that we now have a new divbox

//constant attributes
const pagination = document.querySelector(".pagination"); //target the first div with class pagination
const buttomUl = pagination.querySelector("ul"); // targets the first ul within the pagination div.



//adding li to the pagination.
for(let i = 1; i <= pages; i++) { //creates the number of pages we need by creating one LI / page.
	let li = document.createElement("li"); //creates an LI element
	let a = document.createElement("a"); //creates an a element
	a.setAttribute("href", "#"); //adds the href attribute to the a element, and a direction where the link are going
	a.textContent = i; //adding what to be shown.
	
	li.appendChild(a); //put together the a and li elements
	buttomUl.appendChild(li); //get the element on the site.
}

//Only showing the first 10 person when loading the page.
for(let i = 0; i < students.length; i++) { // Loop through all the students and hide the ones after the first 10 (index 0-9)
	if(i < studentsPerPage) {
		students[i].style.display = ""; //Shows if the student is within the first 10.
	}
	else {
		students[i].style.display = "none"; // hides the rest of the students.
	}
}

//adding function to the buttons that gets added earlier.
buttomUl.addEventListener("click", (e) => { //when clicked on.
	let number = parseInt(e.target.textContent); //Get the value of what li that got pressed
	let max = number * 10; // get a max value based on what number that got clicked.
	let min = max - 10; //get where we shall start adding students from (index value)
	
	for(let i =0; i <students.length; i++){
		if(i>=min && i < max){
			students[i].style.display = ""; //If the students indexValue is between min and max it will be displayed on the site.
		}
		else {
			students[i].style.display = "none"; //If the students indexValue is not between min and max it will not be displayed on the site.
		}
	}
});
