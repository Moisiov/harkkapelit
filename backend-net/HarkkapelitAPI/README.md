# Harkkapelit API

## Installation
Install SQL Server.
I'm running SQL server in Docker container:
```docker run --name "SQLServer" -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest```