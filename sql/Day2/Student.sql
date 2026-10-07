SELECT * FROM tech.students;

INSERT INTO Students (Name, Age, Department, City)
VALUES 
('Arun', 23, 'IT', 'Madurai'),
('Bala', 21, 'ECE', 'Chennai'),
('Priya', 24, 'CSE', 'Coimbatore');

ALTER TABLE Students
ADD id INT PRIMARY KEY AUTO_INCREMENT FIRST;

ALTER TABLE Students
DROP COLUMN id;

UPDATE Students
SET City = 'Bangalore'
WHERE id = 2;

update Students
set Age = 25
where id = 3 ;


update Students
set Age = 24,
Department = 'IT',
City = 'Chennai'
where id = 1;

SET SQL_SAFE_UPDATES = 0;
update Students
set City = 'Madurai'
where Department = 'CSE';

delete from Students
Where id = 4;

DELETE FROM Students
WHERE City = 'Salem';

UPDATE Students
SET City = 'Trichy'
WHERE id = 2;

ALTER TABLE Students
ADD updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

SELECT id, Name, City, updated_at
FROM Students
WHERE id = 2;


INSERT INTO Students (Name, Age, Department, City)
VALUES ('Kavitha', 21, 'IT', 'Madurai');


INSERT INTO Students (Name, Age, Department, City)
VALUES 
('Suresh', 22, 'ECE', 'Salem'),
('Divya', 23, 'CSE', 'Tirunelveli');


UPDATE Students
SET City = 'Chennai'
WHERE Name = 'Kavitha';


UPDATE Students
SET Age = 24, Department = 'AI&DS'
WHERE Name = 'Suresh';


DELETE FROM Students
WHERE Name = 'Divya';