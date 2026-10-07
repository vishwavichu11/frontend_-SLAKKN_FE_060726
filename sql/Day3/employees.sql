use tech;
SELECT * FROM tech.employees;
select emp_name,salary,city from employees;
select * from employees where city='chennai';
select * from employees where salary > 45000;
ALTER TABLE employees 
ADD age INT;
UPDATE employees
SET age = CASE emp_id
    WHEN 1 THEN 28
    WHEN 2 THEN 25
    WHEN 3 THEN 30
    WHEN 4 THEN 32
    WHEN 5 THEN 24
    WHEN 6 THEN 35
    WHEN 7 THEN 40
    WHEN 8 THEN 23
END
WHERE emp_id IN (1, 2, 3, 4, 5, 6, 7, 8);
select *  from employees where age <28;
select * from employees where salary >= 40000;
select * from employees where department != 'HR';
select * from employees where department = 'IT' and city='chennai';
select * from employees where city = 'chennai' or city = 'madurai';
select * from employees where salary >40000 and age <30;
select * from employees where city in ('chennai','madurai','salam');
select * from employees where department not in ('IT','HR');
INSERT INTO employees (emp_id, emp_name, department, salary, city, age) 
VALUES (9, 'Kavya', 'IT', 50000.00, NULL, 26);
select * from employees where city is null;
select * from employees where city is not null;
select * from employees where salary between 35000 and 50000;
select * from employees where age between 25 and 30 and city='chennai';
select * from employees where emp_name like 'A%';
select * from employees where emp_name like '%vi%';
select distinct department from employees;
SELECT 
    emp_name AS employee_name,
    department AS department_name,
    salary AS monthly_salary
FROM employees;

