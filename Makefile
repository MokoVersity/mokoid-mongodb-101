PANDOC = pandoc
PANDOC_FLAGS = -s -S --mathjax -f markdown -t dzslides

all: agenda-20140213 agenda-20140220

agenda-20140213:
	$(PANDOC)  $(PANDOC_FLAGS) -o slides/$@.html $@.md

agenda-20140220:
	$(PANDOC)  $(PANDOC_FLAGS) -o slides/$@.html $@.md
