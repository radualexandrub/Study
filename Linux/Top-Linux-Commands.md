**The Most Popular Linux & Terminal Commands**

See the tutorial on "WSL Tutorial and Basic Linux commands" first:

- [Install Windows Subsystem for Linux (WSL) and Learn these first basic Linux commands](./WSL-Tutorial-and-Linux-Commands.md)
- [The Linux commands Handbook](https://www.freecodecamp.org/news/the-linux-commands-handbook)

<br/>

Notes taken from:

- [The 50 Most Popular Linux & Terminal Commands - freeCodeCamp, 5h Course](https://youtu.be/ZtqBQ68cfJc)

<br/>

Table of Contents:

- [Basic Linux Commands](#basic-linux-commands)
	- [touch, echo, cat, head, tail, less](#touch-echo-cat-head-tail-less)
	- [mkdir, rmdir, rm](#mkdir-rmdir-rm)
	- [split](#split)
	- [ls, cd, open](#ls-cd-open)
	- [mv, cp](#mv-cp)
	- [wc](#wc)
- [Piping commands](#piping-commands)
- [Expansions](#expansions)
- [Searching and Sorting](#searching-and-sorting)
	- [sort](#sort)
	- [uniq](#uniq)
	- [find](#find)
	- [ack](#ack)
	- [grep](#grep)
- [Disk usage commands](#disk-usage-commands)
	- [du](#du)
	- [df](#df)
- [history](#history)
- [Processes](#processes)
	- [ps, htop](#ps-htop)
	- [kill](#kill)
	- [killall](#killall)
	- [jobs, bg, fg](#jobs-bg-fg)
- [gzip, tar](#gzip-tar)
- [xargs](#xargs)
	- [xargs multiple commands](#xargs-multiple-commands)
	- [More xargs examples](#more-xargs-examples)
- [Permissions](#permissions)
	- [chmod](#chmod)
	- [Making a bash script executable](#making-a-bash-script-executable)

<br/>

<br/>

**Bash Shortcuts**

Most used shortcuts in bash (More [here](https://www.makeuseof.com/linux-bash-terminal-shortcuts/)):

- `CTRL+R` - search through commands history - based on your before-used commands, you can re-run a command by searching part of it (`history`)
- `CTRL+A` / `CTRL+E` - while you write a command, `CTRL+A` will move your cursor to the start of the command line, `CTRL+E` will move your cursor to the end
- `Ctrl+U` - Deletes before the cursor until the start of the command
- `CTRL+L` - clears the command line (`clear`)
- `Ctrl+D` - Closes the current terminal

Bash Control/Processes

- `Ctrl+S` - Stops command output to the screen
- `Ctrl+C` - Sends SIGI signal and kills currently executing command
- `Ctrl+Z` - Suspends current command execution and moves it to the background
- `Ctrl+Q` - Resumes suspended command

<br/>

**Bash Manual**

Each argument given to `man` command is normaly the name of the program, utility or function, then the information/documentation about that is displayed.

```bash
man man
man bash
man <command>
man git
man gcc
man python3
```

An alternative to `man` is `tldr` (as in "too long didn't read") command, that only lists some direct/command examples of using the specified command:

```bash
sudo apt install tldr
```

![](./Top-Linux-Commands-imgs/man01.jpg)

![](./Top-Linux-Commands-imgs/man02.jpg)

<br/>

# Basic Linux Commands

## touch, echo, cat, head, tail, less

Create files with `touch` - Note that `touch` is mainly used to alter the "modified" timestamp of a file:

```bash
touch myfile.txt

# You can create multiple files
nano file1.txt markdownFile.md script.py
```

(More on Nano here: [The 50 Most Popular Linux & Terminal Commands - 3h23m48s](https://youtu.be/ZtqBQ68cfJc?t=12228))

You can create and edit files with `nano` editor (after entering nano editor, you will have multiple options like "save" `CTRL+O`, or "exit" `CTRL+X`):

```bash
nano hello.py
```

You can also create a file with content already in it by using `echo "your_string"` and direct the content to the file using `>` operator (redirect standard output):

```bash
echo "This is my text file" > myfile.txt
echo "print("hi there")" > hi.py
python3 hi.py
```

You can also add content to the bottom of a file that already has content in it (append more content to end of file) by using `>>` operator. Note: you can also view the content of a file using `cat file.txt`

```bash
echo "My first text line" > myfile.txt
echo "My second text line on the same file" >> myfile.txt
cat myfile.txt

# will output
# My first text line
# My second text line on the same file
```

```bash
# Concatenate multiple files with cat
cat butcher.txt groceries.txt > shoppingList.txt

# Show line numbers with cat
cat -n pythonScript.py
```

- We can print current date and time with `date` (`man date`)

```bash
date
# will print Tue 10 May 2022, 21:44:47 +0300

date > today.txt
```

Both `>` and `>>` operators create a file if the mentioned file is not existent in current folder (https://linuxhint.com/difference-arrow-double-arrow-bash/), and:

- `>` redirect standard output operator overwrites anything in a file
- `>>` appends to the existing file

<br/>

Note: You can see the content of a file by using `cat`. Or, you can see the first 10 lines of a files by running `head` command (`head myfile.txt`), and if you want to see the last 10 lines from a file, run `tail` (`tail myfile.txt`). There are also `more` and `less` commands in order to see the content of a file "page by page" (`more myfile.txt`) or line by line (`less myfile.txt`).

```bash
# Show the first 100 lines of a file
head song_lyrics.txt -n 100

# Show the last 50 lines of a file
tail scripts.sh -n 50
```

With `less` command, we also find strings by writing `/mysearchedstring` while we have a file opened:

```bash
less myfile.txt
# press / and search your string
```

<br/>
<br/>

You can also use other text editor like `gedit`, or `vim` (that is almost used as an IDE) - you can run `vimtutor` command for a complete `vim` editor walkthrough.

```bash
vim myfile.txt
```

With `touch` (`man touch` for manual) we can manipulate the "modified" timestamp of files. Here we can mention the timestamp in any way we want, even as "2 hours ago" (with `-d` flag).

```bash
touch -d "09:00" myfile.txt
touch -d "2 hours ago" myfile.txt
touch -d "2022-02-24 13:23:40" myfile.txt
touch -d "next Wednesday" myfile.txt
touch -d "last Monday" myfile.txt
touch -d "last Thursday 16:21:32" myfile.txt
touch -d "Sun, 29 Feb 2020 16:21:42" myfile.txt
touch -d '1 June 2018 11:02' file1

# you can also touch multiple files
touch myfile1.txt myfile2.txt myfile3.txt
```

<br/>

## mkdir, rmdir, rm

- To create a directory/folder:

```bash
mkdir myfolder
```

- To remove a directory/folder that is not empty (if is not empty, will receive error: `rmdir: failed to remove 'ubuntu/': Directory not empty`):

```bash
rmdir myfolder
```

- To remove a directory that has files in it (Use `rm` with caution! ⚠⚠⚠) - `-r` stands for `recursive`, `remove directories and their contents recursively`

```bash
rm -r myfolder
```

- To create a directory within a directory (`-p, --parents - make parent directories as needed`):

```bash
mkdir -p mydir/mysubdir
cd mydir/mysubdir
```

- To remove a directory that has files in it (Use `rm` with caution! ⚠⚠⚠) - `-r` stands for `recursive`, `remove directories and their contents recursively`

```bash
rm -r myfolder
```

- You can also delete multiple files with `rm`

```bash
rm file1.txt file2.txt file3.md
```

- Delete all JPG files in the current folder

```bash
rm *.jpg
```

<br/>

## split

Split large (text) files into smaller files (default is 1000 lines per file). This is useful when we have a huge log file (that contains millions of lines of logs) and we want it to be split in several files that contains around 100,000 (or 200,000) lines in order to be opened by a text editor without freezing our PC (eg. with Notepad++ we can make operations such as highlighting and complex searching).

The base syntax is: `split [options] <name_of_file> <prefix_for_new_files>`.

- Split a large text file into smaller files with 2000 lines each

```bash
split -l 2000 ./logfile.log logfile_
```

![](./Top-Linux-Commands-imgs/split01.jpg)

- Split a file and add both a prefix and suffix (such as `.log` extension) to each new subfile

```bash
split -l 2000 ./logfile.log logfile_ --additional-sufix=".log"

# and if you want to delete the created files after
rm logfile_*.log
```

![](./Top-Linux-Commands-imgs/split02.jpg)

- Split using digits/numeric suffix (`-d`) for file incrementation instead of letters/alphabetic.

```bash
split -l 10000 ./logfile.log log_ --additional-suffix=".log" -d

# Optionally, move the new subfiles into a new folder
mkdir logsplit
mv log_*.log ./logsplit
cd ./logsplit

# And now you can grep through them and open only
# the file of interest that matched your string pattern
grep -rnia ./ -e "ERROR_NAME"
```

![](./Top-Linux-Commands-imgs/split03.jpg)

🟢 Note, if you want to split by file size (each separate file will have a defined file size in KB or MB), we use `-b (bytes)` option instead of `-l (lines)`:

```bash
# This will output 100KB files
split -b 100k ./logfile.log log_ --additional-suffix=".log" -d

# This will output 100MB files
split -b 100m ./logfile.log log_ --additional-suffix=".log" -d
```

<br/>

## ls, cd, open

- To see current directory you're in, write `pwd` (print working/current directory):

```bash
pwd
```

- To list/view all the files within a folder, eg use flags to see detailed view (`man ls`):

```bash
ls
ls ./myfolder/mysubfolder
ls /pathFromRoot/to/folder

ls -lah
```

`ls` flags:

- `-a, --all` - do not ignore entries starting with . (hidden files)
- `-l` - use long listing format (display as list with 1 file and its details per row)
- `-h` - human-readable, print sizes like 1K, 234M, 2G, etc
- `-d, --directory` - list only directories
- `-c` - used with `-lt`, sort by ctime (time of last modification)
- `-C` - list entries by columns
- `--sort` - sort by WORD instead of name, eg `size (-S)`, `time (-t)`, `version (-v)`, `extension (-X)`

For example, to sort files by size within a folder, run `ls --sort=size -lah` ("sort by size").

Note: Instead of using `ls -la`, you can directly write `ll` (double "L") for the same effect. For human readable sizes, use you can `ll -h` instead of `ls -lah`. `ll` is a predefined alias for `ls -alF` (at least on Ubuntu/Mint/Zorin/other derivates).

```bash
ll

# sames as
ls -la
```

```bash
type ll
# ll is aliased to `ls -alF'
```

You can edit (permanently) this alias further to `ls -alFh` (for human-readable). Just search and modify the alias in the `~/.bashrc` file (bash script that is executed every time the system boots).

```bash
nano ~/.bashrc

# press CTRL+W to search for "alias ll"
```

![](./Top-Linux-Commands-imgs/ls01.jpg)

<br/>

- To navigate to a folder within current path (`ls`), use "change directory" with `cd`. To go to the previous folder use `cd ..`, to go to previous previous directory `cd ../..` (go 2 levels back) and so on.

```bash
cd mydir/myotherdir
cd ..
cd ../..
```

<br/>

- To open files with your current File Explorer/Applications (in your Desktop Environment), use `xdg-open` command (For MacOS we can just use `open`). If `xdg-open` is not installed, run `sudo apt install xdg-utils` (Debian).

```bash
xdg-open filename.txt
xdg-open folder_name

# open current directory in Finder/Dolphin/File explorer etc
xdg-open .
```

<br/>

## mv, cp

(Tuesday, 10 May 2022)

- Move a file to another location (`man mv`, `mv /path/to/sourcefile /path/to/targetlocationfile`)

```bash
mv hi.py ../hi.py  # move one folder up
mv ../hi.py ./hi.py  # move file from one folder up to current folder/path

# You can also move multiple files (ex. within a directory)
mv file1 file2 file3 DestFolder/
```

<br/>

- Changing filenames (renaming files) are also done with `mv`

```bash
mv currentFileName.txt newFileName.txt
mv hi.py hello.py
```

<br/>

- Copy files (either in same location, or other locations, with/withourt different names, etc) with `cp`

```bash
cp file_2.txt file_3.txt
cp hello.py ../hello2.py

# to copy a folder that has files in it
cp -r folder folder_copy

# If folder does not exist
cp hello.py /v2/hello.py  # cp: cannot create regular file '/v2/hello2.py': No such file or directory
mkdir -p ./v2 && cp hello.py $_
```

https://stackoverflow.com/questions/1529946/linux-copy-and-create-destination-dir-if-it-does-not-exist

Copy all `.txt` files from a folder into another foder:

```bash
mkdir ./random/texts_folder
cp -rv ./random/*.txt ./random/texts_folder
```

<br/>

Also, `cp` is often used for backups

```bash
cp file_2.txt{,.bkp}

cp hello.py{,.bkp}
cp hello.py hello.py.bkp #  the equivalent command
```

<br/>

## wc

- Word Count: Find number of lines, words and bytes of a file (`man wc`)

```bash
wc LongTextFiles.txt
# 1757 15767 87022
# lines words bytes
```

```bash
echo -e "cat\ndog\nmouse\nrabbit\nfish" | wc -l
# 5 lines
```

Note: The `echo -e` option enables interpretion of backslash, meaning `/n` will tell echo to write each string to a new line.

<br/>

# Piping commands

We can take the output of a command, and pass it as an input to another command. Examples:

- Find how many words are in a string

```bash
echo "How many words are here" | wc
# 1 line, 5 words, 24 bytes

echo "Hello" > greeting.txt
echo "How are you?" >> greeting.txt
wc -l greeting.txt
# 2 lines
```

- Count the number of files by piping ls and wc (Note that `ls -l | wc -l` will count _number of files + 1_ because `ls -l` will also add a line of size in kbytes... or we can just print the number of lines in wc command `ls | wc -l`)

```bash
ls | wc -l

ls /etc | echo "There are $(wc -l) files"

# include/count hidden files as well
ls -a | wc -l
```

- Combine content of 2-3-4 files and count number of lines

```bash
cat appliances.txt groceris.txt | wc -l

cat server1.log server2.log server3.log | wc -l
```

<br/>

# Expansions

Note that in Linux, some strings are interpreted as other strings (just like aliases or hotstrings). For example, whenever we write `~` it is expanded to `/home/username` path.

```bash
echo ~
# will print /home/username
```

We can also see some popular Environment Variables (variables in bash start with `$`).

Another example is `*`, that is an expansion to every filename in current directory (`pwd`). And, we can also narrow down to `*.txt` (shows every filename that matches with `.txt` at end). Other use-case of using `*` alias, is listing all files that ends with an extension: `ls -lah *.txt`.

```bash
echo $USER
echo $SHELL
echo $PATH
```

![](./Top-Linux-Commands-imgs/expansions01.jpg)

<br/>

Another useful alias is `?` (question mark), that matches every single character. Two `??` will match two any-characters in a row, three `???` will match 3 characters and so on.

```bash
# example: match any filename that ends with an extension of exactly 2 characters
ls -lah *.??
```

![](./Top-Linux-Commands-imgs/expansions02.jpg)

<br/>

Another extension is use of curly braces `{}`, where bash will expand to the values within curly braces (separated by `,` comma).

```bash
echo {a,b,c}.txt
# a.txt b.txt c.txt

echo a{d,c,b}e
# ade ace abe

touch app.{html,css,js,py}
# will create 4 files: app.html app.css app.js app.py
ls app.*
# app.css app.html app.js app.py
```

We can also expand into ranges, like `{1..10}`, or `{a..z}`.

```bash
echo {1..10}
# 1 2 3 4 5 6 7 8 9 10

echo file{01..05}.txt
# file01.txt file02.txt file03.txt file04.txt file05.txt

touch file{01..10}.txt
# will create 10 files
```

```bash
echo {Z..A}
# Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
```

More on expansions here: https://linuxcommand.org/lc3_lts0080.php

<br/>

# Searching and Sorting

## sort

[The 50 Most Popular Linux Commands - 1h56min](https://youtu.be/ZtqBQ68cfJc?t=7016)

- We can sort the lines from a file. Note that `sort` will not change the content of file, it will just print to console. `sort` is also case sensitive, use `sort -f` to ignore case.

```bash
sort file.txt

sort file.txt > file_sorted_lines.txt
```

![](./Top-Linux-Commands-imgs/sort_00.jpg)

- Sort lines numerically in files that contains numbers (by default is not doing a numeric sort). We can also use `sort -nu` to get only the unique numbers (get lines/numbers without repetition)

```bash
sort -n nums.

sort -nur nums.txt # -r option to sort in reverse order
```

More on `sort` here: https://www.geeksforgeeks.org/sort-command-linuxunix-examples/

![](./Top-Linux-Commands-imgs/sort_01.jpg)

- We can also pipe the content of files into sort

```bash
cat logsWithTimestamps01.log logsWithTimestamps02.log | sort

cat logsWithTimestamps01.log logsWithTimestamps02.log | sort > allLogsSorted.log
```

- Sort by second/third column (eg. alphabetically or numerically `-n`) using `-k <column_number>` option

```bash
sort -gk 2 shopping.txt

sort -nrk 3 employees.txt
```

![](./Top-Linux-Commands-imgs/sort_02.jpg)

See more about sorting floating point numbers (`general sorting`) here: https://unix.stackexchange.com/questions/459257/how-to-sort-lines-by-float-number.

<br/>

## uniq

If we have a text files that has duplicated lines, we can use `uniq` to print out the content of that file without adjacent duplicates lines (consecutive duplicated lines one after another):

```bash
uniq logs.log
```

If we want to remove all duplicated lines, we can use `uniq` in combination with `sort`:

```bash
sort langs.txt | uniq

# this is same as running sort -u langs.txt
sort -u langs.txt
```

However, if we only want to show us the dupliacated in a file, we can run `sort langs.txt | uniq -d`. And if we want only the lines that appear once (non-duplicates), we can run `sort langs.txt | uniq -u`.

![](./Top-Linux-Commands-imgs/sort_03.jpg)

And, if we want to count how many times each line is repeating, we can use the count option: `sort langs.txt | uniq -c`. And we can even sort that numerically:

```bash
sort flavours.txt | uniq -c | sort -n
```

![](./Top-Linux-Commands-imgs/sort_04.jpg)

<br/>

## find

[The Most Popular Linux Commands: find - 2h21m](https://youtu.be/ZtqBQ68cfJc?t=8470)

To find files in the entire system (`/` - the root directory) or in current path (`.`) and folders inside (recursively), we can use `find` (`man find`) - it will output the path(s) to the searched file:

```bash
find path_name

find / -name "host.conf"
find . -name "docker-compose.yml"
```

- We can find files based on filename, modification time, file type / directory, size, etc.

```bash
# show all .py files in current path and folders inside (recursively)
find . -name "*.py"  # same as ls *.py

# find a file that has the exact math of "myfile.txt"
find /path/to/a/folder -name "myfile.txt"

# find by type
find . -type d  # eg find all directories (d)
find . -type f  # find only files, not directories
```

- Note that `find some/path -name` is case-sensitive. For case insensitive we use `-iname`

```bash
find . -type d -name '*new*'  # find all directories that contain 'new' in their name
find . -type d -iname '*new*'  # find all directories that contain 'new' or 'New' in their name
```

- We can also use `-or` operator:

```bash
# eg Find directories under the current tree matching name "node_modules" or "public"
find . -type d -name "node_modules" -or -name "public"
```

- We can also exclude a path with `-not` when searching for a file:

```bash
find . -name "*.md" -not -path "node_modules"
```

More examples:

- Search for files that have more than 100 characters (bytes) in them:

```bash
find . -type f -size +100c
```

- Search files bigger than 100KB but smaller than 2MB:

```bash
find . -type f -size +100k -size -2M
```

- Search files edited more than 3 days ago, or edited in the last 24hours

```bash
find . -type f -mtime +3
find . -type f -mtime -1
```

<br/>

With the found files, youn can run another command on them with `-exec` (just like piping, however piping is not supported with `find` command, you can't run something like `find -name "F*.txt" | ls -lah`, but instead you can run `find -name "F*.txt" -exec ls -lah \;`). Note that every command after `-exec` should end with `\;`

- List with details all the files edited in the last 24hours:

```bash
find . -type f -mtime -1 -exec ls -lah {} \;
```

- See all the content from the found files with `cat` (Note that `{}` is filled/replaced with the file names at execution time)

```bash
find . -name "*.py" -exec cat {} \;  # {} will be replaced with "file1.py file2.py" etc
```

![](./Top-Linux-Commands-imgs/find_01.jpg)

<br/>

## ack

To search for strings inside files (and output their path), use `ack` (`man ack`), is just as powerful, but easier than `grep`. Note, it is possible that `ack` needs to be installed (`sudo apt install ack` for Debian based distros).

```bash
ack -i 'stringpattern'

# or grep equivalent
grep -rni '/path/to/somewhere/' -e 'stringpattern'
# -r or -R is recursive
# -n is to show line number in file
# -w stands for match the whole word
# -l (lower-case L) can be added to just give the file name of matching files (show the file name, not the result itself)
# -e is the pattern used during the search
# -i for ignore case
```

https://stackoverflow.com/questions/16956810/how-do-i-find-all-files-containing-specific-text-on-linux

<br/>

## grep

(Sunday, May 22, 2022)

[The Most Popular Linux Commands: grep - 2h32m](https://youtu.be/ZtqBQ68cfJc?t=9145)

`grep` (global regular expression print) is used to search for text inside files.

- Show the lines (with the line number `-n`) that contains the searched word:

```bash
grep -n Sarah employees.txt

# see some Context related to found words (eg show 2 before and 2 lines after)
grep -nc 2 Sarah employees.txt
```

- Search recursively in current directory (in all nested subdirectories) with `-r` and case-insensitive with `-i`

```bash
grep -ri "hello"
```

![](./Top-Linux-Commands-imgs/grep_01.jpg)

<br/>

To use regular expressions in grep, we need to use `-E` flag ("Extended regular expressions", by default it's using `-G` for basic regex)

```bash
# Search by emails in all files in current directory
grep -rE -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" .
```

![](./Top-Linux-Commands-imgs/grep_02.jpg)

<br/>

Some other random examples of using grep:

- If command history was not erased, you can run something like `history | grep "sudo apt install"` and see everything you installed so far on your Linux machine

```bash
history | grep "sudo apt install" > installed_apps.txt

# or if you want to save to a file without line numbers
history -w history.txt
grep "sudo apt install" history.txt > history.txt
```

![](./Top-Linux-Commands-imgs/grep_03.jpg)

<br/>

- If grep returns something like `Binary file ./app_logs/server_logs.log matches` instead of the line containing the searched word, we need to add the `-a` flag:

```bash
grep -rnia ./app_logs -e "Request failed"
```

<br/>

- If we need to see the lines above or below the line that contains the searched string, we need to use (in front of all the other flags) the `-A` (for after) and/or `-B` (for before) flags. We can also use the `-C` flag (for Context) to show both before and after lines.

```bash
# get the lines that contains "OutOfMemoryError" string
grep -rnia ./ -e "OutOfMemoryError"

# show the 4 lines before every line that contains "OutOfMemoryError" string
grep -B 4 -rnia ./ -e "OutOfMemoryError"

# show the 4 lines that comes after every line that contains "OutOfMemoryError" string
grep -A 4 -rnia ./ -e "OutOfMemoryError"
```

<br/>

# Disk usage commands

## du

- Find size of files and directories (`-h` option for human-readable file sizes)

```bash
du -h .  # will show all the sizes of directories within current path tree
```

- We use `-a` if we want to show file sizes too (not just directories)

```bash
du -ah .
```

- And we if want to see all directories (and files with `-a`) "sort by size", we can pipe the command with `sort`

```bash
du -ah | sort -h

# we can also use
ls --sort=size -lahr

# and if we want top 5 largest files
ls --sort=size -lahr | tail -n 5

# or top 10 largest files using du (and reversing the list)
du -ah | sort -hr | head
```

![](./Top-Linux-Commands-imgs/du_01.jpg)

![](./Top-Linux-Commands-imgs/du_02.jpg)

<br/>

## df

- `df` is used for **mounted** disk usage (like "partitions" on Windows OS) information (is not about files/directories in the mentioned/current path) - `-h` for human-readable sizes.

```bash
df -h
```

See the disk usage of the filesystem (like a "partition" but not really) where `~/Desktop` is located

```bash
df -h ~/Desktop

# will prind something like
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda5       439G   39G  378G  10% /
```

<br/>

# history

(Monday, May 23, 2022)

[The Most Popular Linux Commands: history - 2h44m](https://youtu.be/ZtqBQ68cfJc?t=9853)

The `history` command shows a list of the commands entered since you started the session. You can replay any command from history by using a command such as: `!3` (with exclamation mark and history id from history list, like `!command_id_from_history`)

```bash
history
history | less

!145 # runs command 145 from history list
```

You can also search through history by piping `grep`:

```bash
# See all apt installs
history | grep "sudo apt install"

# See all commits made
history | grep "git commit"

# View compiled C files with gcc or ran/interpreted with Python3
history | grep "gcc"
history | grep "python3"

# View all .txt files edited in vim (or nano)
history | grep -E "vim.*txt"
```

<br/>

**CTRL+R shortcut**

However, another way to get to this search functionality is by typing `Ctrl+R` to invoke a recursive search of your command history. After typing this, the prompt changes to:

```bash
(reverse-i-search)`':
```

Now you can start typing a command, and matching commands will be displayed for you to execute by pressing Return or Enter, or keep pressing `CTRL+R` until you find the match you want.

<br/>

**Erasing history**

From https://opensource.com/article/18/6/history-command: If you want to delete a particular command, enter `history -d <line number>`. To clear the entire contents of the history file, execute `history -c`.

The history file is stored in a file that you can modify, as well. Bash shell users find it in their home directory as `.bash_history`.

```bash
nano ~/.bash_history
```

<br/>

**See history commands with timestamps**

Solution taken from: https://askubuntu.com/questions/391082/how-to-see-time-stamps-in-bash-history

- Just write the following command in terminal:

```bash
# for e.g. “1999-02-29 23:59:59”
HISTTIMEFORMAT="%F %T "

# for e.g. “29/02/99 23:59:59”
HISTTIMEFORMAT="%d/%m/%y %T "
```

- To make the change permanent for the current user run:

```bash
echo 'HISTTIMEFORMAT="%F %T "' >> ~/.bashrc
source ~/.bashrc
```

Note that this will only record timestamps for new history items, after HISTTIMEFORMAT is set for sessions, i.e. you can't use this retrospectively.

<br/>

# Processes

## ps, htop

[The Most Popular Linux Commands: ps - 2h47m](https://youtu.be/ZtqBQ68cfJc?t=10061)

You can inspect processes (started by current user/you) that running on your Linux machine with `ps`.

To see all the processes by all users run `ps ax` (or, to see all the processes in a GUI you can run `top` and `htop`). To view all the path related to processes you can run `ps axww` (with simple `ps ax` the names gets cut, by adding `ww` word-wrap we can see the entire path).

```bash
ps axww
```

<br/>

However, a waaay easier method to manage processes is by installing and using `htop`. See [The htop Command | Linux Essentials Tutorial
](https://www.youtube.com/watch?v=bKWZJ3_5ODc)

```bash
htop
```

<br/>

## kill

Notes taken from the book: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-kill-command

```bash
kill <PID>
```

By default, this sends the TERM signal to the process id specified.

We can use flags to send other signals (Note that we can view all the flags by running `kill -l` that won't kill anything, it will just list all the signals we can use)

```bash
kill -HUP <PID>
kill -INT <PID>
kill -KILL <PID>
kill -TERM <PID>
kill -CONT <PID>
kill -STOP <PID>
```

![](./Top-Linux-Commands-imgs/processes_01.jpg)

- `HUP` means hang up. It's sent automatically when a terminal window that started a process is closed before terminating the process.

- `INT` means interrupt, and it sends the same signal used when we press ctrl-C in the terminal, which usually terminates the process.

- `KILL` is not sent to the process, but to the operating system kernel, which immediately stops and terminates the process.

- `TERM` means terminate. The process will receive it and terminate itself. It's the default signal sent by kill.

- `CONT` means continue. It can be used to resume a stopped process.

- `STOP` is not sent to the process, but to the operating system kernel, which immediately stops (but does not terminate) the process.

<br/>

## killall

https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-killall-command

Similar to the kill command, killall will send the signal to multiple processes with same **name** at once instead of sending a signal to a specific process id.

```bash
killall <name>
```

where name is the name of a program. For example you can have multiple instances of the top program running, and killall top will terminate them all.

<br/>

## jobs, bg, fg

[The Most Popular Linux Commands: jobs, bg, fg - 2h47m](https://youtu.be/ZtqBQ68cfJc?t=10918)

We can put (long) running commands in the background in our terminal, so we can run other commands.

For example, if we run a command that takes a lot of time (eg. `grep -rnia ./huge-logs.log -e "stringpattern"` or `find / -ctime -1` to find all files in root directory that changed in the last 24 hours), the command will run in the foreground, where we can either:

- stop the process by pressing `CTRL+C`
- suspend the process (put in on pause, don't stop it) by pressing `CTRL+Z` => if we have some suspended processes, we can then type the `jobs` command to see them (the jobs/suspended processes will be shown with an id associated as well).
  - Then, to run again the process in the foreground, we can write `fg <id>` with the id of the process (listed when running `jobs`).
  - Or, to run again the process in the background, we can write `bg <id>` (we can see the process running in the background by running `jobs` command again)

Note: we can also run a process (a command) directly in the background by adding ` &` at the end of the command (for example `grep -rna ./logs.log -e "timestamp" > logs-today.log &`, or something like `docker-compose up &`).

Note: we can also suspend (`CTRL+Z`) "processes" like editing a file in nano/vim -> while we are in nano/vim, press `ctrl+z`, do something else in the terminal, then run `fg` command to get back to editing a file in nano/vim (this is especially useful on servers while remote with ssh). This is like "minizing" a program/app (or note-taking with vim/nano) in the terminal.

<br/>

# gzip, tar

(Monday, July 18, 2022)

Gzip is a lossless compression tool that makes large chunks of data smaller ([gzip file compression in 100 Seconds - Fireship.io](https://www.youtube.com/watch?v=NLtt4S9ErIA)).

```bash
gzip --version

# Compress a file
gzip filename.txt  # it will create a filename.txt.gz

# Print the compression rate of gzip file
gzip -l filename.txt.gz
```

```bash
# Decompress gz file to original using -d (Method 1)
gzip -d filename.txt.gz

# Decompress gz file to original using g-unzip (Method 2)
gunzip filename.txt.gz
```

Note: `gzip filename.txt` will add filename.txt to the filename.txt.gz compressed file and will delete the filename.txt file. To keep both `filename.txt` and compressed `filename.txt.gz` file, add the `-k` (keep the original) flag: `gzip -k filename.txt`.

```bash
gzip -kv changes.txt # -v for verbose
# changes.txt 86.8% - created changes.txt.gz
```

<br/>

However, gzip cannot compress a whole directory. We need to use the `tar` (**t**ape **ar**chive) archiver, with `-z` flag that compresses multiple files into a single `.tar.gz` (compressespressed tarball) file.

```bash
tar -czvf MyArchiveName.tar.gz MyDirectoryName
# -c flag is for create
# -f flag is for providing the filename the tar will have
# -z flag automatically compresses the archive
# -v flag is for verbose
```

To extract files from a tar archive we use the `-x` option (extract):

```bash
# Archive without compression
tar -cf MyArchiveName.tar

# View files inside archive with -t option
tar -tf MyArchiveName.tar

# Extract (in the same directory)
tar -xf MyArchiveName.tar

# Extract (in the specified directory)
tar -xf MyArchiveName.tar -C ./extracted
```

If we want to add multiple selected files into a tar archive:

```bash
tar -cfv MyArchiveName.tar file1.log file2.log file3.log

gzip -v MyArchiveName.tar
```

Note that tar command does not compress any files, so every time we create a tar archive of a group of file, we then need to compress the `tar` file with `gzip`. Or we should use the `tar -z` option (for automatic compress) as shown:

```bash
# Archive and Compress files
tar -czvf MyArchiveName.tar.gz file1 file2 file3

# Decompress and extract files from archive
tar -xf MyArchiveName.tar.gz
```

<br/>

# xargs

([The Most Popular Linux Commands - xargs 3h43m18s](https://youtu.be/ZtqBQ68cfJc?t=13398) and [The Linux xargs command](https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-xargs-command))

(Tuesday, July 19, 2022)

The xargs command is to convert input from standard input into arguments to a command. The syntax for xargs is something like `command1 | xargs command2`.

Examples:

- We have in a text file (`FilesToDelete.txt`) a list of files that we want to delete. We can take the output of `cat FilesToDelete.txt` and add them as an argument to `rm` command:

```bash
cat FilesToDelete.txt | xargs rm
```

We can also add a `-p` option to print a confirmation prompt with the action performed.

![](./Top-Linux-Commands-imgs/xargs_01.jpg)

<br/>

- Another example: we have a list of filenames in `FilesToCreate.txt` that we want to actually create (with `touch`):

```bash
cat FilesToCreate.txt | xargs touch
```

![](./Top-Linux-Commands-imgs/xargs_02.jpg)

<br/>

- Detailed list of files that are larger that 10MB. Note that `ls` does not support arguments with simple piping (eg. `find . -size +10M | ls -lh` won't work), therefore we must use `xargs`:

```bash
# Show detalied list of files that are larger than 10MB
find . -size +10M | xargs ls -lh

# And remove those files that are larger than 10MB
find . -size +10M | xargs rm
```

<br/>

## xargs multiple commands

You can also run multiple commands at once using the `-I` option, that allows you to get the output into a `%` placeholder.

```bash
command1 | xargs -I % /bin/bash -c 'command2 %; command3 %'
```

```bash
# Example
cat FilesToDelete.txt | xargs -I % /bin/bash -c 'cat %; rm %'

# or you can use "sh -c" instead of "/bin/bash -c"
cat FilesToDelete.txt | xargs -I % sh -c 'cat %; rm %'
```

Note: You can swap the `%` symbol used above with anything else – it's a variable.

<br/>

## More xargs examples

- Archive all JPG files into a `tar.gz`

```bash
ls *.jpg | xargs tar -czvf myjpgs.tar.gz

# and remove them after
rm *jpg
```

![](./Top-Linux-Commands-imgs/xargs_03.jpg)

<br/>

- Find all the `.c` files that contains a string

```bash
find . -name '*.c' | xargs grep 'stdlib.h'
```

<br/>

- Convert any multi-line output to a single line just by passing the output to `xargs`

```bash
# Simple example
ls | xargs

cat ListOfItems.txt | xargs
```

![](./Top-Linux-Commands-imgs/xargs_04.jpg)

<br/>

- Move all files that contains a certain string to another directory

```bash
grep -lir 'btn-green, btn-red' ./* | xargs mv -t ./tmp
grep -li 'img' ./* | xargs mv -t ./tmp_imgs
```

<br/>

- Delete all files with a .backup extension (-print0 uses a null character to split file names, and -0 uses it as delimiter):

```bash
find . -name {{'*.backup'}} -print0 | xargs -0 rm -v
```

<br/>

# Permissions

[Top Linux Commands: permissions - 4h32m](https://youtu.be/ZtqBQ68cfJc?t=16286)

- When viewing a detailed list of files (with `ls -lah`), the first 10 characters of every file represents the file type (`-` for file, `d` for directory, and `l` for symbolic link / "shortcuts")

![](./Top-Linux-Commands-imgs/permissions01.jpg)

- The next 9 characters (3 groups of 3 characters each) represents the following:

  - the 1st group of 3 characters are the permissions for the Owner of the file/directory
  - the 2nd group are the permissions for the Group Owner
  - the 3rd group are the permissions for everyone else (the world at large, everyone else that is not the owner of the file/directory nor an user that belongs to a group)

- The 3 characters of each user group are:
  - read (`r`) or cannot read (`-`)
  - write (`w`) or cannot write (`-`)
  - execute (`x`) or cannot execute (`-`)

![](./Top-Linux-Commands-imgs/permissions02.jpg)

![](./Top-Linux-Commands-imgs/permissions03.jpg)

- Examples

![](./Top-Linux-Commands-imgs/permissions04.jpg)

![](./Top-Linux-Commands-imgs/permissions05.jpg)

<br/>

## chmod

![](./Top-Linux-Commands-imgs/permissions06.jpg)

![](./Top-Linux-Commands-imgs/permissions07.jpg)

![](./Top-Linux-Commands-imgs/permissions08.jpg)

Examples:

![](./Top-Linux-Commands-imgs/permissions09.jpg)

![](./Top-Linux-Commands-imgs/permissions10.jpg)

![](./Top-Linux-Commands-imgs/permissions10-2.jpg)

<br/>

Note: You can also use octals to set permissions to all three groups of users in one command:

![](./Top-Linux-Commands-imgs/permissions11.jpg)

![](./Top-Linux-Commands-imgs/permissions12.jpg)

<br/>

## Making a bash script executable

- Create the file `nano myscript.sh`

- Add `#!/bin/bash` at the top (first line of the file)

- Make the file/script executable by adding `chmod +x myscript.sh`

- Run the script as `./myscript.sh`

![](./Top-Linux-Commands-imgs/permissions_chmodx.jpg)
