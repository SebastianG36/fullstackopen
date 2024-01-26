```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: When the note is submitted, the event handler on the JavaScript code activates and executes the code
    Note right of browser: The code adds the new note to the notes list and rerenders the note list on the page
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: As instructed in the JavaScript code, the browser sends the new note to the server
	server-->>browser: 201 Created status code
	deactivate server