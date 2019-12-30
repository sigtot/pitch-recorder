FROM clojure
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY project.clj /usr/src/app
RUN ["lein", "deps"]
COPY resources /usr/src/app/resources
COPY test /usr/src/app/test
COPY src /usr/src/app/src
RUN ["ls"]
CMD ["lein", "ring", "server-headless"]
