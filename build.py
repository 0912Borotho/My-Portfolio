"""Assembles index.html from the files in sections/. Run: python build.py"""
import glob, os
here = os.path.dirname(os.path.abspath(__file__))
read = lambda p: open(p, encoding="utf-8").read()
files = sorted(glob.glob(os.path.join(here, "sections", "*.html")))
head = [f for f in files if "00-head" in f or "10-header" in f]
tail = [f for f in files if "90-footer" in f or "99-scripts" in f]
body = [f for f in files if f not in head + tail]
html = "".join(read(f) for f in head) + "<main>\n" + "\n".join(read(f) for f in body) + "</main>\n\n" + "".join(read(f) for f in tail)
open(os.path.join(here, "index.html"), "w", encoding="utf-8").write(html)
print("Built index.html from", len(files), "section files")
