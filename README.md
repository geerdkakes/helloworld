# Hello Node

To build use:
```
docker build -t hellonode .
```

To run use:

```
docker run -d -p 8080:8080 hellonode
```

To tag the image use:

```
docker tag hellonode geerd/hellonode:1.0
```


To push to register use
```
docker push geerd/hellonode:1.0
```

