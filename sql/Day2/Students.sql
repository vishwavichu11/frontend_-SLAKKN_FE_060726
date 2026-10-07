use Tech;
create table Students(
Name varchar(20),
Age int,
Department varchar(20),
City varchar(20));
INSERT INTO Students (Name, Age, Department, City)
VALUES ('Ravi', 22, 'CSE', 'Chennai');
select * from Students;