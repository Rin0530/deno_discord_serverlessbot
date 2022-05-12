@echo off
echo "BOT_TOKEN‚ð“ü—Í‚µ‚Ä‚­‚¾‚³‚¢ > "
SET /P BOT_TOKEN=
echo "Application_ID‚ð“ü—Í‚µ‚Ä‚­‚¾‚³‚¢ > "
SET /P Application_ID=
powershell -NoProfile -ExecutionPolicy Unrestricted -Command "& { iwr https://deno.land/x/install/install.ps1 -useb | iex }"
%HOMEPATH%\.deno\bin\deno install -qAn vr https://deno.land/x/velociraptor@1.0.1/cli.ts
if %errorlevel%==0 (
    echo BOT_TOKEN= %BOT_TOKEN% >> env
    echo Application_ID=%Application_ID% >> env
    %HOMEPATH%\.deno\bin\vr create
)
else pause