document.querySelector("button").addEventListener("click", () => {
  //1. Get the string of grades from the input
  const grades = document.querySelector("input").value;
  //2. Convert the string to an array (String.split(',')), clean up any extra spaces, and make the grades all uppercase.
  const gradesArray = grades.split(",");
  
  //TEMP:
  console.log(gradesArray);

  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  
  //TEMP:
  console.log(cleanGrades);
});
