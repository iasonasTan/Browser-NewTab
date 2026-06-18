# Je Home Page

That a browser home page minimal alternative.
It's configured for me but changing things it's very easy even for someone with not experience in coding.

## Changing the background image.

Changing the background image is very simple, just replace `bg.jpg` with your own image but it must be named `bg.jpg` too, so basically you to to `res` folder, delete old `bg.jpg` and put your own image named `bg.jpg`.

## Changing app sortcuts is a little harder but I'm sure you can do it.

To change the app links you just have to open `index.html` file.
In the code you'll find something that contains links like 'instagram.com' or 'claude.ai'.
Now, you can just add a new line inside of `[ ]` that looks like this `"yoururl.com",`.

## Changing util apps.

That seems complicated but it's not.
So, basically, in programming we usually count things in lists starting at `0`, so you can go in a line that looks like this `const utils_idxs = [2, 7, 8, 9];` and _just add number seperated by commas_ inside of `[ ]`.

## How to acually use it as new tab?

If your browser supports changing the 'new tab' url, things are very easy, you can just change the url to 'index.html' of the project

**BUT**

if your browser dosn't have this setting, then you have to make a home server that runs locally and set `http://localhost:XX' as url propably via an extension.

# How to do this?
You can do this using darkhttpd (linux):
1. Install darkhttpd using your package manager (see commands below).
2. Setup a command. Open a terminal and type `darkhttpsd /path/to/browser-newtab/ --port 8080`
4. Test the command, open your browser and enter `http://127.0.0.1:8080/`
5. Install NewTabOverride extension on your browser and set the above URL as new and home tab url.

```bash
sudo pacman -S darkhttpd # Manjaro/Arch
sudo apt install darkhttpd # Debian/Ubuntu
sudo dnf install darkhttpd # Fedora
```

That's the default style of the page:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/3f325713-4884-457e-b5a5-1e51144b3a7d" />
