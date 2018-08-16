package main

import (
  "net/http"
  "log"
  "os"
)


func main() {

	logPath := "access.log"
	writeLogFile(logPath)

  http.Handle("/", http.FileServer(http.Dir("./http")))
  if err := http.ListenAndServe(":8080", logRequest(http.DefaultServeMux)) 
  err != nil {
    panic(err)
  }

  }

func logRequest(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		log.Printf("%s %s \"%s\" \"%s\" \n", req.RemoteAddr, req.Method, req.URL.RequestURI(), req.UserAgent())
		handler.ServeHTTP(w, req)
	})
}

func writeLogFile(logfile string) {
if logfile != "" {
	line, err := os.OpenFile(logfile, os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0640)
		if err != nil {
			log.Fatal("OpenLogfile: os.OpenFile:", err)
		}

		log.SetOutput(line)
	}
}
