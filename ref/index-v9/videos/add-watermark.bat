@echo off
REM Burns the "ahamedportfolio" watermark INTO the video files, so it stays even if someone downloads or screen-records them.
REM 1) Install ffmpeg (https://www.gyan.dev/ffmpeg/builds/) and make sure "ffmpeg" works in Command Prompt.
REM 2) Put your ORIGINAL videos in a folder called "originals" next to this file, named reel1.mp4 ... reel7.mp4
REM 3) Double-click this file. Watermarked copies are written to this folder (videos).
REM 4) In js/script.js set  const WATERMARK = false;  (otherwise the website shows the watermark twice).
cd /d "%~dp0"
if not exist originals (echo Create a folder named "originals" here and put reel1.mp4 ... reel7.mp4 in it & pause & exit /b)
for %%f in (originals\*.mp4) do (
  echo Processing %%~nxf
  ffmpeg -y -loglevel error -i "%%f" -vf "drawtext=fontfile='C\:/Windows/Fonts/arialbd.ttf':text='ahamedportfolio':fontcolor=white@0.6:fontsize=h/32:shadowcolor=black@0.7:shadowx=2:shadowy=2:x=w-tw-w/14:y=h-th-h/9" -c:v libx264 -crf 20 -preset veryfast -pix_fmt yuv420p -c:a copy -movflags +faststart "%%~nf.mp4"
)
echo Done.
pause
