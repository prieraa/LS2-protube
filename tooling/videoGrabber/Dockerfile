# Self-contained image for the videoGrabber tool: Python + yt-dlp + ffmpeg/ffprobe + Deno
# (JS runtime yt-dlp needs to solve YouTube's player challenges).
#
# Build (from repo root):  docker build -t protube-videograbber tooling/videoGrabber
# Run   (from repo root):  see "Video grabber > Docker" in the root README.md, or `docker compose run --rm videograbber`

FROM denoland/deno:bin AS deno

FROM python:3.12-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends ffmpeg ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --from=deno /deno /usr/local/bin/deno
RUN deno --version && ffmpeg -version | head -n 1

# yt-dlp is installed unpinned on purpose: YouTube breaks old releases often, so each image rebuild picks up the latest.
# [default] pulls in yt-dlp-ejs and the optional deps listed in dependencies.txt (brotli, websockets, mutagen...).
RUN pip install --no-cache-dir --upgrade "yt-dlp[default]"

WORKDIR /app
COPY main.py .

# vars.py is per-developer (host paths), so the image ships its own with the binaries on PATH.
RUN printf 'YT_DLP_BIN = "yt-dlp"\nFFMPEG_BIN = "ffmpeg"\nFFPROBE_BIN = "ffprobe"\n' > vars.py

# /store: output folder (bind-mount the host ENV_PROTUBE_STORE_DIR here)
# /videos: folder containing video_list.txt (bind-mount resources/ here)
VOLUME ["/store"]

ENTRYPOINT ["python", "-u", "main.py"]
CMD ["--store=/store", "--id=10", "--recreate", "--videos=/videos/video_list.txt"]
