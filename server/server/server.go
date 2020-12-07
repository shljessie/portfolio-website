package server

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"os"
)

// Init server
func Init() {
	// Main app server
	app := NewRouter()

	// New mux server for Tusd
	uploadServer := NewTusdService(
		http.NewServeMux(),
	)

	uploadServer.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	// Tusd server
	go func() {
		fmt.Println("Upload service listening on :8080")
		log.Fatal(http.ListenAndServe(":8080", uploadServer))
	}()
	log.Fatal(app.Listen(os.Getenv("SERVER_PORT")))
}
