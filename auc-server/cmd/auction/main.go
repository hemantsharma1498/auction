package main

import (
	"log"
	"os"

	"github.com/hemantsharma1498/auction/server"
	postgresDb "github.com/hemantsharma1498/auction/store/pg"
)

func main() {
	log.Printf("Initialising members server")

	log.Printf("Connecting to database...")

	store, err := postgresDb.NewAuctionDbConnector().Connect()
	if err != nil {
		log.Panicf("Unable to connect to db, error: %s\n", err)
	}
	log.Printf("Db connection established")

	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}
	s := server.InitServer(store)
	if err = s.Start(port); err != nil {
		log.Panicf("Failed to initialise server at %s, error: %s\n", port, err)
	}
}
