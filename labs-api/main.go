package main

import (
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
	mux.HandleFunc("/categories", func(w http.ResponseWriter, r *http.Request) {
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

		fmt.Println(res)
	})
}
