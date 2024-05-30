FROM golang:1.22-alpine as build

WORKDIR /app

COPY main.go .

RUN go build -o main main.go

RUN rm main.go

FROM scratch

COPY --from=build /app/main .

CMD ["./main"]