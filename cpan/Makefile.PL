use inc::Module::Install;

all_from 'lib/JS/Test/Simple.pod';

requires 'JS' => '0.14';

clean_files 'tests/*.js tests/index.html tests/simple*.html META.yml';

WriteAll;

