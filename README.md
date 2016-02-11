# scholar-pac
A PAC file for those scholars who are relying on a ssh tunnel to their school/department machine to download publications from those digital libraries.


## setup config file for ssh tunnel

Before setup the ssh tunnel, `man ssh` and `man ssh_config` are highly recommended.

More readings: [SSH Hacks](http://matt.might.net/articles/ssh-hacks/) and [Simplify Your Life With an SSH Config File](http://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/)



Do a `vim .ssh/config` to setup a config file for ssh. An example is like below:

    Host tunnel-name
        HostName xxxxxxxxx
        Port 22
        DynamicForward localhost:1080
        ExitOnForwardFailure yes
        TCPKeepAlive yes 
        Compression yes
        CompressionLevel 9
        User yourusername

You can setup up more options at your decisions.

## setup Chrome

Install [SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en)

Delete default profiles.
Add a new profile and select PAC file, import the PAC file in this repository.
A url also works as [xxx](xxx)
Then you are done.

## Usage
First, start your tunnel `ssh -l -N tunnel-name` (You can use an alias if you find inputing `-l -N` annoying.)
This will run in background. You can find this process and kill it if you want. `px aux | grep tunnel-name` to get its pid xxxx and `kill xxxx`.

Then turn on your SwitchyOmega. It is all set.

Enjoy it.

Try google `my ip` to test or just go to IEEE explorer to test.

Sometimes, you need to refresh the targeted page several times.






  

