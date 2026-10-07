use TECH;
CREATE TABLE Government_Offfices (
    office_id INT PRIMARY KEY AUTO_INCREMENT,
    office_code VARCHAR(20) NOT NULL UNIQUE,
    office_name VARCHAR(150) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    head_officer_name VARCHAR(100),
    contact_number VARCHAR(20),
    official_email VARCHAR(100) UNIQUE,
    address TEXT NOT NULL,
    taluk VARCHAR(50),
    district VARCHAR(50) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    status ENUM('Active', 'Inactive') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO Government_Offfices 
(office_code, office_name, department_name, head_officer_name, contact_number, official_email, address, taluk, district, pincode)
VALUES 
('TN-REV-042', 'Taluk Office Tambaram', 'Revenue Department', 'K. Sundaram', '044-22260100', 'tahsildar.tbm@tn.gov.in', 'GST Road, Tambaram', 'Tambaram', 'Chengalpattu', '600045');

select * from Government_Offfices;