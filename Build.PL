use lib "$ENV{HOME}/dev/jsan/perl/Module-Build-JSAN/trunk/blib/lib";
use lib "$ENV{HOME}/dev/jsan/perl/Module-Build-JSAN/trunk/lib";
use Module::Build::JSAN;

my $build = Module::Build::JSAN->new(
    module_name    => 'Test.Simple',
    license        => 'perl',
    dist_author    => 'David Wheeler <david@kineticode.com>',
    dist_abstract  => 'JavaScript testing utilities and harness',
    keywords       => [qw(testing xp tap)],
    recommends     => {
        JSAN       => 0.03,
    }
);

$build->create_build_script;
