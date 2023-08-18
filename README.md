![Ochre Banner](https://github.com/FilipSly/Ochre/blob/DevBuild-1/banner.png?raw=true)
# Ochre
 Ochre. Messaging done Simple.

## What is Ochre?
 Ochre is a messaging app based on JavaScript, MongoDB and React.js, and to an extent is a learning project.

### Why Ochre?
 Ochre aims to solve an issue with nearly all messaging apps: the privacy concerns that come with the selling of data.

## When will Ochre be fully available?
 There is no ETA right now but it will be updated once there is one.

## How can I run a development build?
1. Set up a MongoDB instance on the computer the code will run on (you can use Docker for this)

2. Pull the code from the prefered branch
```
gh repo clone FilipSly/Ochre
```
3. Make a `.env` file in `Ochre/backend/` and paste in the following (If you already have the file just make sure it contains this)
```
ATLAS_URI=mongodb://localhost:27017
PORT=4000
TOKEN_KEY=[Whatever You Want (no spaces)]
```


Then install dependencies with 
```
npm install
```

4. Run the backend server
```
cd backend
node server.mjs
```

5. Run the frontend page (In a different terminal window from the backend)
```
cd frontend
npm start
```

## Support
For any inquiries, open an Issue with the `question` label