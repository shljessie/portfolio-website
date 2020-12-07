# How to run

Run this command into the project's folder

```bash
  docker-compose up --build
```

Once the docker-compose is started you can access the documentation [there](http://localhost/v1/documentation)


- User management
  - User registration
    - Email validation
  - Login
  - User list
  - Permission management
  - User update ?
  - User delete ?
  - User management dashboard ?
  - User credit systeme ?
- Video ?
  - Upload video
  - Analyze video https://github.com/cochlearai/bakazoosong
    - return timestamps of start/end of each copyrighted music detected (don't know what to use yet)
  - Suggest similar music for existing music (what to use) 
  - Replace https://github.com/cochlearai/CJ_musixchange
    - send array of start/end timestamp and which music to add for each segment
    - replace music on track with new music (don't know how to remove sound but know how to put music on top of existing soundtrack)
    - download newly generated video
