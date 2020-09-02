Notes with ***Git CLI commands*** taken from on-line tutorials such as:
* [Git Tutorials (1h24m) from **Corey Schafer**](https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx)
* [Git and GitHub (2h16m) from **The Coding Train**](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)

## Contents:
* [git help](#githelp)
* [Set up global configuration variables](#setglobalvariables)
* [**git init** VS.  **git clone**](#git_init_clone)
* [git status](#gitstatus)
* [git diff](#gitdiff)

* [git work-flow (on master branch)](#gitworkflow1)
	* [git add -A](#gitworkflow1_add)
	* [git commit](#gitworkflow1_commit)
	* [git log](#gitworkflow1_log)
	* [git push](#gitworkflow1_push)
	* [git remote](#gitworkflow1_remote)
	* [git pull](#gitworkflow1_pull)
	* [**Schema: Working Directory, Staging Area, Git Remote Repository**](#gitworkflow1_schema)

* [Create a new branch](#create_branch)
	* [git branch, git checkout](#gitbranch)
	* [Merge a branch: git merge (+mini-work-flow)](#gitmerge)
	* [Delete a branch](#deletebranch)

* [Git **Complete Work-flow** - Work from another branch](#git_complete_workflow)

* [Create a new repo from a locally existing/completed project (mini-work-flow)](#git_workflow_newrepo)

* [**Locally Mistakes that could've been made**](#mistakes_locally)
	* [Discard changes to a modified file/files with `git checkout -- .`](#mistake_1)
	* [We mess up a commit -m message; modify the last commit message without doing another commit](#mistake_2)
	* [We forgot to add a file to the last commit](#mistake_3)
	* [We made commits to the master branch instead of our working branch](#mistake_4)
	* [**Types of git resets (soft, mixed, hard)**](#types_of_git_resets)
	* [**Fatal: we did a hard reset on some changes but we realized that we actually need them: `git reflog`**](#mistake_5)

* [Undoing a commit after pushing to remote server. Fix without **changing the git history**](#mistake_6)

* [Using the **`git stash`** command](#git_stash)

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

## <a name="gitworkflow1"></a>Git work-flow (on master branch)
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
NOTE1: git checkout HEAD^ filename (will overwrite the file to the state of *commit before* last local commit in the master branch)<br>
NOTE2: git checkout HEAD^ **without specifying a file** will **DROP THE WHOLE LAST COMMIT!!! and will revert to the commit before last commit** (however you will be in a detached head state branch, so you can revert this action by just changing back to master branch: git checkout master)<br>
NOTE3: git checkout HEAD^1 is roughly the same as git reset HEAD^1, but:
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
git branch -a
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

## <a name="mistakes_locally"></a>Locally Mistakes that could've been made

### <a name="mistake_1"></a>If we made changes to a single_file but then we don't want to keep the changes to that file anymore (we want to undo/go back):
```bash
git checkout single_file.py
```
And if we want to discard all changes/modifications to our files:
```bash
git checkout -- .
```
Also, if we want to delete/get rid of untracked files (newly created files):
```bash
git clean -fd # force directories
```

### <a name="mistake_2"></a>We mess up a commit -m message. We want to modify the last commit message without doing another commit
**WARNING: The following commands in this section will change the hash of previous commits => THIS WILL CHANGE *GIT HISTORY* => IF OTHER PEOPLE WILL PULL THE CHANGES AFTER EXECUTING THESE COMMANDS, THE CHANGED HISTORY COULD CAUSE BIG PROBLEMS TO THEIR REPOSITORIES. We can only change git history when we're the only one owners of the repository.**

```bash
git commit --amend -m "Corrected commit message"
```

### <a name="mistake_3"></a>We forgot to add a file to the last commit. We want the add the file without commiting again.
```bash
git add file.c # get the file in the staging area
git commit --amend # this will add the new file to last commit, also it opens a log in Vim, exit with :wq
git log --stat # show file changes in commits
# The last commit hash will be changed, so the git history will be changed
```

### <a name="mistake_4"></a>We made commits to the master branch instead of our working branch. Fix: we "move" a commit(hash) to the master and return the state of the master branch
```bash
# from master's branch
git log
# grab/copy (the first 6-7 characters of) the commit hash that we want to cherry-pick
# change to our working branch
git checkout [my-branch-name]
git cherry-pick 1b818d3b
git log

# Now delete the commit from master
git checkout master 
git log
# grab/copy the hash of the commit before our wrong commit
git reset --hard 2e75207
git log
git clean -fd
```
**WARNING: Again, this will change git history and will cause consequences when working in a team!!! I'll write some alternatives in next sections.**

## <a name="types_of_git_resets"></a>Types of git resets
#### ***SOFT RESET***
```bash
git log # grab the hash of the commit we want to keep, the commits after that commit will be removed
git reset --soft 2e7520782

git log
git status
```
**Git soft reset** will set us back to the specified commit BUT will keep the modified and newly files from the unwanted commits (the ones we removed) in the ***staging area*** ("added files ready to be commited" area) - we still didn't lose our work, but we can discard with `git reset HEAD -- .`.

#### ***MIXED RESET*** (DEFAULT)
```bash
git log # grab the hash of the commit we want to keep, the commits after that commit will be removed
git reset 2e7520782

git log
git status
```
**Git mixed/default reset** will set us back to the specified commit BUT will keep the modified and newly files from the unwanted commits (the ones we removed) in the ***working directory*** ("untracked files, before executing add -A" area) - we still didn't lose our work, but we can discard with `git checkout -- .`.

#### ***HARD RESET***
```bash
git log # grab the hash of the commit we want to keep, the commits after that commit will be removed
git reset --hard 2e7520782

git log
git status
```
**Git hard reset** will set us back to the specified commit AND will make all the changes in files to match the state that they were in the specified commit - we've lost our work.<br>
However, hard reset will not affect untracked files (newly created files from the unwanted commits, but it's irrelevant if we didn't create any new files). We can get rid of these untracked files with `git clean -fd`.<br>
<br>
NOTE: `git clean -fd` could be useful when we accidentally unzip an archive in a project directory (local repo) and we don't want to manually delete all the new files created.

## <a name="mistake_5"></a>**Fatal: We did a hard reset on some changes but we realized that we actually need them: `git reflog` (or we deleted last commits)**
This "fix" works if we screwed up with `git checkout HEAD^1` or `git reset --hard HEAD^`. (HEAD^ is short for/same with HEAD^1).<br>
Luckily, git garbage collector (gc) collects/deletes (forever) lost commits after 30 days (IF WE DIDN'T ALREADY RAN `git gc` COMMAND).
```bash
git reflog
# grab the hash before executed reset command
git checkout [0c8189]
git log # happily see our changes back 

git branch
# HOWEVER, we're in a detached head state - we are on a branch that would be trashed in the future, so we need to save those changes in a newly created branch
git branch backup
git checkout master
git branch
```
Now we've successfully recovered our lost changes, we can merge the backup branch with master (`git merge backup`) **OR** if our changes are already in master branch (do check), we can delete the backup branch (`git branch -d backup`).

---

## <a name="mistake_6"></a>Undoing a commit after pushing to remote server. Fix **without changing the git history**
Undo a commit (when other people already pulled the changes), without rewriting the git history. We use `git revert` to create a new commit on top that reverses the changes of earlier commits.
```bash
git log # select the commit hash THAT WE WANT TO UNDO (the wrong commit)
git revert [1b818d3] # will also show a message in Vim, :wq to exit
git log # you can see the new revert commit

# You can also see the revert diff
git diff [1b818d3] [hash from revert commit]
```

---

## <a name="git_stash"></a>Using the **`git stash`** command ("temporary" commits)
Useful for changes that you are not ready to commit yet, but you need to switch branches (or revert back to another code) work temporarily in another part of the project.
NOTE: If you don't commit your changes (modified files) and you switch to another branch, your code will be lost.

```bash
git branch my_branch
git checkout my_branch
# Make changes to the code, realize you have to switch branch for a moment
git stash save "Worked on login function"
# git diff / git status will show "working tree clean" -> after pushing to stash, all modifications to files are gone.

# You can now switch branches / cherry-pick commits / work on other part of project, when you come back:
# Option 1:
git stash list
git stash apply stash@{0} # after executing this, the saved stash will still be listed in stash list
# Option 2:
git stash pop # grabs the very first (top) stash, applies changes then drops that stash from stash list
```
You can also drop/delete stashes in stash list:
```bash
git stash list
git stash drop stash@{2}

# Or delete all the stashes in the list (assume that all those changes were junk/no longer needed)
git stash clear
```

NOTE: You can't merge two stashes (eg. `git stash pop` twice) -> will show *Error: files would be overwritten by merge, please commit your changes or stash them before you merge*.<br>

NOTE: **The same stash list is accesible to every branch** => Useful scenario: If you've written all your changes to code in a wrong branch (master) you need to commit to another branch, just stash the changes `git stash save "Worked on login function"`, `git checkout another_branch`, then grab changes from stack (`stash apply stash@{?}`/`stash pop`).
