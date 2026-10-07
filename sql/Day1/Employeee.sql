use TECH;
CREATE TABLE Employeee (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    designation VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    hire_date DATE NOT NULL
);
INSERT INTO Employeee (emp_name, email, phone, designation, department, salary, hire_date) 
VALUES 
('Vishwa E', 'vishwa@example.com', '9876543210', 'Frontend Developer', 'Engineering', 45000.00, '2026-06-01'),
('Priya S', 'priya@example.com', '9876543211', 'UI/UX Designer', 'Product', 42000.00, '2026-06-15'),
('Karthik M', 'karthik@example.com', '9876543212', 'Backend Developer', 'Engineering', 48000.00, '2026-07-01');
select * from Employeee;
