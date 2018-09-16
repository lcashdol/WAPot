package main

import (
  "net/http"
  "log"
  "os"
  "fmt"
)


func main() {
        console_log := 1
        port := ":8080"
	logPath := "access.log"
	writeLogFile(logPath)
  fmt.Println("WAPot v1.0\n\n[+] Listening on port",port) 
  http.Handle("/", http.FileServer(http.Dir("./http")))
  if err := http.ListenAndServe(port, logRequest(http.DefaultServeMux,console_log)) 
  err != nil {
    panic(err)
  }

  }

func logRequest(handler http.Handler, clog int) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		log.Printf("%s %s %s \"%s\" \"%s\" \n", req.RemoteAddr, req.Header.Get("X-Forwarded-For"),req.Method, req.URL.RequestURI(), req.UserAgent())
	        fmt.Printf("%s %s %s \"%s\" \"%s\" \n", req.RemoteAddr, req.Header.Get("X-Forwarded-For"),req.Method, req.URL.RequestURI(), req.UserAgent())
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
