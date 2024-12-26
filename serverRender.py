import subprocess

def serverRender():
    p = subprocess.Popen("npm run ssr --silent", shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, encoding="utf-8")
    
    size = 1024
    while True:
        chunk = p.stdout.read(size)
        if not chunk:
            break
        
        yield chunk