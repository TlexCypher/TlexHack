package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

type Config struct{}

func main() {
	webport := os.Getenv("AUTHENTICATE_PORT")
	app := Config{}
	srv := http.Server{
		Addr:    fmt.Sprintf(":%s", webport),
		Handler: app.routes(),
	}
	if err := srv.ListenAndServe(); err != nil {
		log.Fatalln("Failed to start authenticate service.")
	}
}
