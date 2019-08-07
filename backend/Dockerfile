FROM golang:latest
ENV GO111MODULE=on
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build
EXPOSE 8080
ENTRYPOINT ["/app/backend"]