package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Category struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Image       string `json:"image"`
}

func main() {
	fmt.Println("Dominus Iesus Christus")

	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("./public"))

	mux.Handle("/public/", http.StripPrefix("/public/", fs))
	mux.HandleFunc("/api/categories", func(w http.ResponseWriter, r *http.Request) {
		res := []Category{
			{
				Name:        "Get Started",
				Description: "New to the Inner Circle? Start here to get up and running",
				Image:       "/public/icons/rocket_ship.png",
			},
			{
				Name:        "Labs",
				Description: "Test and shape our digital products, consumer goods, and platform features",
				Image:       "/public/icons/labs.png",
			},
			{
				Name:        "Studio",
				Description: "Preview exclusive content and help shape our entertainment offerings",
				Image:       "/public/icons/studio.png",
			},
		}

		data, err := json.Marshal(res)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		w.Write(data)
	})

	server := &http.Server{
		Addr:    ":3000",
		Handler: mux,
	}
	server.ListenAndServe()
}
