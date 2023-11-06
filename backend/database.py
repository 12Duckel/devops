import mysql.connector

db_config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "GestionsdesEtudiant"
}

connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()