# WAPot
A honeypot that can be used to observe traffic directed at wireless home routers.


The honeypot will emulate a Belkin N300 Home Wireless router with the default setup.  These routers are shipped with no password set for the adminitrative interface by default.

![alt text](http://www.vapidlabs.com/n300.jpeg)

Usage:

$ cd WAPot

$ go run main.go

The idea is to expose this interface externally on port 8080 or 8000 to appear as if an administrative port has been opened to the internet.  
