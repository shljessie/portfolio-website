package main

import (
	"flag"
	"fmt"
	"os"

	"cochlear.ai/music-wrapper/mysql"
	"cochlear.ai/music-wrapper/server"
	"cochlear.ai/music-wrapper/utils"
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
