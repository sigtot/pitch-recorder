# Pitch Recorder
## Basic Structure
The basic components:
* Clojure json API
* Postgres database
* React frontend
* Swagger docs for the api


## Basic Usage 
### Setup and Run
Postgres, react and swagger lives in a docker network. Start it with
```bash
docker-compose up
```
The clojure api is run with Leiningen
Dependencies:
```bash
lein deps
```
Run dev server:
```bash
lein ring server-headless
```

### Test
Run api tests with
```bash
lein test
```
