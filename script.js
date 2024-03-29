document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var rollNumber = document.getElementById('roll-number').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;

    var studentList = document.getElementById('student-list');
    var newStudent = document.createElement('div');
    newStudent.classList.add('student-item');
    newStudent.innerHTML = '<strong>Name:</strong> ' + name + ', <strong>Roll Number:</strong> ' + rollNumber + ', <strong>Age:</strong> ' + age + ', <strong>Grade:</strong> ' + grade;
    studentList.appendChild(newStudent);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('roll-number').value = '';
    document.getElementById('age').value = '';
    document.getElementById('grade').value = '';
});