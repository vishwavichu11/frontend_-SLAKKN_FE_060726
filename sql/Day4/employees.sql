use tech;
create table employees(
emp_id int primary key,
emp_name varchar(20),
department varchar(20),
salary decimal(10,2),
city varchar(20));
select * from employees;

INSERT INTO employees (emp_id, emp_name, department, salary, city) VALUES
(1, 'Arun', 'IT', 60000.00, 'Chennai'),
(2, 'Bala', 'IT', 45000.00, 'Chennai'),
(3, 'Chitra', 'IT', 55000.00, 'Bangalore'),
(4, 'David', 'HR', 35000.00, 'Chennai'),
(5, 'Ezhil', 'HR', 30000.00, 'Bangalore'),
(6, 'Fathima', 'Finance', 70000.00, 'Coimbatore'),
(7, 'Ganesh', 'Finance', 80000.00, 'Chennai'),
(8, 'Hari', 'Marketing', 25000.00, 'Madurai');

SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

select department,sum(salary) as total_salary
from employees
group by department;

select department, avg(salary) as avg_salary
from employees 
group by department;

select city, count(*) as employee_count
from employees
group by city;

SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;

select department, sum(salary) as total_salary
from employees
group by department
having sum(salary)>100000;

select department, avg(salary) as avg_salary
from employees
group by department
having avg(salary)>40000;

select department, count(*) as count_emp,
avg(salary) as avg_sal
from employees
group by department
having count(*)>=2;

select city, sum(salary) as total_sal,
max(salary) as max_sal
from employees
group by city
having sum(salary)>80000;

select department, sum(emp_name) as total_emp,
sum(salary) as total_sal,
avg(salary) as avg_sal,
max(salary) as max_sal,
min(salary) as min_sal
from employee
having sum(emp_name)>=2 and
avg(salary)>80000
order by salary desc;





