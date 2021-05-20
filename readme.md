# Webview Application

Playing around with native webviews.

This project is broken up into several pieces. `projects` which are `client` and `launcher`, and `deps`. `deps` contains several customized libraries for this project. (E.g. Mods on existing libraries for compatibility reasons.)

## Client

The client is a react application.

It uses the hashrouter (see below) and webpack. In production, all resources are inlined using data urls https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs.

This allows for embedded of the entire application UI into a single file - and can be embedded into the binary.

The hashrouter is used because we don't want the webview to make any actual network requests for navigation.

## Application

The launcher is simply a rust launcher around native webview for Windows, Linux, and Mac. The rust code itself is further another wrapper around C++ code webview.

I have made a few mods for compatibility issues (primarily on windows).

## Getting Started

Currently, the rust application launches a webview and navigates the webview to `localhost:4040`. The client server should be running on that port.
