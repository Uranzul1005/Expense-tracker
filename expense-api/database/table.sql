CREATE TABLE categories (
    id VARCHAR(21) PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP default current_timestamp, 
    updated_at TIMESTAMP default current_timestamp, 
    category_image TEXT
)

CREATE TABLE transactions (id VARCHAR(21) PRIMARY KEY, 
user_id VARCHAR(21),
constraint fk_user FOREIGN KEY(user_id) REFERENCES users(id),
name TEXT, 
amount MONEY, 
transaction_type VARCHAR(50), 
description TEXT,
created_at TIMESTAMP default current_timestamp, 
updated_at TIMESTAMP default current_timestamp,
category_id VARCHAR(21),
constraint fk_category FOREIGN KEY(category_id) REFERENCES categories(id))

CREATE TABLE users (id VARCHAR(21) PRIMARY KEY,
email VARCHAR(50) UNIQUE NOT NULL, 
name VARCHAR(50) UNIQUE NOT NULL, 
password TEXT, 
avatar_img TEXT, 
created_at TIMESTAMP default current_timestamp, 
updated_at TIMESTAMP default current_timestamp, 
currency_type TEXT DEFAULT 'MNT')

INSERT INTO categories Values('1', 'Food & Drinks')

INSERT INTO categories Values('2', 'Shopping')

INSERT INTO categories Values('3', 'Housing')

INSERT INTO categories Values('4', 'Transportation')

INSERT INTO categories Values('5', 'Vehicle')

INSERT INTO categories Values('6', 'Life & Entertainment')

INSERT INTO categories Values('7', 'Communication, PC')

INSERT INTO categories Values('8', 'Financial expenses')

INSERT INTO categories Values('9', 'Investments')

INSERT INTO categories Values('10', 'Income')

INSERT INTO categories Values('11', 'Others')

insert into transactions (id, amount, category_id) values('34', 10000, '1')

SELECT transactions.id, amount, categories_id, categories.name categories_name FROM transactions left join categories on transactions.category_id = categories.id