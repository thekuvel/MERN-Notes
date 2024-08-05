# Git Commands

### Git Configuration

```console
git config --global user.name "thekuvel"
```

```console
git config --global user.email "thekuvel@gmail.com"
```

To list config details

```console
git config --list
```

### Git pull
1. Navigate to the <i>- project folder</i>
2.
    ```console
      git init
    ```

3. ```console
    git pull yourGitHubRepositoryLink.git
   ```

### Git Push

```console
git status
git add . (or) git add filenames.extension
git status
git commit -m "Your comments"
git remote add origin yourGitHubRepositoryLink.git
git push --set-upstream origin master
```

#### To create branch

```console
git checkout -n "new-branch"
```

#### To remove file from stagging area

```console
git restore --staged filnameextension
```

#### To add all files and commit

```console
git commit -a -m "Adding all files and commiting the changes"
```
