Notes with ***Git CLI commands*** taken from online tutorials such as:
* [Git Tutorials (1h24m) from **Corey Schafer**](https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx0)
* [Git and GitHub (2h16m) from **The Coding Train**](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)

## Contents:
* [git help](#githelp)
* [Set up global configuration variables](#setglobalvariables)
* [***git init*** VS.  ***git clone***](#git_init_clone)
* [git status](#gitstatus)
* [git workflow (on master branch)](#gitworkflow1)
	* [git add -A](#gitworkflow1_add)
	* [git commit](#gitworkflow1_commit)
	* [git log](#gitworkflow1_log)
	* [Schema: Working Directory, Staging Area, Git Remote Repository](#gitworkflow1_schema)
	* [git push](gitworkflow1_push)
* [Create a new branch](#create_branch)
	* [git branch, git checkout](#gitbranch)
	* [Merge a branch: git merge](#gitmerge)
	* [Delete a branch](#deletebranch)
* [Git **Complete Workflow** - Work from another branch](#git_complete_workflow)


---

### <a name="githelp"></a>git help
Display help (all commands) in CLI:
```bash
git help
```
Check Git version installed on PC:
```bash
git --version
```
Git help on commands (the help menu will be displayed on a new Browser(Chrome, Firefox, etc) tab):
```bash
git help <command> # is the same as git <command< --help

git help config
git config --help # is the same as git help config
git add --help
```

### <a name="setglobalvariables"></a>Set up global configuration variables
* Needed to push local repository to GitHub remote server
* Also useful when working in a team to see who changed the code (with **blame** command)
* For ***name***: you can choose any name, it can be different from your github account
* For ***email***: it must be the exact same email used on your github account
```bash
# 
git config --global user.name "John Doe" 
git config --global user.email "JohnDoe97@gmail.com" 

git config --list # list all configurations
```

---

### <a name="git_init_clone"></a>Create own local empty repository ***init*** VS. ***clone*** an existing repository as a local repository in your PC
* Create own local empty repo (***init***) (it will create a new folder ***.git*** with all the informations about that repo):
```bash
cd my_new_project_folder_name
git init
```

* Copy/Download an existing repo (***clone***)
```bash
git clone <url> <optional:where_to_clone>
# like this
git clone https://github/username/android-app AndroidAppFolder
```

### <a name="gitstatus"></a>git status
```bash
git status
```
Git keeps track of modified/added/removed files and also which files are [are not] tracked.
However, sometimes you don't want to track some files (eg. personal files, personal configurations files, cache files auto-generated after each build) => create ***.gitignore*** file where you can write the files you don't want to include (ignore them forever):
```
mystuff.txt
*.pyc
.DS_Store
```
^^ These files won't show up anymore when calling ***git status***.
Also, .gitignore should be included (_git add .gitignore_) to prevent a team collaborating on a project from committing generated cache files => don't add .gitignore to .gitignore itself lol.

---

### <a name="gitworkflow1"></a>Git workflow (on master branch)
<a name="gitworkflow1_add"></a>
* Add files to the staging area (= add all the files that are ready to be commited except the files from *.gitignore*)
```bash
git add -A 
```
<a name="gitworkflow1_commit"></a>
* Commit all the files added (tracked files) to the local repository.
```bash
git commit -m "Message from this commit"
```
* Add all the files to the staging area then commit:
```bash
git commit -a -m "Message from this commit"
```

* Git reset [file.ext] will make all the files [or only file.ext] untracked (out of the staging area) => The changes to that file.ext will not be commited!
```bash
git reset [file.ext]
```

<a name="gitworkflow1_log"></a>
* Git log shows all the made commits (with hash number, author, date of each commit). By default, the log opens in Vim text editor.
```bash
git log
git log -2 # shows last 2 commits
```

<a name="gitworkflow1_schema"></a>
<img src="/GitWorkflowDiagram.png" width=1000>

<a name="gitworkflow1_push"></a>
```bash

```

* [Create a new branch](#create_branch)
	* [git branch, git checkout](#gitbranch)
	* [Merge a branch: git merge](#gitmerge)
	* [Delete a branch](#deletebranch)
* [Git **Complete Workflow** - Work from another branch](#git_complete_workflow)



