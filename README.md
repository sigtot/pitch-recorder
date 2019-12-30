# Pitch Recorder
## Basic Structure
The basic components:
* Clojure json API
* Postgres database
* React frontend
* Swagger docs for the api


## Basic Usage 
### Setup and Run
Everything lives in a docker-compose network. Start it with
```bash
docker-compose up
```
This exposes the following services:
* API: http://localhost:3000
* Frontend: http://localhost:3001
* Swagger: http://localhost:8080

### Test (clojure)
Run api tests with
```bash
lein test
```
