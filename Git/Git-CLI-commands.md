Notes with ***Git CLI commands*** taken from online tutorials such as:
* [Git Tutorials (1h24m) from **Corey Schafer**](https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx)
* [Git and GitHub (2h16m) from **The Coding Train**](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)

## Contents:
* [git help](#githelp)
* [Set up global configuration variables](#setglobalvariables)
* [**git init** VS.  **git clone**](#git_init_clone)
* [git status](#gitstatus)
* [git diff](#gitdiff)

* [git workflow (on master branch)](#gitworkflow1)
	* [git add -A](#gitworkflow1_add)
	* [git commit](#gitworkflow1_commit)
	* [git log](#gitworkflow1_log)
	* [git push](#gitworkflow1_push)
	* [git remote](#gitworkflow1_remote)
	* [git pull](#gitworkflow1_pull)
	* [**Schema: Working Directory, Staging Area, Git Remote Repository**](#gitworkflow1_schema)

* [Create a new branch](#create_branch)
	* [git branch, git checkout](#gitbranch)
	* [Merge a branch: git merge (+mini-workflow)](#gitmerge)
	* [Delete a branch](#deletebranch)

* [Git **Complete Workflow** - Work from another branch](#git_complete_workflow)

* [Create a new repo from a locally existing/completed project (mini-workflow)](#git_workflow_newrepo)

* [**Locally Mistakes that could've been made**](#mistakes_locally)

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

### <a name="gitdiff"></a>git diff
Git diff shows the changes made to the code within modified files (git status shows only which files have been modified/created).
```bash
git diff
```

---

## <a name="gitworkflow1"></a>Git workflow (on master branch)
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

<a name="gitworkflow1_push"></a>
```bash
git push -u origin master
# git push -u <remote> <branch>
# -u or --set-upstream is to save/add upstream (tracking) reference(the <remote> and <branch>), in order to just write "git push" without specifying again the <remote> and <branch> 
```

<a name="gitworkflow1_remote"></a>
* Git remote shows all the remotes (github repositories) where you can push the last (local) commit. Git remote -v is for verbose (all info about the remotes).
```bash
git remote
git remote -v
```
To add a remote:
```bash
git remote add origin https://github.com/username/projectname/.git
# git remote add <new_branch_name> <link_to_repository>
```
OBS: When cloning a remote (a github repository) with git clone, a remote named "origin" will be available by default.

<a name="gitworkflow1_pull"></a>
Get (locally) the last state (last changes/updates) of the project if someone made changes on the global repository (the remote to github.com server):
```bash
git pull origin master
```

If this error occurs when pulling: ***"your local changes to the following files would be overwritten by merge"*** and **you** want to **drop/overwrite all the changes made from the local repository and get the latest updates from the global repository**, use:
```bash
# Drop local changes, revert to the HEAD reference (last local commit in the master branch)
git reset --hard # NEVER USE: git checkout HEAD^ file/to/overwrite
git pull origin master
# HEAD^ is short for HEAD^1, which means the one commit before HEAD. You could also do HEAD^2 for the commit before that one
```
***Or, discard/give up all the changes (modified files) and go back to last (local) commit state of files:***
```bash
git checkout -- . 
```
NOTE: git checkout HEAD^ filename (will overwrite the file to the state of *commit before* last local commit in the master branch)
NOTE: git checkout HEAD^ **without specifying a file** will **DROP THE WHOLE LAST COMMIT!!! and will revert to the commit before last commit** (however you will be in a detached head state branch, so you can revert this action by just changing back to master branch: git checkout master)
NOTE: git checkout HEAD^1 is roughly the same as git reset HEAD^1, but:
- Use reset if you want to undo staging of a modified file !!!
- Use checkout if you want to discard changes to unstaged file/s !!! (however it is still possible to recover lost files with git reflog and cherry-pick, check
[locally mistakes section](#mistakes_locally).

## <a name="gitworkflow1_schema"></a>Schema: Working Directory, Staging Area, Git Remote Repository
<img src="/Git/GitWorkflowDiagram.png" width=1000>

---

## <a name="create_branch"></a>Create a new branch from CLI
* <a name="gitbranch"></a>git branch, git checkout
To create and move to a new branch:
```bash
git branch <new_branch_name>
git checkout <new_branch_name>
```
Show all branches/active branch with:
```bash
git branch
git branch -v
```

* <a name="gitmerge"></a>Merge a branch: git merge (mini-workflow)<br>
If all your modifications to the code is great and passes all the (unit) tests, merge your branch with the master branch:
```bash
git checkout master # change to master branch
git pull origin master # get last updates before making any changes to master
git branch --merged # show branches that are/aren't merged with master branch
git merge <my_new_branch_ive_worked_on>
git push origin master
```

* <a name="deletebranch"></a>Delete a branch (mini-workflow)<br>
After you added the features from your branch and merged with master, you can **delete** your branch you worked on:
```bash
git branch --merged
git branch -d <my_branch_ive_worked_on> # locally delete the branch
git branch -a # show all branches: we still have <my_branch> globally
git push origin --delete <my_branch_ive_worked_on> # globally/definitely delete the branch
```

---

## <a name="git_complete_workflow"></a>Git **Complete Workflow** - Work from another branch
```bash
git config --global user.name
git config --global user.email
git clone <url> <where_to_clone>
git branch <my_new_branch_name>
git checkout my_new_branch
# (make changes to the code ...)
git status
git commit -m "Add @function in views.py | Solve bug in models.py that fixes #8"
git push -u origin my_new_branch
# (wait for unit tests to complete)
# (if all unit tests pass, then do these)
git checkout master
git pull origin master
git merge my_new_branch
git push origin master
# (now time to delete my_new_branch)
git branch -d my_new_branch
git brach -a
git push origin --delete my_new_branch
```

---

## <a name="git_workflow_newrepo"></a>Create a new repo from a locally existing/completed project (mini-workflow)
* On GitHub.com website:
	* Create a new repository (write name & description)
	* (optional) Create a Readme.MD file
* On CLI (locally):
	* Open the terminal in that folder/project's path
	* Write the following commands:
```bash
git init
git remote add origin https://github.com/username/projectname/.git
git remote -v
git pull origin master # needed to update the commit history of new repo (especially if Readme.MD was created)
git status
git add -A
git status
git commit -m "Initial commit from local project"
git push origin master
```
---
---

## <a name="mistakes_locally"></a>Locally Mistakes that could've been made
