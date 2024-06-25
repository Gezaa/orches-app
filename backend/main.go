// backend/main.go

package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux" // Menggunakan mux sebagai router HTTP
)

func main() {
	r := mux.NewRouter()

	// Atur handler untuk route-routes Anda di sini
	r.HandleFunc("/api/ping", pingHandler).Methods("GET")

	// Serve static files (optional)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("../frontend/build")))

	// Set up HTTP server
	srv := &http.Server{
		Addr:    ":8000", // Port yang digunakan oleh server
		Handler: r,
	}

	log.Println("Server started on port 8000")

	// Mulai server HTTP
	log.Fatal(srv.ListenAndServe())
}

func pingHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"message": "pong"}`))
}
