## Hello! There are writeups for Fracz Git Exercises.
1. master : **git verify**

2. commit-one-file : **git add A.txt** and then committed using **git commit -m"First Commit"**

3. commit-one-file-staged : **git reset B.txt** this will remove B.txt from staged and committed A.txxt with **git commit -m"commit of A.txt"** 

4. ignore-them : created a gitignore file **touch .gitignore** and edited the gitignore file adding ***.exe**, ***.o**, ***.jar** and **libraries/**. Then **git add .gitignore** and **git commit -m"Added gitignore"**

5. chase-branch : **git checkout chase-branch** and then **git merge escaped**

6. merge-conflict : **git merge another-piece-of-work** and the conflict appears. Used **echo 2 + 3 = 5 > equation.txt** to modify the text file. **git add equation.txt** to stage the file and then **git commit -m"Merge Conflict Solved"**

7. save-your-work : **git stash** then modified bug.txt using **nano bug.txt**, removed the bug, and committed.Used **git stash pop**, Then modified bug.txt by **echo "Finally, finished it!" >> bug.txt** and finally committed final result.

8. change-branch-history : **git rebase hot-bugfix** this rebases the current branch into hot-bugfix branch.

9. remove-ignored : **rm ignored.txt** ignored.txt will get removed. Then committed using **git commit -am "Done"**

10. case-sensitive-filename : **git mv File.txt file.txt** file will get renamed. **git commit -am "Changed"** the changes get committted.

11. fix-typo : **nano file.txt** corrected the mistake. **git add file.txt** and then **git commit --amend** and correct the message. 

12. forge-date : **git commit --amend --date "1987-02-17"** thus the commit date is changed.

13. fix-old-typo : **git  rebase -i HEAD~2** this directs to old commit. Changed from pick to edit where change had to be made. **nano file.txt** and corrected spelling. **git add file.txt** to stage it. **git rebase --continue** to get back to original commit. **nano file.txt** and solved the conflicts. **git add file.txt** to stage after removing conflicts and then **git rebase --continue** .

14. commit-lost : **git reflog** this shows the log of all actions performed including commit, rebase, checkout. Out piece of work is at HEAD@{1} so **git reset --hard HEAD@{1}**.

15. split-commit : **git reset HEAD^** this will reset the previous commit. now commit the files one by one. **git add first.txt** then **git commit -m "First Commit"**. **git add second.txt** then **git commit -m "Second Commit"**.

16. too-many-commits : **git rebase -i HEAD~4** this will combine the last 4 commits. replace the "pick" with "squash" where the message is "Crap, I have....". Then give a commit message for comibining result of 2 commits. 

17. executable : **git update-index --chmod=+x script.sh** this will make it executable. To commit this I used **git commit  --amend --no-edit**.

18. commit-parts : **git add file.txt -p** select s and split the phrases with task 1 into 1st Commit. 
**git commit -m"Part 1"** and then **git add file.txt -p** stage the remaining part and commit it.

19. pick-your-features : **git cherry-pick feature-a** this adds the commit "feature-a" to the current branch. **git cherry-pick feature-b** then **git cherry-pick feature-c** and solve the conficts. **git add .** to stage the changes. **git cherry-pick --continue**

20. rebase-complex : **git rebase --onto your-master issue-555 rebase-complex** this command will reapply commits from the branch issue-555 upto rebase-complex(not included) to the branch your-master.

21. invalid-order : **git rebase  -i HEAD^^** this will open up text editor where we can change the order and save it so it gets rebased.

22. find-swearwords : **git log -S shit** to get which all lines in commit has the word shit. **git rebase -i HEAD~100** to rebase last 100 commits and change the lines with shit from pick to edit. **grep shit \*** to check which file contains "shit" and then **nano file.txt** to change shit into  flower. **git add list.txt** then **git commit --amend**. **git rebase --continue**.
Now again **grep shit \*** to check a file containing word "shit". **nano words.txt** changed shit to flower, **git add words.txt** then **git commit --amend**. **git rebase --continue**.
Again, **grep shit \*** to check if any file contains "shit", **nano words.txt** modify it, **git add words.txt** then **git commit --amend** and do **git rebase --continue**.
Do **grep shit \*** again and found the word "shit" is not there in words.txt and list.txt. **git verify**

23. find-bug :  **git bisect start HEAD 1.0** then **git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v jackass"** this will give the ID of the first bad commit. "9980b102c629cdd4a97524063291a124ff61a52e" was the commit ID. **git push origin 9980b102c629cdd4a97524063291a124ff61a52e:find-bug** and its passed.
