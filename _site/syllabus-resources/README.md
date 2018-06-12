syllabusv2-resources
====================

Resources for Syllabus v2

```
$ git clone mysyllabus
$ cd mysyllabus
$ cd syllabusv2-resources
$ git checkout master
$ git submodule init
$ git submodule update
$ bundle install
$ bundle update
$ bundle exec jekyll serve

$ cd mysyllabus
$ git submodule foreach 'git add .'
$ git submodule foreach 'git commit -m "WIP"'
$ git submodule foreach 'git push origin master'
```

Install tools
-------------

### Visual Studio Code code blocks

 1. Install [Artevelde Dotfiles](http://www.gdm.gent/dotfiles/)
 1. Go to a **Syllabus v2** folder  
    `s my-syllabus`  
    `cd syllabusv2-resources`  
 1. Run the install script
    `./__tools/install.ps1`