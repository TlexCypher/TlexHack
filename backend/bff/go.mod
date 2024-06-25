module github.com/TlexCypher/TlexHack/backend/bff

go 1.22.0

require (
	github.com/go-chi/chi/v5 v5.0.14 // indirect
	github.com/go-chi/cors v1.2.1 // indirect
	github.com/TlexCypher/TlexHack/backend/helpers v0.0.0
)

replace github.com/TlexCypher/TlexHack/backend/helpers => ../helpers
