from serverRender import serverStringRender, serverPipeRender
    
print(serverStringRender())
print("------------------------------------------------")
for context in serverPipeRender():
    print(context)