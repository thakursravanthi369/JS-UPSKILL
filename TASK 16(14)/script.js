const students = [
  { name: "Salman Ahmed", marks: 85, class: "10th", address: "Delhi" },
  { name: "Riya Sharma", marks: 75, class: "12th", address: "Mumbai" },
  { name: "Rohan Patel", marks: 90, class: "9th", address: "Bangalore" },
  { name: "Priya Singh", marks: 60, class: "8th", address: "Kolkata" },
  { name: "Ankit Gupta", marks: 88, class: "11th", address: "Chennai" },
  { name: "Pooja Mishra", marks: 93, class: "10th", address: "Pune" },
  { name: "Rajesh Singhania", marks: 92, class: "9th", address: "Jaipur" },
  { name: "Aditya Verma", marks: 81, class: "12th", address: "Lucknow" },
  { name: "Sneha Iyer", marks: 77, class: "10th", address: "Hyderabad" },
  { name: "Karan Mehta", marks: 69, class: "11th", address: "Ahmedabad" },
  { name: "Meera Nair", marks: 95, class: "12th", address: "Trivandrum" },
  { name: "Arjun Malhotra", marks: 72, class: "9th", address: "Amritsar" },
  { name: "Tanya Bose", marks: 87, class: "8th", address: "Howrah" },
  { name: "Yashwanth Reddy", marks: 78, class: "10th", address: "Warangal" },
  { name: "Divya Kapoor", marks: 91, class: "11th", address: "Chandigarh" },
  { name: "Nikhil Chauhan", marks: 66, class: "9th", address: "Shimla" },
  { name: "Fatima Sheikh", marks: 89, class: "10th", address: "Nagpur" },
  { name: "Harshita Jain", marks: 94, class: "12th", address: "Indore" },
  { name: "Zaid Hussain", marks: 84, class: "11th", address: "Bhopal" },
  { name: "Ishita Bhatt", marks: 73, class: "8th", address: "Surat" },
  { name: "Abhishek Nanda", marks: 80, class: "9th", address: "Ranchi" },
  { name: "Lavanya Pillai", marks: 85, class: "11th", address: "Coimbatore" },
  { name: "Tarun Prasad", marks: 70, class: "10th", address: "Patna" },

];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const studentList = document.getElementById("studentList");

const renderStudents = (studentsToRender) => {
  studentList.innerHTML = studentsToRender.map(student => `
    <div class="student-card">
      <p><strong>Student Name:</strong> ${student.name}</p>
      <p><strong>Marks:</strong> ${student.marks}%</p>
      <p><strong>Class:</strong> ${student.class}</p>
      <p><strong>Address:</strong> ${student.address}</p>
    </div>
  `).join('');
};

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm)
  );
  renderStudents(filtered);
});

// Initial render
renderStudents(students);
