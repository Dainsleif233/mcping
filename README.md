# MinecraftServerPing

一个获取服务器信息的 API

端点
``` 
GET /example.com
```

会自动解析 SRV，返回 200 为成功，500 为失败

响应示例：

```
200 OK JSON
{
    "target": "sj.jsumc.fun:25565", 
    "info": {
        "version": {
            "protocol": 773, 
            "name": "Velocity 1.7.2-1.21.10"
        }, 
        "players": {
            "online": 0, 
            "max": 2025, 
            "sample": [ ]
        }, 
        "description": {
            "extra": [
                {
                    "color": "green", 
                    "text": "江苏大学"
                }, 
                {
                    "color": "yellow", 
                    "text": "Minecraft"
                }, 
                {
                    "color": "green", 
                    "text": "同好会 "
                }
            ], 
            "text": ""
        }, 
        "favicon": "data:image/png;base64,XXX"
    }, 
    "latency": 34
}
```

失败则直接返回错误信息。