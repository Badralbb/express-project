
Create type transactionType as enum ('Income' ,'Expense');

Create Table transaction (
    id char(36) primary key,
    amount decimal(10,2),
    categoryId char(36),
    transactionType Varchar(10),
    date DATE,
    payee Varchar(36),
    note Text,
    foreign key (categoryId) references category(id)
)
insert into transaction values('id' , 1000 , 'categoryId', 'Income' , CurrentDate , 'Sarnai', 'Oroo tol')