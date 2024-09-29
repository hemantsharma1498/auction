package server

import (
	"log"
	"net/http"

	"github.com/hemantsharma1498/auction/store"
)

type Server struct {
	Router *http.ServeMux
	store  store.Storage
}

func InitServer(store store.Storage) *Server {
	s := &Server{Router: http.NewServeMux(), store: store}
	s.Routes()
	return s
}

func (m *Server) Start(port string) error {
	log.Printf("Starting auction server at address: %s\n", port)
	if err := http.ListenAndServe(":"+port, m.Router); err != nil {
		return err
	}
	return nil
}
