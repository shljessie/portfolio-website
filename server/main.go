package main

import (
	"flag"
	"fmt"
	"os"

	"cochlear.ai/music-swapper/mysql"
	"cochlear.ai/music-swapper/server"
	"cochlear.ai/music-swapper/utils"
)

func main() {
	flag.Usage = func() {
		fmt.Println("Usage: server -e {mode}")
		os.Exit(1)
	}

	flag.Parse()

	utils.ConfigInit()
	mysql.Init()
	server.Init()
}
