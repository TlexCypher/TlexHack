package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

type Config struct{}

func main() {
	app := Config{}
	webport := os.Getenv("BFF_WEBPORT")

	srv := http.Server{
		Addr:    fmt.Sprintf(":%s", webport),
		Handler: app.routes(),
	}

	if err := srv.ListenAndServe(); err != nil {
		log.Fatalln("Failed to start server.")
	}
}
