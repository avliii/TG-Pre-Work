# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/, what happens? 

Upon entering https://www.techtonicgroup.com/ into the address bar, the browser will attempt to retrieve the page from cache or local storage, or will proceed to attempt to locate and fetch the page from the web. This begins by checking the domain against a cache. If it is unknown, a gethostbyname call will check locally for the server before seeking a DNS resolution by sending ARP requests across the subnet looking for a local DNS server, or the default gateway if the required DNS server is remote. 

Once the address is resolved, the local machine will attempt to open a socket and connect to the server. Data is sent in discrete packets, with many protocols and standards for the process of “wrapping” and “unwrapping” packets at either end of the connection. Layers of transmission encoding are progressively added to the packet, acting as containers for the previous layer’s data. On the receiving end, the packet is decoded in the same series steps. The conceptual division of these tasks into layers is fundamental to the function and interoperability of the TCP/IP stack, the most common standard for internet communication. Data can be considered as being sent “down” through the layers of one machine and back “up” through the other, or visualized as connections between like protocols running corresponding layers of both machines.

Any data we send will be passed down from our Application to the Presentation layer, where it is converted into the appropriate encoding and encrypted. The Session layer appends information required for setting the rules of the session in which the browser will communicated with applications on the server. The Transmission layer then adds data needed for error recovery and flow control - in this case, it is wrapped in a TCP packet. This is sent to the Network layer, which generates an IP frame around the data containing the logical network addresses and other information needed for routing and forwarding. The Data Link layer specifies the physical addresses and communication protocols for transmitting across physical media. Finally, the Physical layer sets the electrical and mechanical standards for interoperability of physical equipment (WiFi radios, Ethernet cables, etc.). Our requests will be encoded and transmitted using these seven layers in sequence, and decoded and passed to the web page hosting application in reverse order. Using this format, the data can be transmitted across nearly any kind of physical network, regardless of medium (see RFC 2549 for an example). Each network node extracts or applies the required data from each transmission packet, statelessly sending them to a node one hop closer to their destination.

Normally, our example would involve a Transport Socket Layer handshake to establish a secure connection, followed by HTTP GET to view the page. This use of HTTP over TLS constitutes HTTPS, indicated by the URL as the desired protocol. In this case, however TLS, which requires the use of cryptographic key certificates, fails. Instead, it returns SSL_ERROR_BAD_CERT_DOMAIN, which indicates the SSL certificate provided for this domain does not match the domain for which the certificate was issued. As page at techtonicgroup.com redirects to techtonic.com, it seems likely that the former domain is attempting to use the certificate issued for the latter. Most browsers block further communication at this point, providing a warning that the SSL certificate is invalid and/or warning of possible browser hijacking.

A solution to this would be to add a valid SSL certificate to techtonicgroup.com so that visitors using HTTPS can access the site securely and receive the redirect to https://www.techtonic.com, which has a functioning certificate. Using http instead of https also works - it allows users to access and be redirected from the uncertified site - but that should be considered a security vulnerability.

## From start to finish how does that data reach you to be rendered in the browser? 
When the browser successfully connects to a website, it uses some routine (as in the async examples from Codecademy) to make GET and POST requests. The the connection is characterized by status- and error-checking responses to these requests, and by the exchange of Promises, which help manage the many requests by acting as a placeholder for currently-unavailable data. A promise waits to be resolved in a pending state; thereafter being fulfilled with a successful execution of the request or rejected otherwise. Once a successful response has been received, it is rendered as a webpage by the browser, for example by using the renderResponse() or renderRawResponse() functions. 

## What code is rendered in the browser? 
The basic purpose of the browser is to convert HTML code in a human-readable format, which is done using a rendering engine. Modern browsers support dozens if not hundreds of code languages, but the one it “renders” is HTML.

## What is the server-side code’s main function? 
The server must securely, appropriately, and quickly respond to requests from multiple users. Servers use languages like PHP, Java, C++ and the server-side code must provide a means of managing access permissions of data.

## What is the client-side code’s main function? 
The client-side code must send requests securely to the server, display or interface with received data, and perform local operations to minimize network traffic. Client-side code uses languages like JavaScript. The client-side must validate inputs and provide an easily-understood interface for human users.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created? 
A client would generally need a single instance of client-side assets, except in cases of multi-thread communication.

## How many instances of the server-side code are available at any given time? 
In traditional monolithic applications, server-side code runs in single instances at static locations. A modern microservice application is more likely to run in virtual environments where the number and location of instances are dynamic.

## What is runtime? 
Runtime is the time that a program is running in memory, and describes the instructions that are or can be executed during that time. Runtime also describes the libraries and systems needed to compile, debug, and create an execution environment for code in a particular language.

## How many instances of the databases connected to the server application are created? 
One, or more, instances of a database can be created. Generally, one database instance on a server is sufficient. Single instances of a database can serve large numbers of users by utilizing load-balancing and caching. Many protocols, like MySQL, allow for multiple instances to run independently on a single server. Only one will be the default instance, while multiple named instances can exist, for example with different versions, service pack levels, or permissions. 
