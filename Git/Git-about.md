Notes ***about Git version control system*** taken from online tutorials such as:
* [Git Tutorial for Beginners (51m) from **Telusko**](https://www.youtube.com/playlist?list=PLsyeobzWxl7q2eaUkorLZExfd7qko9sZC0)
* [Git Tutorials (1h24m) from **Corey Schafer**](https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx0)
* [Git and GitHub (2h16m) from **The Coding Train**](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)

## Git = distributed version control system
* Manage different version of an app (every version could have different features)

* Def: Centralized Version Control System (CVCS)
	* A PC sends the previous/current version of the app to server (before the developer makes changes)
	* But what if the server fails? (or the server doesn't have Internet connection?) => DVCS
* Distributed Version Control System (DVCS)
	* Everyone (all PCs) will have their own copy: a local repository for everyone and a remote repo on the server

* Trunk Based Development
	* Scenario: We have a project with a stable version (eg v4.7) and we need to add more features into a newer version v5.0.
	* But what if we found a bug in v4.7?
	* Can we work now on v4.7 and v5.0 simultaneously - to solve the bugs and add the features? => Yes, with branches.
	* We can create a new branch (v5.0) from the master branch (with the stable version 4.7), solve the bug in master branch while adding  the features in v5.0 branch, then merge the branches together.

* Alternatives from GitHub: GitLab, BitBucket.

---

## Working directly on GitHub website:
* **Commits tab** on github will store all the version of the code (the files).
	* OBS: Each commit has an unique identifier (hash)
* **For merging two branches**:
	* Press button ***Compare and pull request -> Create Pull Request -> Solve conflicts (if they appear) -> Commit Merge -> Confirm Merge***
* **Fork**: copy someone's repo (with an exact replica and all previous commits)
* **Insights tab** => visualize tree branches (network)
* **Github clone** => clone is different than fork/pull: it means copying/downloading a repository to your local PC, from which you can commit and push later to the github remote/server.

---

## GitHub issues
**Issues** are usually used for comments: todos, bugs, feature requests, etc.
* An issue could be open/closed
	* An issue is opened until it's solved (If it's resolved, it will be closed)
	* All issue have an Id number (#10) that you can also add in the commit comment/message (eg. write "Solve authentication bug that fixes #10")
	* You can use keywords for issues in commit messages (eg: "fixes #10" will automatically close the issue #10)
	* You can also put the entire hash code into an issue to refer to that exact commit (especially useful for different branches) and it will be automatically converted to a link to that commit.