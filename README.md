# Mathstep
MathStep is a step by step calculator for mathematical problems.

## Setup

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all the library from requirements.txt.

```bash
pip install -r requirements.txt
```
or
```bash
pip3 install -r requirements.txt
```

###Run the Server
After that completes you can run the app with:

```bash
pip run.py
```
or
```bash
pip3 run.py
```

###Open in the browser

http://127.0.0.1:5000/

####Gotchas

If you run in to the following error:

```bash
Traceback (most recent call last):
  File "run.py", line 1, in <module>
    from webapp import app
  File "/Users/timothysmith/code/web/Open Source/Mathstep/webapp/app.py", line 1, in <module>
    from flask import Flask, render_template
```
You can fix it with:

```bash
pip uninstall flask && python -m pip install flask
```

```bash
pip uninstall flask && python3 -m pip install flask
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
