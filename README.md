# react-one-signal-example
An example to integrate one signal with rekit a toolkit for building scalable web applications with React, Redux and React-router

# Clone repository
```
git clone git@github.com:tientnvn/react-one-signal-example.git
```

# Installation
```
npm install -g rekit
```
This will install a global command rekit to the system. Rekit is developed and tested on npm 3+ and node 6+, so this is the prerequisite for using Rekit.

# Run
```
cd react-one-signal-example
npm install
npm start
```

It then starts two express servers by default:

Webpack dev server: http://localhost:6075. Just what create-react-app starts.
Rekit Studio: http://localhost:6076. The IDE for Rekit projects.
To change the ports dev-servers running on, edit the rekit section in package.json:

```
{
  ...
  "rekit": {
    "devPort": 6075,
    "studioPort": 6076,
    ...
  }
  ...
}
```
