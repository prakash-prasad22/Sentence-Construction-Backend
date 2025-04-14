# JSON Server Deployment

This repository provides a simple setup for creating a JSON Server to be used as a backend for the Quiz Application.  It's designed for quick deployment on platforms like Render.com.

## Purpose

We are using JSON Server to:

* Provide mock API endpoints for quiz data.
* Simplify the process of fetching and managing quiz questions, options, and answers.
* Enable rapid development of the Quiz Application's frontend without requiring a full database setup.

## Key Files

* `db.json`:  Contains the quiz data in JSON format.  This file is used by JSON Server to create the API.
* `server.js`:  A Node.js script that configures and runs the JSON Server.  This is necessary for deployment on Render.com.
* `package.json`: Defines the dependencies and scripts for the project, including running the JSON Server.

## Data Structure

The `db.json` file should be structured as a JSON object, typically containing arrays of objects.
