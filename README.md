# scholar-pac
A [proxy auto-config (PAC)](https://en.wikipedia.org/wiki/Proxy_auto-config) file for those scholars who are relying on a ssh tunnel to their school/department machine to download publications from those digital libraries purchased by their school/universities.


## Setup ssh config for tunneling

Before setup the ssh tunnel, `man ssh` and `man ssh_config` are highly recommended.

More readings about `ssh` and `ssh_config`:
- [SSH Hacks](http://matt.might.net/articles/ssh-hacks/)
- [Simplify Your Life With an SSH Config File](http://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/)



Do a `vim .ssh/config` to setup a config file for ssh. An example is like below:

    Host tunnel-name
        HostName xxxxxxxxx
        Port 22
        DynamicForward localhost:1080
        ExitOnForwardFailure yes
        TCPKeepAlive yes
        Compression yes
        CompressionLevel 9
        ServerAliveInterval 60
        ServerAliveCountMax 60
        User yourusername

Those options are at your decisions.

## Setup Chrome
There are many options to explore on different operating systems and browsers for proxying. I will give an example on Chrome.

Install [SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en)

Delete those default profiles. Add a new profile and select PAC file, import the PAC file in this repository.
Using a url of this file also works: [https://raw.githubusercontent.com/yishanhe/scholar-pac/master/scholar.pac](https://raw.githubusercontent.com/yishanhe/scholar-pac/master/scholar.pac).
Name this profile and save it.

## Usage
First, start your tunnel `ssh -l -N tunnel-name` (You can use an alias if you find inputing `ssh -l -N` annoying.)
This will run in background.
In case, you can find this process and kill it by `px aux | grep tunnel-name` to get its pid xxxxxx and `kill xxxxxx`.

After turninig on your SwitchyOmega to the profile you previously set, it is all set.

Enjoy it.

Try google `my ip` to test or just go to IEEE explorer to test.

- Sometimes, you need to refresh the targeted page several times such that you can see "purchase"->"download".
- Sometimes, the ssh link may not be stable on celluar tethering. Better turn on compression.

## Accepting Pull Request to updaing the PAC file.
