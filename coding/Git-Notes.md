---
layout: gitnotes-markdown
title: "Git Notes"
custom_css: css/github-markdown.min.css
---
## Version Control

##### version control:
system that records changes to a file over time so that you can recall specific versions later.

##### distributed version control:
fully mirror the repository rather than just the latest snapshot. Allows for hierarchical models not possible in centralized.

## Getting Started

#### SVN Structure
- List of file based changes

#### Git Structure
- Every time you commit, or save the state of your project in Git,
it basically takes a picture of what all your files look like at
that moment and stores a reference to that snapshot.
If the file has not changed, Git doesn't store the file again,
just a link to the previous identical file already stored.


- Operations almost instant because on latency of network
Can commit work until getting a network connection to upload.

- As in any VCS, you can lose or mess up changes you haven’t
committed yet; but after you commit a snapshot into Git,
it is very difficult to lose, especially if you regularly
push your database to another repository.

Git has three main states that your files can reside in: Committed, modified, and staged.
1. Committed means that the data is safely stored in your local database.
2. Modified means that you have changed the file but have not committed it to your database yet
3. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.


#### Install and Setup of Git

- Ubuntu

sudo apt-get install git-all
- Windows
http://git-scm.com/download/win

#### Configure System Environment
- **git config** lets you configure variales that control all aspects of how Git looks and operates.
- These variables can be stored in 3 locations:
+  **/etc/gitconfig** values for every user on the system and all repositories.
If you pass the option **--system** it reads and writes from this file specifically.
+ **~/.gitconfig** or **~/.config/git/config** specific to your user. You can make Git read and write to this file by passing the **--global** option.
System-level config file in `C:\ProgramData\Git\config` on Windows.
This config file can only be changed by **git config -f [file]** as an admin.
+  **config** file in the git directory **(.ig/config)** of whatever repository you're currently using.
Specific to that single repository.

Specify the following information which will be used in each commit message.
You can override for individual projects by running the command from the project
repository without the global option.

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Can specify default text editor that will be used when Git needs you to type a message.

```git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"```

#### Check Your Settings

`git config --list`

#### Getting Help
`git help` to show man pages.

## Git Basics

#### Initialize a Repo in an Existing Directory

```
cd /C/user/your_repository
git init
```
This creates a new subdirectory named **.git** for all repo files.
You should track files in directory using the following:

```
git add *.c
git add LICENCE
git commit -m 'initial project version'
```

#### Clone an Existing Repository
Copy an existing Git repository using **git clone [url]**.
Git receives a full copy of nearly all data that the server has.
Every version of every file for the history of the project is pulled down by default.

#### Recording Changes to the Repository

##### Tracked Files
files that were in the last snapshot; they can be in any state.
##### Untracked Files
any files in working directory that were not in your last snapshot and are not in your staging area.

##### Track New Files
Use **git add (files)** to track files or stage files

#### Ignoring Files
Use **.gitignore** to allow files not to be tracked.

- Blank lines or lines starting with # are ignored.
- Standard glob patterns work.
- You can start patterns with a forward slash (/) to avoid recursivity.
- You can end patterns with a forward slash (/) to specify a directory.
- You can negate a pattern by starting it with an exclamation point (!).

**git diff** used to show exactly what changed, not just what file in files tat are unstagd.

#### Skipping the Staging Area
use the **-a** option to the **git commit** to automatically stage every file that is already tracked
before doing the commit, letting you skip the **git add** part.

#### Removing Files
`git rm` to remove tracked files (remove from staging area) then commit change.
Deleting a local file will place the it in unstaged.

To stop tracking a file use `git rm --cached (file)`. This is useful for files that you forgot to add in `.gitignore`

Use `git mv file_from file_to` to change the name of a file instead of standard `mv`

#### Viewing the Commit History

`git log` to get list of commits made in the repo.

| Option        | Function      |
| ------------- |:-------------:|
| -p            | diff btwn each commit |
| -{n}          | limit output to last 'n' entries |
| --stat        | abbreviated stats for each commit |
| --pretty={oneline, short, full, fuller}      | change log output to format |
| --pretty=format:"{}"      | specify our own log output format |
| --graph       | shows ASCII graph of branch and merge history |
| --since={ 2 days / 2.weeks / etc} | list commits in last x time period |
|--since, --after | Limit the commits to those made after the specified date |
|--until, --before | Limit the commits to those made before the specified date |
|--author       | Only show commits in which the author entry matches the specified string |
|--committer    | Only show commits in which the committer entry matches the specified string |
|--grep         | Only show commits with a commit message containing the string |
|-S{text}       | Only show commits adding or removing code matching the string |

#### Format Options

| Option        | Function      |
| ------------- |:-------------:|
| %H  | Commit hash |
| %h  | Abbreviated commit hash |
| %T  | Tree hash |
| %t  | Abbreviated tree hash |
| %P  | Parent hashes |
| %p  | Abbreviated parent hashes |
| %an | Author name |
| %ae | Author email |
| %ad | Author date (format respects the --date=option) |
| %ar | Author date, relative |
| %cn | Committer name |
| %ce | Committer email |
| %cd | Committer date |
| %cr | Committer date, relative |
| %s  | Subject |

#### Undoing Things
`git commit --amend` try to commit again, used to change files or message of commit.
Unmodify a file using `git checkout -- file`. Danger of losing changes. Suggest using git stash unless sure that you don't need changes.

#### Adding Remote Repositories
`git remote`: lists the remote servers configured

`git remote add [shortname] [url]`: add new remote git repo as a shortname you can reference easily

#### Fetching Pulling and Pushing Your Remotes

`git fetch [remote-name]`: pull down data from remote project you don't have yet

`git pull`: once you are tracking a repo to fetch and merge

`git push [remote-name] [branch name]`

#### Tagging

Tag specific point in history as being important. Mark release points
Annotated tags are recommended since they contain tagger name, email and date
You can add tas after a commit is made

`git tag`: lists available tags in alphabetical order

`git tag -a {tag-name} -m "comment"`: create a tag

##### Sharing Tags

`git push` doesn't transfer tags to remote servers. You have to explicitly push tags using **git push origin [tag-name]**

## Git Branching

Branching means getting to diverge from the main line of development and continue to do work without it.

#### Creating a Branch

`git branch [branch-name]` will create a new pointer to the same commit you're currently on.
**HEAD** is a pointer to local branch you are currently on. You stay on **HEAD** after creating a branch.

#### Switching Branches

`git checkout [branch-name]` moves the HEAD to point to another branch.

When merging 2 commits that can be reached by following the first commit's history,
Git simplifies things by moving the pointer forward because there is no divergent work to merge together - this is called a "fast forward".

#### Delete a branch

`git branch -d [branch-name]` deletes a branch from local machine.
'git push origin --delete [branch_name]' deletes a remote branch

#### Merge Commit
When a branch has diverged from another and is merged back in, a special commit is made from a
three way merge.

#### Merge Conflict
When there is a merge conflict, there is an indication of the differences that you must resolve.
The following is what is held in the branch you are currently in.
```
<<<<< HEAD
.......content
=====
```
The following is below **HEAD** and is from the branch that you attempted to merge.
```
.......content
>>>>>>
```
run `git add (file)` to mark file as resolved.

Then `git commit` to finalize the merge.
