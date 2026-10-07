use TECH;
CREATE TABLE Prodducts (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    sku VARCHAR(50) NOT NULL UNIQUE,             
    category VARCHAR(50) NOT NULL,
    brand VARCHAR(50),
    cost_price DECIMAL(10, 2) NOT NULL,           
    selling_price DECIMAL(10, 2) NOT NULL,        
    stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 1. Mobile Phone சேர்க்க
INSERT INTO Prodducts 
(product_name, sku, category, brand, cost_price, selling_price, stock_quantity, description)
VALUES 
('Nothing Phone (2a) 5G (Black, 128GB)', 'NOTH-2A-128-BLK', 'Electronics', 'Nothing', 20500.00, 23999.00, 25, 'Dimensity 7200 Pro, 50MP Dual Camera, Glyph Interface'),
('OnePlus Nord Buds 2r', '1PLUS-BUDS-2R-BLU', 'Accessories', 'OnePlus', 1450.00, 1999.00, 50, 'Deep Bass, Dual Mic AI Clear Call, 38 Hours Playback'),
('Stainless Steel Gym Shaker Bottle (750ml)', 'GYM-BTL-SS-750', 'Fitness', 'Boldfit', 320.00, 549.00, 100, 'BPA-Free, Leak Proof, Stainless Steel Protein Shaker');
select * from Prodducts;

