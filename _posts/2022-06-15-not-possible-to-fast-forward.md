---
title: GitHub "Your branch `origin main` has diverged! 💔
author: bagg3rs
date: 2022-06-15 15:25:00 +0000
categories: [git, development]
pin: false
mermaid: true
math: true
---

git status                                              
On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 2 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

nothing to commit, working tree clean


git pull --rebase 
git config --global pull.rebase true
git config --global pull.rebase true

If you have changes
git status                                             
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)