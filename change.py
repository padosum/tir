import os 

def main():
  a = 0 

  for root, dirs, files in os.walk("./docs"):
    dirs.sort()
    if os.path.basename(root) != "img" :
      category = os.path.basename(root)
      for file in files:
        a = a + 1
        # with open(root + "/" + file) as f:
        #    first_line = f.readline()
        #    print(first_line)
        with open(root + "/" + file, 'r') as original: title = original.readline()
        with open(root + "/" + file, 'r') as original: data = original.read()
        yaml = "---\ntitle:" + title.replace("#", "").replace(":", "") + "\n" + "---\n"
        with open(root + "/" + file, 'w') as modified: modified.write(yaml + data)
      print(a)
if __name__ == "__main__":
    main()