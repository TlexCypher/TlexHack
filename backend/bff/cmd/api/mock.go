package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func (app *Config) Mock(w http.ResponseWriter, service string) error {
	var resp JSONResponse
	resp.Error = false
	resp.Message = fmt.Sprintf("Success to %s from mock", service)
	resp.Status = http.StatusAccepted

	out, err := json.Marshal(resp)
	if err != nil {
		log.Println("Failed to marshal.")
		return err
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)

	_, err = w.Write(out)
	if err != nil {
		log.Println("Failed to write into ResponseWriter.")
		return err
	}
	return nil
}
