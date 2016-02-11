function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = "SOCKS5 127.0.0.1:1080";
var proxy_no = "DIRECT";
if (shExpMatch(url, "http://ieeexplore.ieee.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://dl.acm.org*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.springer.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.computersinbiologyandmedicine.com*")) { return proxy_yes; }
if (shExpMatch(url, "http://*.sciencedirect.com*")) { return proxy_yes; }
// Proxy anything else
return proxy_no;
}
