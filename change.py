import os, git 
repo = git.Repo(".")
commits = list(repo.iter_commits("master"))

def is_exists(filename, sha):
    files = repo.git.show("--pretty=", "--name-only", sha)
    if filename in files: 
      return True
def get_file_commits(filename):
    file_commits = []
    for commit in commits:
        if is_exists(filename, commit.hexsha):
            file_commits.append(commit)

    return file_commits

def main():
  # commits = list(repo.iter_commits("master", max_count=5))

  # print(commits)

  for root, dirs, files in os.walk("./docs"):
    dirs.sort()
    if os.path.basename(root) != "img" :
      category = os.path.basename(root)

      for file in files:
        if(os.path.splitext(file)[1] == ".md"): 
          commit = get_file_commits(file)
          publishDate = ''
          if(len(commit) > 0) : 
            publishDate = commit[0].committed_datetime.strftime("%Y-%m-%d")
          

          with open(root + "/" + file, 'r') as original: title = original.readline()
          with open(root + "/" + file, 'r') as original: data = original.read()

          yaml = "---\ntitle: " + title.replace("#", "").replace(":", "") + "publishDate: " + publishDate +  "\n---\n"
          with open(root + "/" + file, 'w') as modified: modified.write(yaml + data)

        
if __name__ == "__main__":
    main()