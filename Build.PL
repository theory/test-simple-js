use Module::Build::JSAN;

# Delete generated files in realclean.
my $class = Module::Build::JSAN->subclass(code => <<'EOF');
    sub ACTION_realclean {
        my $self = shift;
        $self->SUPER::ACTION_realclean();
        $self->delete_filetree($_) for 'MANIFEST',  $self->metafile;

    }
EOF

$class->new(
    module_name    => 'Test.Simple',
    license        => 'perl',
    dist_author    => 'David E. Wheeler <david@justatheory.com>',
    dist_abstract  => 'JavaScript testing utilities and harness',
    keywords       => [qw(testing xp tap)],
    recommends     => {
        JSAN       => 0.03,
    },
    meta_merge     => {
        resources => {
            homepage    => 'http://github.com/theory/test-simple-js/',
            bugtracker  => 'http://github.com/theory/test-simple-js/issues/',
            repository  => 'http://github.com/theory/test-simple-js/tree/'
        }
    },
)->create_build_script;
