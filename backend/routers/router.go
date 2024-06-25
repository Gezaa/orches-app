// backend/routers/router.go

package routers

import (
	"orches-app/backend/handlers"

	"github.com/gorilla/mux"
)

func SetupRouter(r *mux.Router) *mux.Router {
	// Contoh rute API
	r.HandleFunc("/api/data", handlers.HandleAPI).Methods("GET")

	return r
}
