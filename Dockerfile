FROM clojure
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY project.clj /usr/src/app
RUN ["lein", "deps"]
COPY test /usr/src/app/test
COPY src /usr/src/app/src
CMD ["lein", "ring", "server-headless"]
