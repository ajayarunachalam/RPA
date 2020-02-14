Open the terminal, and run

1) sudo python3 DataCollect.py  

This should create a filename DataCollect.csv, after it receives synced data from the port where the quantum sensor is configured. It will also create a database in the folder "Framework/database" , and a table named "MyData" in the database1.db

2) To check the database, run the following in the terminal

sqlite3 database1.db

This will load the sqlite prompt like shown below where you can check the table & contents. 

sqlite> select count(1) from MyData;

To exit the sqlite prompt type .quit;



