.PHONY: all clean

TESTS=../../tests
ALL_FILES:=$(shell cd $(TESTS); ls index.html *.js)
ALL_HTML=simple.html simpler.html
ALL=$(ALL_FILES) $(ALL_HTML)

all: $(ALL)

$(ALL_FILES):
	ln -fs $(TESTS)/$@ > $@

$(ALL_HTML):
	perl -pe 's/\.\.\///' $(TESTS)/$@ > $@

clean:
	rm $(ALL)
