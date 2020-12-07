FROM golang:1.15-buster

WORKDIR /build

COPY server/go.mod server/go.sum ./
RUN go mod download

COPY ./server .

RUN  go build -o . .

EXPOSE 5050