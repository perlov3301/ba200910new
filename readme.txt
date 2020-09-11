## play slow
osascript -e 'tell application "QuickTime Player" to set rate of document 1 to 0.62'
#git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/perlov3301/ba200910new.git
git push -u origin master
  git add . 
  git commit -am "refresh token"
  git config --get remote.origin.url
  git push -u origin master 
#get psql: %source .bash_profile =>psql=>\l=>\c jwt-auth postgres=>\d=>SELECT * FROM users;