#! /bin/sh
brew install deno
ret=$?
rc=~/.profile
if test $ret -ne 0 ; then
    curl -fsSL https://deno.land/x/install/install.sh | sh
    if [ -f ~/.bashrc ] ; then
        rc=~/.bashrc
    elif [ -f ~/.zshrc ] ; then
        rc=~/.zshrc
    elif ! [ -f ~/.profile ] ; then
        echo "\e[31merror\e[m" 1>&2
        exit
    fi
    echo export DENO_INSTALL="$HOME/.deno" >> $rc
    echo export PATH="$HOME/.deno/bin:$PATH" >> $rc
fi
$HOME/.deno/bin/deno install -qAn vr https://deno.land/x/velociraptor@1.0.1/cli.ts
echo BOT_TOKEN="REPLACE YOUR TOKEN" >> env
echo CLIENT_ID="REPLACE YOUR ID" >> env

echo "please execution 'source $rc'"