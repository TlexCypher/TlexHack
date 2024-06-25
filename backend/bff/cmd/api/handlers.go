package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type ActionPayload struct {
	Action string `json:"action"`
}

type JSONResponse struct {
	Message string `json:"message"`
	Status  int    `json:"status"`
	Error   bool   `json:"error"`
}

func (app *Config) Broker(w http.ResponseWriter, req *http.Request) {
	dec := json.NewDecoder(req.Body)
	defer req.Body.Close()

	var ap ActionPayload
	if err := dec.Decode(&ap); err != nil {
		log.Fatalln("Failed to decode into action payload.")
	}

	switch ap.Action {
	case "signup":
		app.Signup(w, ap)
	case "signin":
		app.Signin(w, ap)
	default:
		log.Println("No such action.")
	}
}

// TODO: call the signup-service (authenticate micro-service)
func (app *Config) Signup(w http.ResponseWriter, ap ActionPayload) {
	log.Println("enter the signup method.")
	//this is temporary work-flow
	app.Mock(w, "signup")
}

// TODO: call the signin-service (authenticate micro-service)
func (app *Config) Signin(w http.ResponseWriter, ap ActionPayload) {
	log.Println("enter the singin method.")
	// this is temporary work-flow
	app.Mock(w, "signin")
}
