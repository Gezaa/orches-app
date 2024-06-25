// backend/handlers/api.go

package handlers

import (
	"net/http"
)

func HandleAPI(w http.ResponseWriter, r *http.Request) {
	// Logika bisnis atau pengolahan data di sini
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"message": "Hello from API!"}`))
}
