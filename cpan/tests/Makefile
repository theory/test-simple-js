TESTS=../../tests
ALL_FILES:=$(shell cd $(TESTS); ls index.html *.js)
ALL_HTML=simple.html simpler.html
ALL="$(ALL_FILES) $(ALL_HTML)"

all:
	echo $(ALL)

xall: $(ALL)

# $(ALL_FILES):
# 	ln -s $(TESTS)/$@ > $@
# 
# $(ALL_HTML):
# 	perl -pe 's/\.\.\///' $(TESTS)/$@ > $@
# 
# clean:
# 	rm $(ALL)
