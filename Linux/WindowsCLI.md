# Windows Command Line Tools

## Network Commands for CMD Prompt

Resources:

- [Windows Command Line Tools 14m - PowerCert Animated Videos](https://www.youtube.com/watch?v=Jfq_BYhxvy0)
- [40 Windows Commands you NEED to know (in 10 Minutes) - NetworkChuck](https://www.youtube.com/watch?v=Jfvg3CS1X3A)
- [Windows Command Line Tools - CompTIA A+ 220-1102 - 1.2 - 24min - Professor Messer](https://www.youtube.com/watch?v=Df2rx7b2tMY)
- [30 Windows Commands you CAN’T live without 14min - NetworkChuck](https://www.youtube.com/watch?v=prVHU1fLR20)

<br/>

Table of Contents:

- [Windows Command Line Tools](#windows-command-line-tools)
  - [Network Commands for CMD Prompt](#network-commands-for-cmd-prompt)
    - [ping](#ping)
    - [tracert](#tracert)
    - [pathping](#pathping)
    - [nslookup](#nslookup)
    - [arp - Address Resolution Protocol](#arp---address-resolution-protocol)
    - [getmac](#getmac)
    - [netstat - Network statistics](#netstat---network-statistics)
    - [route print](#route-print)
    - [ipconfig](#ipconfig)
    - [ipconfig release \& renew](#ipconfig-release--renew)
    - [ipconfig for DNS](#ipconfig-for-dns)
      - [Add DNS to hosts file manually](#add-dns-to-hosts-file-manually)
    - [netsh](#netsh)
    - [netsh advfirewall](#netsh-advfirewall)
  - [Useful system commands](#useful-system-commands)
    - [chkdsk](#chkdsk)
    - [SFC and DISM commands](#sfc-and-dism-commands)
    - [tasklist \& taskkill](#tasklist--taskkill)
    - [clip command](#clip-command)
    - [powercfg](#powercfg)
    - [shutdown](#shutdown)
  - [CMD Prompt File system commands](#cmd-prompt-file-system-commands)

(Monday, May 06, 2024)

### ping

```bash
ping 8.8.8.8

# continuous ping until stopped with CTRL+C
ping -t 8.8.8.8
```

<br/>

### tracert

Trace route/path to specified IP Address

```sh
tracert 8.8.8.8

# Tracing route to dns.google [8.8.8.8]
# over a maximum of 30 hops:
```

<br/>

To not resolve domain names, use `-d` flag (the process will be faster)

```bash
tracert -d 1.1.1.1
```

![](./WindowsCLI/CMDPrompt_tracert.jpg)

<br/>

### pathping

```sh
pathping 8.8.8.8
```

- shows all the hops that it took to reach 8.8.8.8
- then it will ping each router/hop 100 times along the path it took to show statistics of the ping
- note that this will take some time (5 or more minutes...)

![](./WindowsCLI/CMDPrompt_pathping.jpg)

<br/>

### nslookup

Stand for Name Server Lookup

- looks up DNS (Domain Name System) information about a domain
- DNS resolves domain names to ip addresses (e.g. IP Address for example.com is 93.184.215.14)

```sh
nslookup example.com
# Server:  your-IPS-provider-server-name
# Address:  your-IPS-provider-ip-address

# Non-authoritative answer:
# Name:    example.com
# Addresses:  2606:2800:21f:cb07:6820:80da:af6b:8b2c
#           93.184.215.14
```

![](./WindowsCLI/CMDPrompt_nslookup.jpg)

<br/>

### arp - Address Resolution Protocol

- ARP resolves IP Addresses to MAC (physical) addresses
- a PC needs to also know the MAC address of another PC to communicate with (and it will store it in its cache afterwards)
- we can use `arp -a` to check the current PC's ARP Cache

![](./WindowsCLI/CMDPrompt_arp.jpg)

<br/>

### getmac

Get all physical (MAC) addresses associated with current Windows PC

```bash
getmac /v
```

<br/>

### netstat - Network statistics

```sh
netstat -a
```

<br/>

Show which ports are open

```bash
netstat -af
```

Show which Process IDs (PIDs) are associated with the open ports `-o`

```bash
netstat -o
```

Show which Process IDs and Process names are associated with the open ports `b`

```bash
netstat -o -b
```

![](./WindowsCLI/CMDPrompt_netstat.jpg)

<br/>

Show interface statistics on sent/received packets each 5 seconds

```bash
netstat -e -t 5
```

<br/>

### route print

Show routes this Windows PC will take to get to some other computer networks (show the routing table of this PC)

```bash
route print
```

<br/>

We can also manually add routes to customize how our PC will reach a certain network

```bash
# Example to go to 192.168.40.0 network through 10.7.1.44 gateway
route add 192.168.40.0 mask 255.255.255.0 10.7.1.44

cls

route print

# Example to delete a route
route delete 192.168.40.0
```

Note: The above is useful when playing with Docker Containers (and Docker Networks) on a local VirtualMachine

<br/>

### ipconfig

```bash
ipconfig /all
```

```bash
ipconfig /all | findstr DNS
```

![](./WindowsCLI/CMDPrompt_ipconfig.jpg)

<br/>

### ipconfig release & renew

If we want a new (local) IP Address to our Windows PC, we can run the following to ask our DHCP Server (our router) to give us a new IP Address

```bash
ipconfig /release

ipconfig /renew

# we can also specify on which interface we want to renew the ip address
ipconfig /release "Wi-Fi"
```

<br/>

### ipconfig for DNS

We can check all of our associated IP Addresses with their DNS saved in our PC DNS Cache by running

```bash
# Show information on all DNS cached
ipconfig /displaydns

# Automatically copy to clipboard the output of command
ipconfig /displaydns | clip
```

<br/>

Flush/Remove all DNS Cache entries stored in this Windows PC

```bash
ipconfig /flushdns
```

<br/>

#### Add DNS to hosts file manually

https://4it.com.au/kb/article/how-to-add-a-dns-entry-manually-to-a-windows-computer/

Go to

```
C:\Windows\System32\drivers\etc
```

Open hosts file with a text editor (e.g. sublime text, notepad++, visual studio code, etc)

```bash
notepad C:\Windows\System32\drivers\etc\hosts

code C:\Windows\System32\drivers\etc\hosts
```

Add the new DNS entry by appending a line

```
127.0.0.1 kubernetes.docker.internal
```

<br/>

### netsh

Get a HTML report on all the Wi-Fi information and Wi-Fi events from the last three days and groups them by Wi-Fi connection sessions.

```bash
netsh wlan show wlanreport
```

<br/>

Show information (state: connected/disconnected) on connection interfaces

```bash
netsh interface show interface
```

<br/>

Show interfaces configurations

```bash
netsh interface ip show address
```

<br/>

Show DNS Servers

```bash
netsh interface ip show dnsservers
```

<br/>

### netsh advfirewall

Turn off/on Windows Defender Firewall

```bash
netsh advfirewall set allprofiles state off

netsh advfirewall set allprofiles state on
```

![](./WindowsCLI/CMDPrompt_netsh_advfirewall.jpg)

<br/>

## Useful system commands

### chkdsk

Check disk errors

```bash
chkdsk /f
```

Check disk errors on physical sector

```bash
chkdsk /r
```

<br/>

### SFC and DISM commands

SFC - System File Checker scans the OS files and repairs them if they are corrupted (includes DLL files)

- SFC repairs corrupted files within operating system by using a copy of windows called "system image" (if the "system image" is corrupted too, SFC won't be able to fix the files)

```bash
sfc /scannow

# Verification 100% complete.
# Windows Resource Protection did not find any integrity violations.
```

DISM - Deployment Image Servicing and Management tool

- If System File Checker has found corrupted files and the repair was not successful (`Windows Resource Protection found corrupt files but was unable to fix some of them` after running `sfc /scannow`)
- DISM command will repair the system image (it will fetch it from the Internet)
- Then we can run `sfc /scannow` again

```bash
dism /online /cleanup-image /scanhealth
dism /online /cleanup-image /restorehealth

# Deployment Image Servicing and Management tool
# Version: 10.0.19041.3636

# Image Version: 10.0.19045.4291

# [==========================100.0%==========================]
# The restore operation completed successfully.
# The operation completed successfully.

sfc /scannow
```

<br/>

### tasklist & taskkill

```bash
tasklist

Image Name                     PID Session Name        Session#    Mem Usage
========================= ======== ================ =========== ============
System Idle Process              0 Services                   0          8 K
System                           4 Services                   0      7,072 K
Secure System                  104 Services                   0     58,140 K
```

Find by program name

```bash
tasklist | findstr firefox
```

Kill task by PID

```bash
taskkill /f /pid 15532
```

Kill task by nanme

```bash
taskkill /f /IM firefox.exe
```

<br/>

### clip command

We can copy to clipboard the output of a command by piping a `clip` command

```bash
# Show information on all DNS cached
ipconfig /displaydns

# Automatically copy to clipboard the output of command
ipconfig /displaydns | clip
```

<br/>

### powercfg

Check any energy or power issues with the current Windows PC/Laptop

```bash
powercfg /energy

# Enabling tracing for 60 seconds...
# Observing system behavior...

# Energy efficiency problems were found.

# 6 Errors
# 6 Warnings
# 41 Informational

# See C:\WINDOWS\system32\energy-report.html for more details.
```

```bash
powercfg /batteryreport

# Battery life report saved to file path C:\WINDOWS\system32\battery-report.html

# Note: The above file path can pe run directly in CMD Prompt
```

<br/>

### shutdown

(Tuesday, May 07, 2024)

Restart the Windows PC on BIOS mode by using the `/r` `/fw` `/f` `t` switches (for no more spamming of F2/F10/F11/F12 when rebooting)

```bash
shutdown /r /fw /f /t 0
```

Note: It is also useful for enabling virtualization from BIOS.

Other resources on this:

- https://superuser.com/questions/1809071/shutdown-client-via-cmd-and-enter-boot-menu Check `Start -> Run -> "msconfig"`
- https://asmed.com/msconfig-2/

<br/>

## CMD Prompt File system commands

Resource: [Windows Command Line Tools - CompTIA A+ 220-1102 - 1.2 - 24min - Professor Messer](https://www.youtube.com/watch?v=Df2rx7b2tMY)
