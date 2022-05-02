powershell -NoProfile -ExecutionPolicy Unrestricted -Command "& { iwr https://deno.land/x/install/install.ps1 -useb | iex }"
%HOMEPATH%\.deno\bin\deno install -qAn vr https://deno.land/x/velociraptor@1.0.1/cli.ts
if %errorlevel%==0 (
    echo BOT_TOKEN="REPLACE YOUR TOKEN" >> env
    echo CLIENT_ID="REPLACE YOUR ID" >> env
)
else pause