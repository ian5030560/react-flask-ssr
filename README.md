# React-flask-ssr
###### 這是使用flask做react的hydration的測試

```
"build": bundle client和server的程式碼,
"build:client": bundle client的程式碼,
"build:server": bundle server的程式碼,
"ssr": 呼叫 renderToString,
"ssr:pipe": 呼叫 renderToPipeableStream
```
## 使用renderToString
```
stdout.write(renderToString(<App />));
```
![image](https://github.com/ian5030560/react-flask-ssr/blob/49e29d03d585e7a16d05f279482d52ed71dae44d/assets/renderString.png)
## 使用renderToPipeableStream
```
const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: [],
    onShellReady() {
        pipe(stdout);
    }
});
```
![image](https://github.com/ian5030560/react-flask-ssr/blob/49e29d03d585e7a16d05f279482d52ed71dae44d/assets/renderPipe.png)
