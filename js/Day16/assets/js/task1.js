// Array to hold student objects
const students = [];

// DOM References
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const studentList = document.getElementById("studentList");

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Get input values
  const nameValue = nameInput.value.trim();
  const ageValue = ageInput.value.trim();
  const cityValue = cityInput.value.trim();

  // 2. Create student object
  const student = {
    name: nameValue,
    age: ageValue,
    city: cityValue
  };

  // 3. Add to array
  students.push(student);

  // 4. Render using forEach()
  renderStudents();

  // 5. Reset inputs
  form.reset();
});

// Render cards using forEach
function renderStudents() {
  studentList.innerHTML = "";

  students.forEach((student) => {
    const card = document.createElement("div");
    
    // Tailwind classes for the student card
    card.className = "p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg shadow-sm space-y-1";

    card.innerHTML = `
      <p class="text-slate-800 text-sm"><span class="font-semibold text-slate-900">Name:</span> ${student.name}</p>
      <p class="text-slate-700 text-sm"><span class="font-semibold text-slate-900">Age:</span> ${student.age}</p>
      <p class="text-slate-700 text-sm"><span class="font-semibold text-slate-900">City:</span> ${student.city}</p>
    `;

    studentList.appendChild(card);
  });
}