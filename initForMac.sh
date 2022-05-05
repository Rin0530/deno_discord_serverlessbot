brew install deno
ret=$?
if test $ret -ne 0 ; then
    curl -fsSL https://deno.land/x/install/install.sh | sh
    deno_path=$HOME/.deno/bin/deno
else 
    deno_path=$(which deno)
fi


if test $SHELL = "/bin/bash" ; then
    rc=~/.bashrc
elif test $SHELL = "/bin/zsh" ; then
    rc=~/.zshrc
else 
    rc=~/.profile
fi

echo export DENO_INSTALL="$HOME/.deno" >> $rc
echo export PATH="$HOME/.deno/bin:$PATH" >> $rc

$deno_path install -qAn vr https://deno.land/x/velociraptor@1.0.1/cli.ts > /dev/null 2>&1
echo BOT_TOKEN="REPLACE YOUR TOKEN" >> env
echo CLIENT_ID="REPLACE YOUR ID" >> env

echo "please execution 'source $rc'"